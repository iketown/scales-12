import React, { Component } from "react";
import styled from "styled-components";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import Key from "./Key.jsx";
import FinishedOverlay from "./FinishedOverlay";
import { keyObject, keyList } from "../../keySVGs/keyboardUtils";

const KeyboardDiv = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 800px;
  transform: scale(0.8);
  border: 1px lightgrey dotted;
`;

// a whitekeydiv is used to take up the right amount of width
// all contain an actual WhiteKey
// some contain BlackKeys, some do not
const WhiteKeyDiv = styled.div`
  position: relative;
  margin: 1px;
`;

export default class Keyboard extends Component {
  state = {
    keyGroups: [],
    showAnswer: true,
    correctAnswer: ["D1", "E1", "Gb1", "G1"],
    userGuess: [],
    finished: false,
    correct: false
  };
  componentDidMount() {
    const { bottomKey, topKey } = this.props;
    this.setState({ keyGroups: keyList(bottomKey, topKey) });
  }
  clickHandler = noteName => () => {
    console.log("note name", noteName);
    this.state.userGuess.includes(noteName)
      ? this.removeNoteFromGuess(noteName)
      : this.addNoteToGuess(noteName);
  };
  addNoteToGuess = noteName => {
    this.setState(
      { userGuess: [...this.state.userGuess, noteName] },
      this.checkGuess
    );
  };
  removeNoteFromGuess = noteName => {
    this.setState({
      userGuess: this.state.userGuess.filter(note => note !== noteName)
    });
  };
  checkGuess() {
    const { correctAnswer, userGuess } = this.state;
    if (correctAnswer.length === userGuess.length) {
      if (
        correctAnswer.filter(note => !userGuess.includes(note)).length === 0
      ) {
        console.log("CORRECT!");
        this.setState({ finished: true, correct: true });
      } else {
        this.setState({ finished: true, correct: true });
        console.log("NOPPPPE!");
      }
    } else {
      return;
    }
  }
  getCircleShape = noteName => {
    const { userGuess, correctAnswer, showAnswer } = this.state;
    if (userGuess.includes(noteName) && correctAnswer.includes(noteName))
      return "green";
    if (userGuess.includes(noteName) && !correctAnswer.includes(noteName))
      return "red";
    if (showAnswer && correctAnswer.includes(noteName)) return "outline";
    return null;
  };
  render() {
    const { bottomKey, keysToLabel, keyboardId } = this.props;
    return (
      <KeyboardDiv>
        {this.state.keyGroups.map(key => (
          <WhiteKeyDiv key={key}>
            <Key
              keyboardId={keyboardId}
              noteShape={keyObject[key[0]].shape}
              noteName={key[0]}
              circleType={this.getCircleShape(key[0])}
              clickHandler={this.clickHandler(key[0])}
            />
            {key.length > 1 && (
              <Key
                keyboardId={keyboardId}
                noteShape="flat"
                noteName={key[1]}
                hide={key[0] === bottomKey}
                circleType={this.getCircleShape(key[1])}
                clickHandler={this.clickHandler(key[1])}
              />
            )}
          </WhiteKeyDiv>
        ))}
        {this.state.finished && <FinishedOverlay />}
      </KeyboardDiv>
    );
  }
}
