import React, { Component } from "react";
import { connect } from "react-redux";
import posed, { PoseGroup } from "react-pose";
import Dimensions from "react-dimensions";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import Synth from "./sounds/audiosynth";
import Key from "./Key.jsx";
import { ding, plink, pop } from "./sounds/soundFX";
import { keyObject, keyList, noteConverter } from "../../keySVGs/keyboardUtils";
import { showCheaterButton } from "../../utils/generalConfig";
import { completeKeyboardChallenge } from "../../actions/userScoreActions";
import FinishedOverlay from "./FinishedOverlay.jsx";
import CheckBoxes from "./CheckBoxes.jsx";
const piano = Synth.createInstrument("piano");

const KeyboardDiv = styled.div`
  display: inline-flex;
  // margin: 1rem auto;
  // border: 2px blue dotted;
  padding: 10px;
  width: ${({ keysWide, keyboardScale }) =>
    keysWide * 79 * keyboardScale + 30}px;
  z-index: 10;
  position: relative;
`;
const ButtonDiv = styled.div`
  margin-top: 2rem;
`;

const staggerDuration = 50;
const keyConfig = {
  before: {
    y: "-5vh",
    opacity: 0,
    transition: { type: "spring", stiffness: 200 }
  },
  enter: {
    y: "0vh",
    opacity: 1,
    transition: { type: "spring", stiffness: 200, mass: 1.5 },
    delay: ({ i }) => i * staggerDuration
  },
  exit: {
    y: "5vh",
    opacity: 0,
    transition: { type: "spring", stiffness: 200 }
  }
};
const AnimatedKey = posed.div(keyConfig);
const WhiteKeyDiv = styled(AnimatedKey)`
  position: relative;
  margin: ${p => p.keyboardScale * 1 || 1}px;
`;

const playNote = noteName => {
  let octave = Number(noteName.split("").pop());
  let note = noteConverter[noteName.slice(0, -1)];
  piano.play(note, octave + 2, 2);
};

class Keyboard extends Component {
  state = {
    questionIndex: 0,
    keyGroups: [],
    userGuess: [],
    correctAnswer: "",
    wronglyClickedButtons: [],
    correctNotes: [],
    notesToShow: [],
    noteQuestion: "",
    correct: false,
    finished: false,
    showShapeBackground: false,
    showCircles: true
  };

