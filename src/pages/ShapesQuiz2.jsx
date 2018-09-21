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
  LineDots,
  FlipCar,
  FlipCarDots,
  FlipTruck,
  FlipTruckDots,
  FlipWagon,
  FlipWagonDots
} from "../images";
import Layout from "../layout/Layout.jsx";
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
        <p>Concentrate. You got this.</p>
        <ul>
          <li>
            <strong>Car</strong>: Think <em>front and back seat</em>.
          </li>
          <li>
            <strong>Truck</strong>: Think <em>front seat</em>, but no{" "}
            <em>back seat</em>.
          </li>
          <li>
            <strong>Wagon</strong>: Think <em>flat bed</em> with a{" "}
            <em>handle</em>.
          </li>
          <li>
            <strong>Line</strong>: hmm. Its a line. 😉
          </li>
        </ul>
      </div>
    )
  },
  outtro: {
    head: <h1>Shapes Quiz 2</h1>,
    body: <p>You've got it. Onward!</p>
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
