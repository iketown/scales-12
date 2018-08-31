import React, { Component } from "react";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
import { Header, Card, Image, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import { ding, plink } from "../components/keyboard/sounds/soundFX";
import { shuffleArray } from "../utils/generalUtils";
import { delayBetweenQuestions } from "../utils/generalConfig";
import { ShapeCard } from "../components/uiElements/index";
import {
  Line,
  Car,
  Truck,
  Wagon,
  carDots,
  truckDots,
  wagonDots,
  lineDots
} from "../images";

const CardsGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, max-content));
  justify-content: center;
  grid-gap: 1.5rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(300px, max-content));
  }
`;

const Item = posed.li({});

const QuestionSlider = posed.div({
  before: { opacity: 0, x: "5rem" },
  enter: { opacity: 1, x: "0rem", delay: 100 },
  exit: { opacity: 0, x: "-5rem" }
});

const QuestionCard = ({ clue, questionIndex, testQuestions }) => {
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px green solid",
        padding: "2rem",
        margin: "1rem"
      }}
    >
      <h3>click on the </h3>
      <PoseGroup preEnterPose="before">
        {testQuestions.map((q, i) => {
          if (questionIndex === i) {
            return (
              <QuestionSlider key={i}>
                <h1>{clue}</h1>
              </QuestionSlider>
            );
          }
        })}
      </PoseGroup>
    </div>
  );
};

export default class Page3 extends Component {
  state = {
    questionIndex: 0,
    showImageOf: "",
    currentCorrectAnswer: "",
    shapeCards: [],
    wronglyClickedCards: []
  };
  componentDidMount() {
    const { testQuestions, cardsArr } = this.props;
    window.scrollTo(0, 0);
    this.setState({
      shapeCards: cardsArr,
      currentCorrectAnswer: testQuestions[0].answer
    });
  }

  handleClickShape = shape => {
    this.checkAnswer(shape);
  };
  checkAnswer(shape) {
    const { currentCorrectAnswer } = this.state;
    if (shape === currentCorrectAnswer) {
      this.handleCorrectAnswer(shape);
    } else this.handleWrongAnswer(shape);
  }
  handleCorrectAnswer(shape) {
    ding();
    this.setState({ showImageOf: shape });
    setTimeout(this.advanceQuestion, delayBetweenQuestions);
  }
  handleWrongAnswer(shape) {
    plink();
    this.setState({
      wronglyClickedCards: [...this.state.wronglyClickedCards, shape]
    });
  }

  doubleShuffle = () => {
    const interval = 250;
    const { shapeCards } = this.state;
    setTimeout(
      () => this.setState({ shapeCards: shuffleArray(shapeCards) }),
      interval
    );
    setTimeout(
      () => this.setState({ shapeCards: shuffleArray(shapeCards) }),
      interval * 2
    );
  };
  advanceQuestion = () => {
    const { questionIndex } = this.state;
    const { testQuestions } = this.props;
    if (questionIndex + 1 === testQuestions.length)
      return console.log("all done");
    this.doubleShuffle();
    this.setState({
      questionIndex: questionIndex + 1,
      currentCorrectAnswer: testQuestions[questionIndex + 1].answer,
      showImageOf: "",
      wronglyClickedCards: []
    });
  };
  render() {
    const { questionIndex, currentQuestion } = this.state;
    const { children, testQuestions } = this.props;
    return (
      <Layout>
        {children}
        <QuestionCard
          clue={testQuestions[questionIndex].clue}
          questionIndex={questionIndex}
          testQuestions={testQuestions}
        />

        <CardsGrid>
          <PoseGroup>
            {this.state.shapeCards.map((card, i) => {
              const { showImageOf, wronglyClickedCards } = this.state;
              return (
                <Item data-key={card.name} key={card.name}>
                  <ShapeCard
                    {...card}
                    i={i}
                    showImage={showImageOf === card.name}
                    onClick={() => this.handleClickShape(card.name)}
                    correct={card.name === showImageOf}
                    wrong={wronglyClickedCards.includes(card.name)}
                  />
                </Item>
              );
            })}
          </PoseGroup>
        </CardsGrid>
      </Layout>
    );
  }
}
