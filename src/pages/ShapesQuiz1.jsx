import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Line,
  Car,
  Truck,
  Wagon,
  CarDots,
  TruckDots,
  WagonDots,
  LineDots
} from "../images";
import CardQuizPage from "./CardQuizPage";
import {
  completeChapterQuiz,
  startChapterQuiz
} from "../actions/userScoreActions";
import Layout from "../layout/Layout";
import { getPreviousAndNextLessons } from "../utils/chapterIndex";

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
  },
  {
    clue: "Truck",
    answer: "truck"
  },
  {
    clue: "Wagon",
    answer: "wagon"
  },
  {
    clue: "Car",
    answer: "car"
  }
];
const cardsArr = [
  {
    fullPic: Line,
    hintPic: LineDots,
    name: "line",
    header: "Line"
  },
  {
    fullPic: Car,
    hintPic: CarDots,
    name: "car",
    header: "Car"
  },
  {
    fullPic: Truck,
    hintPic: TruckDots,
    name: "truck",
    header: "Truck"
  },
  {
    fullPic: Wagon,
    hintPic: WagonDots,
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
  }
};

export class ShapesQuiz1 extends Component {
  state = {
    quizCompleted: false
  };
  handleCompletedQuiz = () => {
    this.props.dispatch(completeChapterQuiz("shapes1"));
    this.setState({ quizCompleted: true });
  };
  handleStartedQuiz = () => {
    this.props.dispatch(startChapterQuiz("shapes1"));
  };

  render() {
    const { quizCompleted } = this.state;
    return (
      <Layout myUrl={this.props.match.path} hideNav={!quizCompleted}>
        <h1>sup</h1>
        <CardQuizPage
          testQuestions={testQuestions}
          cardsArr={cardsArr}
          handleCompletedQuiz={this.handleCompletedQuiz}
          handleStartedQuiz={this.handleStartedQuiz}
          lessonText={lessonText}
        />
      </Layout>
    );
  }
}

export default connect()(ShapesQuiz1);
