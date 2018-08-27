import React, { Component } from "react";
import Scoreboard from "./ScoreBoard.jsx";
import Dotboard from "./dotboard/Dotboard.jsx";
import styled from "styled-components";
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
    currentAnswerIndex: 0,
    scoreCard: []
  };
  componentDidMount() {
    const { answers } = this.props;
    this.setState({ currentCorrectAnswer: answers[0].correctAnswer });
  }
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
      scoreCard: newScoreCard
    });
  };
  handleFinishCard() {
    console.log("youre done!s");
  }
  render() {
    const { currentCorrectAnswer, currentAnswerIndex, scoreCard } = this.state;
    const { answers, scale } = this.props;
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
        {console.log("type of", typeof currentCorrectAnswer[0])}
        {/* <Keyboard
          bottomKey="C1"
          topKey="E2"
          keysToLabel={["C1", "C2"]}
          correctAnswer={currentCorrectAnswer}
          keyboardId="myId"
          showFirst={false}
          showAll={false}
          showHints={false}
          scale={scale}
          handleAnswer={this.handleAnswer}
        /> */}
        <Dotboard scale={scale} correctAnswer={currentCorrectAnswer} />
      </LessonCardFrame>
    );
  }
}

export default LessonCard;
