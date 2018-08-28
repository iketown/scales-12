import React, { Component } from "react";
import Scoreboard from "./ScoreBoard.jsx";
import Dotboard from "./dotboard/Dotboard.jsx";
import Keyboard from "./keyboard/Keyboard.jsx";
import styled from "styled-components";
import posed from "react-pose";
const Instructions = styled.div`
  grid-column: 1/-1;
  margin-bottom: 2rem;
  padding: 1rem;
`;
const LessonCardFrame = styled.div`
  display: grid;
  border: 1px #eaeaea solid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  border-radius: 10px;
  padding: 1rem;
  background: #efefef5e;
`;

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

    this.setState({
      currentAnswerIndex: nextIndex,
      currentCorrectAnswer: answers[nextIndex].correctAnswer,
      currentImage: answers[nextIndex].image,
      keysToLabel: answers[nextIndex].keysToLabel,
      scoreCard: newScoreCard
    });
  };
  handleFinishCard() {
    console.log("youre done!s");
  }
  render() {
    const {
      currentCorrectAnswer,
      currentImage,
      currentAnswerIndex,
      scoreCard,
      keysToLabel
    } = this.state;
    const { answers, scale, delayMS } = this.props;
    return (
      <LessonCardFrame>
        <Instructions>
          <h1>Car Shapes</h1>
          <p>first we'll learn how to do the car shapes</p>
        </Instructions>
        <Scoreboard
          names={answers.map(answer => answer.name)}
          questionNumber={currentAnswerIndex}
          scoreCard={scoreCard}
          style={{ gridColumn: "1", padding: "1rem" }}
        />
        {answers[currentAnswerIndex].type === "keyboard" && (
          <Keyboard
            bottomKey="C1"
            topKey="E2"
            correctAnswer={currentCorrectAnswer}
            keyboardId="myId"
            showFirst={false}
            showAllCircles={true}
            showHints={false}
            scale={scale}
            handleAnswer={this.handleAnswer}
            keysToLabel={answers[currentAnswerIndex].keysToLabel}
            showCircles={answers[currentAnswerIndex].showCircles}
            delayMS={delayMS}
          />
        )}
        {answers[currentAnswerIndex].type === "dotboard" && (
          <Dotboard
            scale={scale}
            correctAnswer={currentCorrectAnswer}
            image={currentImage}
            handleAnswer={this.handleAnswer}
            delayMS={delayMS}
          />
        )}
      </LessonCardFrame>
    );
  }
}

export default LessonCard;
