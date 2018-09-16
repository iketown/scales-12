import React, { Component } from "react";
import { connect } from "react-redux";
import posed, { PoseGroup } from "react-pose";
import Dimensions from "react-dimensions";
import { Button, Message } from "semantic-ui-react";
import styled from "styled-components";
import Synth from "./sounds/audiosynth";
import Key from "./Key.jsx";
import { ding, plink, keyClick } from "./sounds/soundFX";
import {
  keyObject,
  keyList,
  noteConverter,
  noteNumbers
} from "../../keySVGs/keyboardUtils";
import {
  delayBetweenQuestions,
  showCheaterButton
} from "../../utils/generalConfig";
import { completeKeyboardChallenge } from "../../actions/userScoreActions";
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
  piano.play(note, octave + 3, 2);
};

class Keyboard extends Component {
  state = {
    questionIndex: 0,
    keyGroups: [],
    userGuess: [],
    scaleNumbers: [],
    correctAnswer: [],
    targetIndex: 0,
    showCircles: true,
    correct: false,
    finished: false,
    keysIn: false,
    root1: "",
    showShapeBackground: false,
    highlight: ""
  };

  componentDidMount() {
    const { answers } = this.props;
    const correctAnswer =
      answers[0].correctAnswer &&
      answers[0].correctAnswer
        .split("")
        .filter(num => num !== "|")
        .map(num => Number(num));
    this.setState({
      keyGroups: keyList(answers[0].bottomKey, answers[0].topKey),
      starters: answers[0].starters,
      scaleNumbers: answers[0].scaleNumbers,
      root1: answers[0].scaleNumbers[0],
      correctAnswer: correctAnswer
    });
    setTimeout(() => this.setState({ keysIn: true }), 0);
  }

  clickHandler = noteName => () => {
    playNote(noteName);
    const myNum = this.getNumber(noteName);
    const { targetIndex, correctAnswer } = this.state;
    if (correctAnswer) {
      const nextCorrectNum = correctAnswer[targetIndex];
      if (myNum === nextCorrectNum) {
        this.setState({ targetIndex: targetIndex + 1 });
      }
    }
    this.setState({ highlight: noteName });
    setTimeout(() => this.setState({ highlight: "" }), 300);
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
    if (finished && correctCircles.includes(noteName)) return "correct";
    if (finished && wrongCircles.includes(noteName)) return "wrong";
    if (userGuess.includes(noteName)) return "selected";
    if (correctAnswer[0] === noteName) return "starter";
    if (starters && starters.includes(noteName)) return "starter";
    if (showAllCircles && correctAnswer.includes(noteName)) return "outline";
    return null;
  };
  getNumber = noteName => {
    const { scaleNumbers } = this.state;
    const number = scaleNumbers.findIndex(n => n === noteName);
    return number >= 0 ? number + 1 : null;
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
      continueLink,
      continueText,
      answers
    } = this.props;
    let { keyboardScale } = this.props;
    const {
      showCircles,
      root1,
      showShapeBackground,
      targetIndex,
      correctAnswer
    } = this.state;
    return (
      <div style={{ position: "relative", textAlign: "center" }}>
        <div>
          {correctAnswer &&
            correctAnswer.map((num, i) => (
              <QNumberDiv
                key={i}
                nextUp={i === this.state.targetIndex}
                done={i < this.state.targetIndex}
              >
                {noteNumbers[num] || " "}
              </QNumberDiv>
            ))}
        </div>
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
                    circleType={""}
                    number={this.getNumber(key[0])}
                    clickHandler={this.clickHandler(key[0])}
                    showLabel={keysToLabel && keysToLabel.includes(key[0])}
                    showShapeBackground={
                      showShapeBackground && key[0] === root1
                    }
                    keyboardScale={keyboardScale}
                    highlight={this.state.highlight === key[0]}
                  />
                  {key.length > 1 && (
                    <Key
                      {...sharedProps}
                      noteShape="flat"
                      key={`${key[0]} blackKey`}
                      noteName={key[1]}
                      hide={key[0] === bottomKey}
                      circleType={""}
                      number={this.getNumber(key[1])}
                      clickHandler={this.clickHandler(key[1])}
                      showLabel={keysToLabel && keysToLabel.includes(key[1])}
                      showShapeBackground={
                        showShapeBackground && key[1] === root1
                      }
                      keyboardScale={keyboardScale}
                      highlight={this.state.highlight === key[1]}
                    />
                  )}
                </WhiteKeyDiv>
              );
            })}
          </PoseGroup>
        </KeyboardDiv>
      </div>
    );
  }
}
const QNumberDiv = styled.span`
  margin: 3px;
  font-size: 25px;
  color: #ddd;
  transition: 0.5s all;

  ${p => (p.done ? "color: #57a5ff;" : "")} ${p =>
    p.nextUp ? "color: black; font-size: 35px;" : ""};
`;

const mapStateToProps = state => ({
  keyboardChallenges: state.userScore.keyboardChallenges
});
export default Dimensions()(connect(mapStateToProps)(Keyboard));
