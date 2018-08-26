import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import posed from "react-pose";
import styled from "styled-components";
import Synth from "./sounds/audiosynth";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import Key from "./Key.jsx";
import FinishedOverlay from "./FinishedOverlay";
import Scoreboard from "../ScoreBoard.jsx";
import Click from "./sounds/Click";
import { keyObject, keyList } from "../../keySVGs/keyboardUtils";
const piano = Synth.createInstrument("piano");

const KeyboardDiv = styled.div`
  display: flex;
  // margin: 1rem auto;
  // border: 2px blue dotted;
  padding: 10px;
  width: ${({ keysWide, scale }) => keysWide * 79 * scale + 30}px;
  z-index: 10;
  position: relative;
`;
const KeyboardFrame = styled.div`
  border: 1px #eaeaea solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  border-radius: 10px;
  padding: 1rem;
  background: #efefef5e;
`;
const Instructions = styled.div`
  border: 1px purple dotted;
  grid-column: 1/-1;
  margin-bottom: 2rem;
`;

const WhiteKeyDiv = styled.div`
  position: relative;
  margin: 1px;
`;
const keyConfig = {
  in: { x: "0vw", delayChildren: 100 },
  out: { x: "110vw" }
};
const keyboardConfig = {
  in: { staggerChildren: 20 },
  out: { staggerChildren: 30, staggerDirection: -1 }
};
const AnimatedKey = posed.div(keyConfig);
const AnimatedKeyboard = posed.div(keyboardConfig);
const noteConverter = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#"
};
const playNote = noteName => {
  let octave = Number(noteName.split("").pop());
  let note = noteConverter[noteName.slice(0, -1)];
  piano.play(note, octave + 2, 2);
};

class Keyboard extends Component {
  state = {
    keyGroups: [],
    showShape: false,
    userGuess: [],
    finished: false,
    correct: false,
    playClickSound: false,
    keysIn: false,
    questionNumber: 0
  };

  componentDidMount() {
    const { bottomKey, topKey, showShape } = this.props;
    this.setState({
      keyGroups: keyList(bottomKey, topKey),
      showShape: showShape
    });
    setTimeout(() => this.setState({ keysIn: true }), 1000);
  }
  increment = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };
  clickHandler = noteName => () => {
    this.setState({ playClickSound: false });
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
    this.setState({
      userGuess: this.state.userGuess.filter(note => note !== noteName),
      playClickSound: true
    });
  };
  checkGuess() {
    const { userGuess } = this.state;
    const { correctAnswer } = this.props;
    if (correctAnswer.length === userGuess.length) {
      if (
        // if there are no un-clicked correct notes (so answer is correct)
        correctAnswer.filter(note => !userGuess.includes(note)).length === 0
      ) {
        this.setState({ finished: true, correct: true });
      } else {
        this.setState({ finished: true, correct: false });
      }
    } else {
      return;
    }
  }
  getCircleShape = noteName => {
    const { userGuess } = this.state;
    const { correctAnswer, showAll, showFirst, showHints } = this.props;
    if (
      showHints &&
      userGuess.includes(noteName) &&
      correctAnswer.includes(noteName)
    )
      return "green";
    if (
      showHints &&
      userGuess.includes(noteName) &&
      !correctAnswer.includes(noteName)
    )
      return "red";
    if (userGuess.includes(noteName)) return "selectedNoHints";
    if (showFirst && correctAnswer[0] === noteName) return "starter";
    if (showAll && correctAnswer.includes(noteName)) return "outline";
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
    const { bottomKey, keysToLabel, keyboardId, correctAnswer } = this.props;
    const scale = this.props.scale || 1;
    const { showShape, keysIn, questionNumber } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ keysIn: !this.state.keysIn })}>
          toggle
        </button>
        <AnimatedKeyboard pose={keysIn ? "in" : "out"}>
          <KeyboardFrame>
            <Instructions>
              <h1>Car Shapes</h1>
              <p>first we'll learn how to do the car shapes</p>
            </Instructions>
            <Scoreboard
              increment={this.increment}
              questionNumber={questionNumber}
            >
              <h1>yo</h1>
            </Scoreboard>
            <KeyboardDiv>
              {this.state.keyGroups.map(key => (
                <AnimatedKey>
                  <WhiteKeyDiv key={key}>
                    <Key
                      toggleCircle={keysIn}
                      scale={scale}
                      keyboardId={keyboardId}
                      noteShape={keyObject[key[0]].shape}
                      noteName={key[0]}
                      circleType={this.getCircleShape(key[0])}
                      clickHandler={this.clickHandler(key[0])}
                      showShape={showShape && key[0] === correctAnswer[0]}
                      showLabel={keysToLabel.includes(key[0])}
                    />
                    {key.length > 1 && (
                      <Key
                        scale={scale}
                        keyboardId={keyboardId}
                        noteShape="flat"
                        noteName={key[1]}
                        hide={key[0] === bottomKey}
                        circleType={this.getCircleShape(key[1])}
                        clickHandler={this.clickHandler(key[1])}
                        showShape={showShape && key[1] === correctAnswer[0]}
                        showLabel={keysToLabel.includes(key[1])}
                      />
                    )}
                  </WhiteKeyDiv>
                </AnimatedKey>
              ))}
              {this.state.finished && (
                <FinishedOverlay
                  correct={this.state.correct}
                  doOver={this.doOver}
                  scale={scale}
                />
              )}
              {this.state.playClickSound && <Click />}
            </KeyboardDiv>
          </KeyboardFrame>
        </AnimatedKeyboard>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Keyboard);
