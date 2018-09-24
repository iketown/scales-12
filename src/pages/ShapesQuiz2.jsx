import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
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
import QuizHistory from "../components/QuizHistory";
import CheaterButton from "../components/uiElements/CheaterButton.jsx";

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
        <p>This time we'll mix up regular and flipped shapes.</p>
        <p>Concentrate. You got this.</p>
      </div>
    )
  },
  outtro: {
    head: <h1>Shapes Quiz 2</h1>,
    body: <p>Nice Work!</p>
  }
};

export class ShapesQuiz2 extends Component {
  state = {
    quizCompleted: false
  };
  quizId = "Shapes Quiz 2";
  handleCompletedQuiz = () => {
    const { displayName, city } = this.props.profile;
    const { completeChapterQuiz } = this.props;
    completeChapterQuiz({
      quizId: this.quizId,
      displayName,
      city
    });
    this.setState({ quizCompleted: true });
  };

  render() {
    const { quizCompleted } = this.state;
    return (
      <Layout
        myUrl={this.props.match.path}
        hideNav={!quizCompleted}
        quizId={this.quizId}
      >
        <CardQuizPage
          testQuestions={testQuestions}
          cardsArr={cardsArr}
          handleCompletedQuiz={this.handleCompletedQuiz}
          lessonText={lessonText}
        />
        <CheaterButton onClick={this.handleCompletedQuiz} />
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.firebase.profile
});
const actions = { completeChapterQuiz };
export default connect(
  mapStateToProps,
  actions
)(ShapesQuiz2);
