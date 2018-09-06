import React, { Component } from "react";
import Scoreboard from "./ScoreBoard.jsx";
import Dotboard from "./dotboard/Dotboard.jsx";
import Keyboard from "./keyboard/Keyboard.jsx";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import "./LessonCard.css";

const Instructions = styled.div`
  grid-column: 1/-1;
  margin-bottom: 2rem;
  padding: 1rem;
  & img {
    float: right;
    width: 200px;
  }
`;
const LessonCardFrame = styled.div`
  display: grid;
  position: relative;
  border: 1px #eaeaea solid;
  grid-template-columns: 1fr 2fr;
  justify-content: space-around;
  border-radius: 10px;
  padding: 1rem;
  background: #efefef5e;
`;
const Cta = styled.h4`
  background: white;
  border: 1px #d6d6d6 solid;
  border-radius: 1rem;
  padding: 3px;
  text-align: center;
`;
const AnimatedCTA = posed.div({
  enter: { opacity: 1, x: "0rem" },
  exit: { opacity: 0, x: "5rem" }
});
const BoardDiv = styled.div`
  background: white;
  border: 1px #d6d6d6 solid;
  border-radius: 1rem;
  padding: 10px;
  box-shadow: 1px 1px 2px 0px #8a8a8a30;
`;
const TitleDiv = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  > div {
    background: white;
    left: -50%;
    position: relative;
    /* background: #f2fff3; */
    border: 0.5px #bbb solid;
    display: inline-block;
    padding: 10px;
    border-radius: 1rem;
    top: -1.5rem;
    box-shadow: 2px 2px 5px 0px #bfbfbf;
  }
`;
const LessonDiv = styled.div``;

class LessonCard extends Component {
  state = {
    currentCorrectAnswer: [],
    currentImage: "",
    keysToLabel: [],
    currentAnswerIndex: 0,
    scoreCard: []
  };
  componentDidMount() {
    const { answers } = this.props;
    this.setState({
      currentCorrectAnswer: answers[0].correctAnswer,
      currentImage: answers[0].image,
      keysToLabel: answers[0].keysToLabel
    });
  }
  f;
  handleAnswer = correctBool => {
    const { answers } = this.props;
    const { currentAnswerIndex, scoreCard } = this.state;
    console.log("this answer was", correctBool);
    let nextIndex;
    const newScoreCard = [...scoreCard];
    newScoreCard[currentAnswerIndex] = correctBool;
    if (answers.length > newScoreCard.length) {
      // we haven't answered everything yet
      nextIndex = currentAnswerIndex + 1;
    } else {
      // we're going back to fix the wrong ones
      nextIndex = newScoreCard.findIndex(answer => !answer);
      if (nextIndex === -1) {
        this.setState({ scoreCard: newScoreCard });
        this.handleFinishCard();
        return;
      }
    }
    console.log("next index is", nextIndex);
    console.log("answers", answers);
    this.setState(
      {
        scoreCard: newScoreCard
      },
      () => this.goToQuestion(nextIndex)
    );
  };
  handleFinishCard() {
    console.log("youre done!s");
  }
  goToQuestion = num => {
    const { answers } = this.props;
    if (num >= answers.length || num < 0) return;
    this.setState({
      currentAnswerIndex: num,
      currentCorrectAnswer: answers[num].correctAnswer,
      currentImage: answers[num].image
    });
  };
  render() {
    const {
      currentCorrectAnswer,
      currentImage,
      currentAnswerIndex,
      scoreCard
    } = this.state;
    const { answers, scale, chapterTitle } = this.props;
    const {
      lesson,
      keysToLabel,
      showCircles,
      showShapeBackground,
      cta,
      starters
    } = answers[currentAnswerIndex];
    return (
      <LessonCardFrame>
        <Instructions>
          <TitleDiv>
            <div>
              <h2>{chapterTitle}</h2>
            </div>
          </TitleDiv>
          <LessonDiv>{lesson}</LessonDiv>
        </Instructions>
        <Scoreboard
          names={answers.map(answer => answer.name)}
          questionNumber={currentAnswerIndex}
          scoreCard={scoreCard}
          style={{ gridColumn: "1", padding: "1rem" }}
          goToQuestion={this.goToQuestion}
        />
        <div>
          <Cta>{cta}</Cta>
          <BoardDiv>
            <Keyboard
              bottomKey="C1"
              topKey="E2"
              correctAnswer={currentCorrectAnswer}
              keyboardId="myId"
              showFirst={false}
              showAllCircles={showCircles}
              showHints={false}
              starters={starters}
              scale={scale}
              handleAnswer={this.handleAnswer}
              keysToLabel={keysToLabel}
              questionNumber={currentAnswerIndex}
              showShapeBackground={showShapeBackground}
            />
          </BoardDiv>
        </div>
      </LessonCardFrame>
    );
  }
}

export default LessonCard;
