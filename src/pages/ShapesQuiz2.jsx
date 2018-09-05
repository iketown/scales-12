import React, { Component, Fragment } from "react";
import { Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  Line,
  Car,
  Truck,
  Wagon,
  CarDots,
  TruckDots,
  WagonDots,
  LineDots,
  FlipCar,
  FlipCarDots,
  FlipTruck,
  FlipTruckDots,
  FlipWagon,
  FlipWagonDots
} from "../images";
import CardQuizPage from "./CardQuizPage";
import {
  completeChapterQuiz,
  startChapterQuiz
} from "../actions/userScoreActions";

const testQuestions = [
  {
    clue: "FlipTruck"
  },
  {
    clue: "Car"
  },
  {
    clue: "FlipWagon"
  },
  {
    clue: "Truck"
  },
  {
    clue: "FlipCar"
  },
  {
    clue: "Wagon"
  },
  {
    clue: "Line"
  },
  {
    clue: "FlipCar"
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
  },
  {
    fullPic: FlipCar,
    hintPic: FlipCarDots,
    name: "flipcar",
    header: "FlipCar"
  },
  {
    fullPic: FlipTruck,
    hintPic: FlipTruckDots,
    name: "fliptruck",
    header: "FlipTruck"
  },
  {
    fullPic: FlipWagon,
    hintPic: FlipWagonDots,
    name: "flipwagon",
    header: "FlipWagon"
  }
];
const lessonText = {
  intro: {
    head: <h1>Shapes Quiz 2</h1>,
    body: (
      <div>
        <p>This time we'll mix up regular and 'flipped' shapes.</p>
        <p>You got this.</p>
      </div>
    )
  },
  outtro: {
    head: <h1>Shapes Quiz</h1>,
    body: <p>see? that wasn't so bad. onward!</p>
  },
  linkToNextLesson: "/page6"
};

export class ShapesQuiz1 extends Component {
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

export default connect()(ShapesQuiz1);
