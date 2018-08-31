import React, { Component } from "react";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
import {
  Header,
  Card,
  Image,
  Button,
  Icon,
  GridColumn
} from "semantic-ui-react";
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
  background: #f9f9f9;
  padding: 1rem;
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

const QuestionCardDiv = styled.div`
  text-align: center;
  padding: 1rem;
  grid-column: 1 / -1;
  background: whitesmoke;
  box-shadow: 1px 1px 4px #cacaca99;
  margin: 0 1rem;
  border-radius: 5px;
`;
const CheckboxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-bottom: 5px;
  height: 2rem;
  & .fade {
    opacity: 0.5;
  }
`;
const TextSection = styled(Item)`
  text-align: center;
  grid-column: 1 / -1;
`;

const QuestionCard = ({
  clue,
  questionIndex,
  testQuestions,
  correctCheckboxIndex,
  lessonIntroOuttro,
  lessonText
}) => {
  return (
    <QuestionCardDiv>
      <CheckboxDiv>
        {testQuestions.map((q, i) => {
          if (i === correctCheckboxIndex)
            return (
              <div style={{ transform: "scale(1.5)" }}>
                <Icon name="square check" color="green" />
              </div>
            );
          else if (i < questionIndex) {
            return <Icon name="square check" color="green" className="fade" />;
          } else {
            return <Icon name="square outline" color="grey" className="fade" />;
          }
        })}
      </CheckboxDiv>
      {lessonIntroOuttro === "intro" && lessonText.intro.head}
      {lessonIntroOuttro === "outtro" && lessonText.outtro.head}
      {!lessonIntroOuttro && (
        <PoseGroup preEnterPose="before">
          <p>CLICK ON THE</p>
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
      )}
    </QuestionCardDiv>
  );
};

export default class CardQuizPage extends Component {
  state = {
    questionIndex: 0,
    showImageOf: "",
    currentCorrectAnswer: "",
    correctCheckboxIndex: null,
    shapeCards: [],
    wronglyClickedCards: [],
    lessonIntroOuttro: "intro"
  };
  componentDidMount() {
    const { testQuestions, cardsArr } = this.props;
    window.scrollTo(0, 0);
    this.setState({
      shapeCards: cardsArr,
      currentCorrectAnswer: testQuestions[0].answer,
      lessonIntroOuttro: "intro"
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
    this.setState({
      showImageOf: shape,
      correctCheckboxIndex: this.state.questionIndex
    });
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
    const { testQuestions, handleCompletedQuiz } = this.props;
    if (questionIndex + 1 === testQuestions.length) return this.endQuiz();
    this.doubleShuffle();
    this.setState({
      questionIndex: questionIndex + 1,
      currentCorrectAnswer: testQuestions[questionIndex + 1].answer,
      correctCheckboxIndex: null,
      showImageOf: "",
      wronglyClickedCards: []
    });
  };
  startQuiz = () => {
    this.props.handleStartedQuiz();
    this.setState({ lessonIntroOuttro: null });
  };
  endQuiz = () => {
    const { handleCompletedQuiz } = this.props;
    handleCompletedQuiz();
    this.setState({ lessonIntroOuttro: "outtro" });
  };
  whoIsThis() {
    console.log("i am card quiz page");
  }
  render() {
    const {
      questionIndex,
      wronglyClickedCards,
      correctCheckboxIndex,
      lessonIntroOuttro
    } = this.state;
    const { testQuestions, lessonText } = this.props;
    return (
      <Layout>
        <CardsGrid>
          <QuestionCard
            clue={testQuestions[questionIndex].clue}
            questionIndex={questionIndex}
            testQuestions={testQuestions}
            wronglyClickedCards={wronglyClickedCards}
            correctCheckboxIndex={correctCheckboxIndex}
            lessonIntroOuttro={lessonIntroOuttro}
            lessonText={lessonText}
          />
          <PoseGroup>
            {lessonIntroOuttro === "intro" ? (
              <TextSection>
                {lessonText.intro.body}
                <br />
                <Button onClick={this.startQuiz}>GO!</Button>
              </TextSection>
            ) : lessonIntroOuttro === "outtro" ? (
              <TextSection>
                {lessonText.outtro.body}
                <Button as={Link} to={lessonText.linkToNextLesson}>
                  NEXT
                </Button>
              </TextSection>
            ) : (
              this.state.shapeCards.map((card, i) => {
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
              })
            )}
          </PoseGroup>
        </CardsGrid>
      </Layout>
    );
  }
}
