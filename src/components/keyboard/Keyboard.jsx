import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import Synth from "./sounds/audiosynth";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import Key from "./Key.jsx";
import FinishedOverlay from "./FinishedOverlay";
import Click from "./sounds/Click";
import { keyObject, keyList } from "../../keySVGs/keyboardUtils";
const piano = Synth.createInstrument("piano");

const KeyboardDiv = styled.div`
  display: flex;
  margin: 1rem auto;
  transform: scale(0.5);
  border: 2px blue dotted;
  padding: 10px;
  width: ${({ keysWide }) => keysWide * 79 + 20}px;
`;

const WhiteKeyDiv = styled.div`
  position: relative;
  margin: 1px;
`;
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

export default class Keyboard extends Component {
  state = {
    keyGroups: [],
    showAnswer: true,
    showFirstOnly: true,
    showShape: false,
    correctAnswer: [],
    userGuess: [],
    finished: false,
    correct: false,
    playClickSound: false
  };
  componentDidMount() {
    const { bottomKey, topKey, correctAnswer } = this.props;
    this.setState({ keyGroups: keyList(bottomKey, topKey), correctAnswer });
  }
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
    const { correctAnswer, userGuess } = this.state;
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
    const { userGuess, correctAnswer, showAnswer, showFirstOnly } = this.state;
    if (userGuess.includes(noteName) && correctAnswer.includes(noteName))
      return "green";
    if (userGuess.includes(noteName) && !correctAnswer.includes(noteName))
      return "red";
    if (showAnswer && correctAnswer.includes(noteName)) return "outline";
    if (showFirstOnly && correctAnswer[0] === noteName) return "starter";
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
    const { bottomKey, keysToLabel, keyboardId } = this.props;
    return (
      <KeyboardDiv keysWide={this.state.keyGroups.length}>
        {this.state.keyGroups.map(key => (
          <WhiteKeyDiv key={key}>
            <Key
              keyboardId={keyboardId}
              noteShape={keyObject[key[0]].shape}
              noteName={key[0]}
              circleType={this.getCircleShape(key[0])}
              clickHandler={this.clickHandler(key[0])}
              showShape={key[0] === this.state.correctAnswer[0]}
            />
            {key.length > 1 && (
              <Key
                keyboardId={keyboardId}
                noteShape="flat"
                noteName={key[1]}
                hide={key[0] === bottomKey}
                circleType={this.getCircleShape(key[1])}
                clickHandler={this.clickHandler(key[1])}
                showShape={key[1] === this.state.correctAnswer[0]}
              />
            )}
          </WhiteKeyDiv>
        ))}
        {this.state.finished && (
          <FinishedOverlay correct={this.state.correct} doOver={this.doOver} />
        )}
        {this.state.playClickSound && <Click />}
      </KeyboardDiv>
    );
  }
}
