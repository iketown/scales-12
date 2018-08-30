import React, { Component } from "react";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
import { Header, Card, Image, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import { ding, plink } from "../components/keyboard/sounds/soundFX";
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
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, max-content));
  justify-content: center;
  grid-gap: 1.5rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(300px, max-content));
  }
`;
const ImageDiv = styled.div`
  background-image: url(${p => (p.showImage ? p.src : p.src2)});
  height: 10rem;
  background-size: contain;
  background-repeat: no-repeat;
`;
const QuestionCardDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  > div {
    border: 1px #555 solid;
    border-radius: 5px;
    text-align: center;
    padding: 1rem;
  }
`;
const ButtonSlider = posed.div({
  out: { x: "5rem", opacity: 0, disabled: true },
  in: { x: "0rem", opacity: 1, disabled: false, delay: 500 }
});
const Item = posed.li({});

const QuestionSlider = posed.div({
  before: { opacity: 0, x: "5rem" },
  enter: { opacity: 1, x: "0rem", delay: 100 },
  exit: { opacity: 0, x: "-5rem" }
});

const testQuestions = [
  {
    clue: "Line",
    answer: "line"
  },
  {
    clue: "Car",
    answer: "car"
  },
  {
    clue: "Truck",
    answer: "truck"
  },
  {
    clue: "Wagon",
    answer: "wagon"
  }
];

export default class Page3 extends Component {
  state = {
    questionIndex: 0,
    showImageOf: "car",
    shapeClicked: "",
    currentCorrectAnswer: "",
    shapeCards: []
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      shapeCards: cardsArr,
      currentCorrectAnswer: testQuestions[0].answer
    });
  }

  handleClickShape = shape => {
    this.setState({ shapeClicked: shape }, this.checkAnswer);
  };
  checkAnswer() {
    const { shapeClicked, currentCorrectAnswer } = this.state;
    console.log("you clicked, correct was", shapeClicked, currentCorrectAnswer);
    if (shapeClicked === currentCorrectAnswer) {
      this.handleCorrectAnswer();
    } else this.handleWrongAnswer();
  }
  handleCorrectAnswer() {
    ding();
    const { shapeClicked } = this.state;
    this.setState({ showImageOf: shapeClicked });
    setTimeout(this.advanceQuestion, 1000);
  }
  handleWrongAnswer() {
    plink();
    console.log("nope");
  }
  shuffle = () => {
    const { shapeCards } = this.state;
    const array = [...shapeCards];
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ shapeCards: array });
  };
  tripleShuffle = () => {
    const interval = 180;
    this.shuffle();
    setTimeout(this.shuffle, 2 * interval);
    setTimeout(this.shuffle, 3 * interval);
  };
  advanceQuestion = () => {
    const { questionIndex } = this.state;
    this.tripleShuffle();
    this.setState({
      questionIndex: questionIndex + 1,
      currentCorrectAnswer: testQuestions[questionIndex + 1].answer,
      showImageOf: ""
    });
  };
  render() {
    const { questionIndex, currentQuestion } = this.state;
    return (
      <Layout>
        <Header as="h2">
          <Header.Content>Quick Quiz</Header.Content>
        </Header>
        <div>
          <p>
            And now its time for a<strong> QUICK QUIZ</strong>
          </p>
          <p>I'll name a shape, and you click on it. ready ?</p>
          <Button
            onClick={() =>
              this.setState({ questionIndex: this.state.questionIndex + 1 })
            }
          >
            increment
          </Button>
          <Button onClick={this.tripleShuffle}>shuffle</Button>

          <QuestionCard
            clue={testQuestions[questionIndex].clue}
            questionIndex={questionIndex}
          />

          <CardsGrid>
            <PoseGroup>
              {this.state.shapeCards.map((card, i) => {
                const { showImageOf } = this.state;
                return (
                  <Item data-key={card.name} key={card.name}>
                    <ShapeCard
                      {...card}
                      i={i}
                      showImage={showImageOf === card.name}
                      onClick={() => this.handleClickShape(card.name)}
                      active={card.name === showImageOf}
                      disabled={card.name !== showImageOf}
                    />
                  </Item>
                );
              })}
            </PoseGroup>
          </CardsGrid>
        </div>
      </Layout>
    );
  }
}

const CardFader = posed.div({
  active: { opacity: 1, transform: "scale(1.1)" },
  disabled: { opacity: 0.8, transform: "scale(0.9)" }
});

const ShapeCard = ({
  src,
  src2,
  header,
  showImage,
  disabled,
  active,
  onClick
}) => (
  <CardFader
    pose={active ? "active" : "disabled"}
    style={{ position: "relative" }}
  >
    <Card>
      <Card.Content>
        <ImageDiv
          src={src}
          src2={src2}
          showImage={showImage}
          onClick={onClick}
        />
        <Card.Header>
          {showImage ? (
            <span>
              {header} <Icon name="check circle" />
            </span>
          ) : (
            " "
          )}
        </Card.Header>
      </Card.Content>
    </Card>
  </CardFader>
);

const cardsArr = [
  {
    src: Line,
    src2: lineDots,
    name: "line",
    header: "Line",
    description: "down • down •  down down"
  },
  {
    src: Car,
    src2: carDots,
    name: "car",
    header: "Car",
    description: "down • UP • UP down"
  },
  {
    src: Truck,
    src2: truckDots,
    name: "truck",
    header: "Truck",
    description: "down • down • UP down"
  },
  {
    src: Wagon,
    src2: wagonDots,
    name: "wagon",
    header: "Wagon",
    description: "down • down • down UP"
  }
];

const QuestionCard = ({ clue, questionIndex }) => {
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
