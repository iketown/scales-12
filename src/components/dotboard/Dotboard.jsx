import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import "./Dotboard.css";
import { Icon } from "semantic-ui-react";

import Car from "../../images/carPic.svg";
import Truck from "../../images/truckPic.svg";
import Wagon from "../../images/wagonPic.svg";
import Line from "../../images/linePic.svg";
import { pop } from "../keyboard/sounds/soundFX";
const images = {
  car: Car,
  truck: Truck,
  wagon: Wagon,
  line: Line
};
const DotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  height: 10rem;
  align-items: center;
  position: relative;
  margin: 2rem;
`;
const BackgroundImageDiv = styled.div`
  background-image: url(${p => images[p.image]});
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-size: contain;
  opacity: 0.2;
  background-repeat: no-repeat;
  background-position: center;
`;
const dotConfig = {
  in: { opacity: 1, y: "0rem" },
  out: { opacity: 0, y: "3rem" },
  selected: { scale: 1.3 },
  unselected: { scale: 1 }
};
const dotGridConfig = {
  in: { staggerChildren: 40 },
  out: {}
};
const AnimatedDot = posed.div(dotConfig);
const AnimatedDotGrid = posed.div(dotGridConfig);

export default class Dotboard extends Component {
  state = {
    selectedDots: {},
    sound: false,
    dotsIn: false,
    correct: false,
    finished: false,
    playCorrectSound: false
  };
  componentDidMount() {
    this.setState({ dotsIn: true });
  }

  handleDotclick = num => {
    pop();
    const opposite = { 1: 5, 2: 6, 3: 7, 4: 8, 5: 1, 6: 2, 7: 3, 8: 4 };

    // don't let them change the first dot
    if (num === opposite[this.props.correctAnswer[0]]) return;
    this.setState(
      {
        selectedDots: {
          ...this.state.selectedDots,
          [num]: true,
          [opposite[num]]: false
        },
        sound: true
      },
      () => this.checkAnswer()
    );
  };
  checkAnswer = () => {
    const { correctAnswer } = this.props;
    const { selectedDots } = this.state;
    const guessLength = Object.keys(selectedDots).reduce((arr, key) => {
      if (selectedDots[key] === true) arr.push(key);
      return arr;
    }, []).length;
    const doneGuessing = guessLength >= 4;
    if (doneGuessing) {
      const goodGuesses = Object.keys(correctAnswer).reduce((arr, key) => {
        if (selectedDots[key] === true) arr.push(key);
        return arr;
      }, []);
      const answerIsCorrect = goodGuesses.length === 4;
      if (answerIsCorrect) this.handleCorrectAnswer();
      else this.handleWrongAnswer();
    }
  };
  handleCorrectAnswer = () => {
    this.props.handleAnswer(true);
    this.resetDots();
  };
  handleWrongAnswer = () => {
    this.props.handleAnswer(false);
    this.resetDots();
  };
  resetDots = () => {
    this.setState({ selectedDots: [] });
  };

  render() {
    const { selectedDots, dotsIn, correct } = this.state;
    const { correctAnswer, image } = this.props;
    console.log("image is", image);
    let startingDot = correctAnswer[1] ? 1 : 5;

    const getDotShape = num => {
      if (selectedDots[num]) return "circle";
      if (startingDot === num) return "help circle";
      return "circle outline";
    };
    return (
      <AnimatedDotGrid pose={dotsIn ? "in" : "out"}>
        <DotGrid>
          <BackgroundImageDiv image={image} bgcolor="blue" />
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
            <AnimatedDot
              pose={selectedDots[num] ? "selected" : "unselected"}
              key={num}
              onMouseDown={() => this.handleDotclick(num)}
              style={{
                textAlign: `${num === 4 || num === 8 ? "left" : "center"}`,
                color: `${
                  correct && selectedDots[num]
                    ? "green"
                    : selectedDots[num]
                      ? "black"
                      : "grey"
                }`,
                cursor: "pointer"
              }}
            >
              <Icon name={getDotShape(num)} size="large" />
            </AnimatedDot>
          ))}
        </DotGrid>
      </AnimatedDotGrid>
    );
  }
}
