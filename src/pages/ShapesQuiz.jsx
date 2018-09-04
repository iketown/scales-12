import React, { Component, Fragment } from "react";
import { Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";
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
import CardQuizPage from "./CardQuizPage";
import {
  completeChapterQuiz,
  startChapterQuiz
} from "../actions/userScoreActions";

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
  }
];
const cardsArr = [
  {
    fullPic: Line,
    hintPic: lineDots,
    name: "line",
    header: "Line"
  },
  {
    fullPic: Car,
    hintPic: carDots,
    name: "car",
    header: "Car"
  },
  {
    fullPic: Truck,
    hintPic: truckDots,
    name: "truck",
    header: "Truck"
  },
  {
    fullPic: Wagon,
    hintPic: wagonDots,
    name: "wagon",
    header: "Wagon"
  }
];
const lessonText = {
  intro: {
    head: <h1>Shapes Quiz</h1>,
    body: (
      <div>
        <p>
          and now, a quick pop quiz to make sure everyone was paying attention.
        </p>
        <p>
          don't worry. <strong>It's easy!</strong>
        </p>
      </div>
    )
  },
  outtro: {
    head: <h1>Shapes Quiz</h1>,
    body: <p>see? that wasn't so bad. onward!</p>
  },
  linkToNextLesson: "/page4"
};

export class Page3 extends Component {
  handleCompletedQuiz = () => {
    this.props.dispatch(completeChapterQuiz("shapes1"));
  };
  handleStartedQuiz = () => {
    this.props.dispatch(startChapterQuiz("shapes1"));
  };

  render() {
    return (
      <CardQuizPage
        testQuestions={testQuestions}
        cardsArr={cardsArr}
        handleCompletedQuiz={this.handleCompletedQuiz}
        handleStartedQuiz={this.handleStartedQuiz}
        lessonText={lessonText}
      />
    );
  }
}

export default connect()(Page3);
