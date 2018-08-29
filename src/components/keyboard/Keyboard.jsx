import React, { Component } from "react";
import { connect } from "react-redux";
import posed from "react-pose";
import styled from "styled-components";
import Synth from "./sounds/audiosynth";
import Key from "./Key.jsx";
import { pop, ding, plink, keyClick } from "./sounds/soundFX";
import { keyObject, keyList, noteConverter } from "../../keySVGs/keyboardUtils";
import {
  keyboardScale,
  delayBetweenQuestions
} from "../../utils/generalConfig";

const piano = Synth.createInstrument("piano");

const KeyboardDiv = styled.div`
  display: flex;
  // margin: 1rem auto;
  // border: 2px blue dotted;
  padding: 10px;
  width: ${({ keysWide, keyboardScale }) =>
    keysWide * 79 * keyboardScale + 30}px;
  z-index: 10;
  position: relative;
`;

const WhiteKeyDiv = styled.div`
  position: relative;
  margin: 1px;
`;
const keyConfig = {
  in: { x: "0vw", opacity: 1, delayChildren: 50 },
  out: { x: "50vw", opacity: 0 }
};
const keyboardConfig = {
  in: { staggerChildren: 20 },
  out: { staggerChildren: 30, staggerDirection: -1 }
};
const AnimatedKey = posed.div(keyConfig);
const AnimatedKeyboard = posed.div(keyboardConfig);

const playNote = noteName => {
  let octave = Number(noteName.split("").pop());
  let note = noteConverter[noteName.slice(0, -1)];
  piano.play(note, octave + 2, 2);
};

class Keyboard extends Component {
  state = {
    keyGroups: [],
    userGuess: [],
    correctCircles: [],
    wrongCircles: [],
    showCircles: true,
    correct: false,
    finished: false,
    playClickSound: false,
    playCorrectSound: false,
    playWrongSound: false,
    keysIn: false
  };

  componentDidMount() {
    const { bottomKey, topKey } = this.props;
    this.setState({
      keyGroups: keyList(bottomKey, topKey)
    });
    setTimeout(() => this.setState({ keysIn: true }), 10);
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
    keyClick();
    this.setState({
      userGuess: this.state.userGuess.filter(note => note !== noteName)
    });
  };
  checkGuess() {
    const { userGuess } = this.state;
    const { correctAnswer } = this.props;
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
    const { handleAnswer } = this.props;
    ding();
    this.setState({
      correct: true,
      showCircles: false,
      finished: true
    });
    setTimeout(() => {
      handleAnswer(true);
      this.resetKeyboard();
    }, delayBetweenQuestions);
  };
  handleWrongAnswer = () => {
    const { handleAnswer } = this.props;
    plink();
    this.setState({ correct: false, showCircles: false, finished: true });
    setTimeout(() => {
      handleAnswer(false);
      this.resetKeyboard();
    }, delayBetweenQuestions);
  };
  resetKeyboard = () => {
    this.setState({
      userGuess: [],
      correct: false,
      circlesIn: true,
      finished: false,
      playCorrectSound: false,
      playWrongSound: false
    });
  };
  getCircleShape = noteName => {
    const { userGuess, finished, correctCircles, wrongCircles } = this.state;
    const { correctAnswer, showAllCircles, starters } = this.props;
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
      showShapeBackground
    } = this.props;
    const { keysIn, showCircles } = this.state;
    return (
      <div>
        {/* <button onClick={() => this.setState({ keysIn: !this.state.keysIn })}>
          toggle
        </button> */}
        <AnimatedKeyboard pose={keysIn ? "in" : "out"}>
          <KeyboardDiv>
            {this.state.keyGroups.map(key => {
              const sharedProps = {
                keyboardId,
                showCircles
              };
              return (
                <WhiteKeyDiv key={`${key[0]} whiteKeyDiv`}>
                  <AnimatedKey key={`${key[0]} animatedKey`}>
                    <Key
                      {...sharedProps}
                      key={`${key[0]} whiteKey`}
                      noteShape={keyObject[key[0]].shape}
                      noteName={key[0]}
                      circleType={this.getCircleShape(key[0])}
                      clickHandler={this.clickHandler(key[0])}
                      showLabel={keysToLabel && keysToLabel.includes(key[0])}
                      showShapeBackground={showShapeBackground}
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
                      />
                    )}
                  </AnimatedKey>
                </WhiteKeyDiv>
              );
            })}
          </KeyboardDiv>
        </AnimatedKeyboard>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Keyboard);