  componentDidMount() {
    const { answers, bottomKey, topKey } = this.props;

    this.setState({
      keyGroups: keyList(bottomKey, topKey),
      correctAnswer: answers[0].shape,
      noteQuestion: answers[0].noteName,
      correctNotes: answers[0].notes
    });
    setTimeout(() => this.setState({ keysIn: true }), 0);
  }
  increment = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };
  clickHandler = noteName => () => {
    playNote(noteName);
  };
  buttonClick = shape => () => {
    const { correctAnswer } = this.state;
    if (shape === correctAnswer) this.handleCorrectAnswer();
    else this.handleWrongAnswer(shape);
  };

  handleCorrectAnswer = async () => {
    ding();
    const { whenToShowShape } = this.props;
    this.setState({
      showShapeBackground: whenToShowShape === "afterCorrect"
    });
    await this.animateNotes();
    setTimeout(this.goToNextQuestion, 1000);
  };
  handleWrongAnswer = shape => {
    plink();
    this.setState({
      wronglyClickedButtons: [...this.state.wronglyClickedButtons, shape]
    });
  };
  animateNotes = () => {
    return new Promise((resolve, reject) => {
      const { correctNotes } = this.state;
      let nowPlayingIndex = 0;
      const addNoteToShowList = () => {
        if (nowPlayingIndex >= correctNotes.length) {
          resolve();
          return clearInterval(playNotes);
        }
        pop();
        console.log("adding:", correctNotes[nowPlayingIndex]);

        this.setState(
          {
            notesToShow: [
              ...this.state.notesToShow,
              correctNotes[nowPlayingIndex]
            ]
          },
          () => nowPlayingIndex++
        );
      };

      const playNotes = setInterval(addNoteToShowList, 200);
    });
  };
  goToNextQuestion = () => {
    const { answers } = this.props;
    const nextIndex = this.state.questionIndex + 1;
    if (nextIndex >= answers.length) {
      this.finishThisTest();
      this.setState({ questionIndex: nextIndex });
    } else {
      this.setState(
        {
          showCircles: false,
          questionIndex: nextIndex,
          correctAnswer: answers[nextIndex].shape,
          correctNotes: answers[nextIndex].notes,
          noteQuestion: answers[nextIndex].noteName,
          showShapeBackground: false,
          notesToShow: []
        },
        this.resetKeyboard
      );
    }
  };
  finishThisTest = () => {
    const { keyboardId, callbackWhenFinished } = this.props;
    if (callbackWhenFinished) callbackWhenFinished();
    this.props.dispatch(completeKeyboardChallenge(keyboardId));
    this.setState({ finished: true });
  };
  resetKeyboard = () => {
    this.setState({
      showCircles: true,
      finished: false,
      wronglyClickedButtons: []
    });
  };
  getCircleShape = noteName => {
    const { noteQuestion, notesToShow } = this.state;
    if (notesToShow.includes(noteName)) return "selected";
    if (noteQuestion === noteName) return "starter";

    return null;
  };
  doOver = () => {
    this.setState({
      userGuess: [],
      finished: false,
      correct: false
    });
  };
  render() {
    const { bottomKey, answers } = this.props;
    let { keyboardScale } = this.props;
    const {
      showCircles,
      noteQuestion,
      showShapeBackground,
      wronglyClickedButtons,
      correctAnswer
    } = this.state;
    return (
      <div style={{ position: "relative", textAlign: "center" }}>
        <ButtonDiv>
          <CheckBoxes
            totalAnswersCount={answers.length}
            currentIndex={this.state.questionIndex}
          />
          {["Wagon", "Line", "Truck", "Car"].map(shape => {
            let style;
            if (wronglyClickedButtons.includes(shape)) {
              style = { color: "red", basic: true };
            }
            if (showShapeBackground && shape === correctAnswer) {
              style = { primary: true };
            }
            return (
              <Button onClick={this.buttonClick(shape)} {...style}>
                {shape}
              </Button>
            );
          })}
        </ButtonDiv>
        <KeyboardDiv>
          <PoseGroup preEnterPose="before">
            {this.state.keyGroups.map((key, i) => {
              const sharedProps = {
                showCircles
              };
              return (
                <WhiteKeyDiv
                  keyboardScale={keyboardScale}
                  key={`${key[0]} whiteKeyDiv`}
                  i={i}
                >
                  <Key
                    {...sharedProps}
                    key={`${key[0]} whiteKey`}
                    noteShape={keyObject[key[0]].shape}
                    noteName={key[0]}
                    circleType={this.getCircleShape(key[0])}
                    clickHandler={this.clickHandler(key[0])}
                    showShapeBackground={
                      showShapeBackground && key[0] === noteQuestion
                    }
                    keyboardScale={keyboardScale}
                  />
                  {key.length > 1 && (
                    <Key
                      {...sharedProps}
                      noteShape="flat"
                      key={`${key[0]} blackKey`}
                      noteName={key[1]}
                      hide={key[0] === bottomKey}
                      circleType={this.getCircleShape(key[1])}
                      clickHandler={this.clickHandler(key[1])}
                      showShapeBackground={
                        showShapeBackground && key[1] === noteQuestion
                      }
                      keyboardScale={keyboardScale}
                    />
                  )}
                </WhiteKeyDiv>
              );
            })}
          </PoseGroup>
          {showCheaterButton && (
            <Button
              style={{ position: "absolute", top: 0, right: 0, zIndex: 100 }}
              onClick={this.handleCorrectAnswer}
            >
              cheat
            </Button>
          )}
          {this.state.finished && <FinishedOverlay correct />}
        </KeyboardDiv>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  keyboardChallenges: state.userScore.keyboardChallenges
});
export default Dimensions()(connect(mapStateToProps)(Keyboard));
