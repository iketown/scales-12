import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import "./Dotboard.css";
import { Icon } from "semantic-ui-react";

import Car from "../../images/carPic.svg";
import Truck from "../../images/truckPic.svg";
import Wagon from "../../images/wagonPic.svg";
import Line from "../../images/linePic.svg";
import { pop, ding, plink } from "../keyboard/sounds/soundFX";
import { delayBetweenQuestions } from "../../utils/generalConfig";
import { iconNames } from "../../keySVGs/keyboardUtils";

const images = {
  car: Car,
  truck: Truck,
  wagon: Wagon,
  flipCar: Car,
  flipTruck: Truck,
  flipWagon: Wagon,
  line: Line
};
const DotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 7rem) 1rem;
  grid-gap: 5px;
  height: 10rem;
  align-items: center;
  position: relative;
  margin: 2rem;
`;
const BackgroundImageDiv = styled.div`
  background-image: url(${p => images[p.image]});
  transform: scaleY(${p => (p.image.includes("flip") ? "-1" : "")});
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  opacity: 0.2;
  background-repeat: no-repeat;
  background-position: center;
`;
const StyledIcon = styled(Icon)`
  transition: 0.3s all;
  :hover {
    transform: scale(1.3);
  }
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
const iconConfig = {
  selected: { scale: 1.3 },
  unselected: { scale: 1 }
};
const AnimatedDot = posed.div(dotConfig);
const AnimatedDotGrid = posed.div(dotGridConfig);
const AnimatedIcon = posed.div(iconConfig);
export default class Dotboard extends Component {
  state = {
    selectedDots: [],
    dotsIn: false,
    correct: false,
    finished: false,
    playCorrectSound: false
  };
  componentDidMount() {
    this.setState({ dotsIn: true });
  }
  componentWillUnmount() {
    this.setState({ dotsIn: false });
  }
  compon;

  handleDotclick = num => {
    pop();
    const dotIndex = { 1: 0, 5: 0, 2: 1, 6: 1, 3: 2, 7: 2, 4: 3, 8: 3 };

    const newDotArray = [...this.state.selectedDots];
    newDotArray[dotIndex[num]] = num;
    this.setState(
      {
        selectedDots: newDotArray
      },
      () => this.checkAnswer()
    );
  };
  checkAnswer = () => {
    const { correctAnswer } = this.props;
    const { selectedDots } = this.state;
    const guessLength = selectedDots.filter(dot => dot).length;
    const doneGuessing = guessLength >= 4;
    if (doneGuessing) {
      const goodGuesses = correctAnswer.filter(guess =>
        selectedDots.includes(guess)
      );
      console.log("good guess length", goodGuesses.length);
      const answerIsCorrect = goodGuesses.length === 4;
      if (answerIsCorrect) this.handleCorrectAnswer();
      else this.handleWrongAnswer();
    }
  };
  handleCorrectAnswer = () => {
    ding();
    this.setState({ correct: true });
    setTimeout(() => {
      this.resetDots();
      this.props.handleAnswer(true);
    }, delayBetweenQuestions);
  };
  handleWrongAnswer = () => {
    plink();
    setTimeout(() => {
      this.resetDots();
      this.props.handleAnswer(false);
    }, delayBetweenQuestions);
  };
  resetDots = () => {
    this.setState({ dotsIn: false });
    setTimeout(() => {
      this.setState({ dotsIn: true, selectedDots: [], correct: false });
    }, 100);
  };

  render() {
    const { selectedDots, dotsIn, correct } = this.state;
    const { correctAnswer, image } = this.props;
    console.log("image is", image);
    let startingDot = correctAnswer[0];

    const getDotShape = num => {
      if (selectedDots.includes(num)) return "selected";
      if (startingDot === num) return "starter";
      return "outline";
    };
    return (
      <AnimatedDotGrid pose={dotsIn ? "in" : "out"}>
        <DotGrid>
          <BackgroundImageDiv image={image} bgcolor="blue" />
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => {
            const selected = selectedDots.includes(num);
            return (
              <AnimatedDot
                key={num}
                onMouseDown={() => this.handleDotclick(num)}
                style={{
                  textAlign: "center",
                  color: `${
                    correct && selected ? "green" : selected ? "black" : "grey"
                  }`,
                  cursor: "pointer"
                }}
              >
                <AnimatedIcon pose={selected ? "selected" : "unselected"}>
                  <StyledIcon
                    name={iconNames[getDotShape(num)].text}
                    size="large"
                    color={iconNames[getDotShape(num)].color}
                  />
                </AnimatedIcon>
              </AnimatedDot>
            );
          })}
        </DotGrid>
      </AnimatedDotGrid>
    );
  }
}
