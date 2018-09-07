import React, { Component } from "react";
import { connect } from "react-redux";
import posed, { PoseGroup } from "react-pose";
import Dimensions from "react-dimensions";
import { Button, Message } from "semantic-ui-react";
import styled from "styled-components";
import Synth from "./sounds/audiosynth";
import Key from "./Key.jsx";
import { pop, ding, plink, keyClick } from "./sounds/soundFX";
import { keyObject, keyList, noteConverter } from "../../keySVGs/keyboardUtils";
import { delayBetweenQuestions } from "../../utils/generalConfig";
import { completeKeyboardChallenge } from "../../actions/userScoreActions";
import FinishedOverlay from "./FinishedOverlay.jsx";
import { delay } from "popmotion";
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
    transition: { type: "spring", stiffness: 200 },
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

// const keyboardConfig = {
//   enter: { staggerChildren: 20 },
//   exit: { staggerChildren: 30, staggerDirection: -1 }
// };
// const AnimatedKeyboard = posed.div(keyboardConfig);
// const StyledKeyboard = styled(AnimatedKeyboard)`
//   display: inline-flex;
//   position: relative;
// `;

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
    correctCircles: [],
    wrongCircles: [],
    correctAnswer: [],
    showCircles: true,
    correct: false,
    finished: false,
    keysIn: false
  };

  componentDidMount() {
    const { bottomKey, topKey, answers } = this.props;
    this.setState({
      keyGroups: keyList(answers[0].bottomKey, answers[0].topKey),
      correctAnswer: answers[0].correctAnswer,
      starters: answers[0].starters
    });
    setTimeout(() => this.setState({ keysIn: true }), 0);
  }
  increment = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };
  clickHandler = noteName => () => {
    this.state.userGuess.includes(noteName)
      ? this.removeNoteFromGuess(noteName)
      : this.addNoteToGuess(noteName);
  };
  addNoteToGuess = noteName => {
    playNote(noteName);
    this.setState(
      { userGuess: [...this.state.userGuess, noteName] },
      this.checkGuess
    );
  };
  removeNoteFromGuess = noteName => {
    keyClick();
    this.setState({
      userGuess: this.state.userGuess.filter(note => note !== noteName)
    });
  };
  checkGuess() {
    const { userGuess } = this.state;
    const { correctAnswer } = this.state;
    const correctCircles = userGuess.filter(guess =>
      correctAnswer.includes(guess)
    );
    const wrongCircles = userGuess.filter(
      guess => !correctAnswer.includes(guess)
    );
    this.setState({ correctCircles, wrongCircles });
    if (correctAnswer.length === userGuess.length) {
      if (
        // if there are no un-clicked correct notes (so answer is correct)
        correctAnswer.filter(note => !userGuess.includes(note)).length === 0
      ) {
        this.handleCorrectAnswer();
      } else {
        this.handleWrongAnswer();
      }
    } else {
      return;
    }
  }
  handleCorrectAnswer = () => {
    ding();
    this.setState({
      showCircles: false
    });
    setTimeout(this.goToNextQuestion, 1000);
  };
  handleWrongAnswer = () => {
    plink();
    this.setState({ correct: false, showCircles: false, finished: true });
    setTimeout(this.resetKeyboard, delayBetweenQuestions);
  };
  goToNextQuestion = () => {
    const { answers } = this.props;
    const nextIndex = this.state.questionIndex + 1;
    if (nextIndex >= answers.length) {
      this.finishThisTest();
    } else {
      this.setState(
        {
          questionIndex: nextIndex,
          correctAnswer: answers[nextIndex].correctAnswer,
          starters: answers[nextIndex].starters
        },
        this.resetKeyboard
      );
    }
  };
  finishThisTest = () => {
    const { keyboardId } = this.props;
    this.props.dispatch(completeKeyboardChallenge(keyboardId));
  };
  resetKeyboard = () => {
    const index = this.state.questionIndex;
    const { answers } = this.props;
    this.setState({
      userGuess: [],
      showCircles: true,
      correctCircles: [],
      wrongCircles: [],
      keyGroups: keyList(answers[index].bottomKey, answers[index].topKey),
      finished: false
    });
  };
  getCircleShape = noteName => {
    const {
      userGuess,
      finished,
      correctCircles,
      wrongCircles,
      starters,
      correctAnswer
    } = this.state;
    const { showAllCircles } = this.props;
    // first check if deemed 'right' or 'wrong'.  otherwise, its just 'selected'
    if (finished && correctCircles.includes(noteName)) return "correct";
    if (finished && wrongCircles.includes(noteName)) return "wrong";
    if (userGuess.includes(noteName)) return "selected";
    if (correctAnswer[0] === noteName) return "starter";
    if (starters && starters.includes(noteName)) return "starter";
    if (showAllCircles && correctAnswer.includes(noteName)) return "outline";
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
    const {
      bottomKey,
      keysToLabel,
      keyboardId,
      showShapeBackground,
      messageInstructions,
      continueLink,
      continueText
    } = this.props;
    let { keyboardScale } = this.props;
    const { keysIn, showCircles } = this.state;
    const thisTest = this.props.keyboardChallenges[keyboardId];
    const doneWithThisTest =
      thisTest && this.props.keyboardChallenges[keyboardId].completed;
    return (
      <div style={{ position: "relative", textAlign: "center" }}>
        <Message {...messageInstructions} />
        {/* <StyledKeyboard pose={keysIn ? "enter" : "exit"}> */}
        <KeyboardDiv>
          <PoseGroup preEnterPose="before">
            {this.state.keyGroups.map((key, i) => {
              const sharedProps = {
                keyboardId,
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
                    showLabel={keysToLabel && keysToLabel.includes(key[0])}
                    showShapeBackground={showShapeBackground}
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
                      showLabel={keysToLabel && keysToLabel.includes(key[1])}
                      showShapeBackground={showShapeBackground}
                      keyboardScale={keyboardScale}
                    />
                  )}
                </WhiteKeyDiv>
              );
            })}
          </PoseGroup>
          {doneWithThisTest && (
            <FinishedOverlay
              correct
              continueLink={continueLink}
              continueText={continueText}
            />
          )}
        </KeyboardDiv>
        {/* </StyledKeyboard> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  keyboardChallenges: state.userScore.keyboardChallenges
});
export default Dimensions()(connect(mapStateToProps)(Keyboard));
