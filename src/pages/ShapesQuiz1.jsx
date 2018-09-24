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
  LineDots
} from "../images";
import CardQuizPage from "./CardQuizPage";
import {
  completeChapterQuiz,
  startChapterQuiz
} from "../actions/userScoreActions";
import Layout from "../layout/Layout";
import QuizHistory from "../components/QuizHistory.jsx";
import CheaterButton from "../components/uiElements/CheaterButton.jsx";

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
          And now, a quick pop quiz to make sure everyone was paying attention.
        </p>
        <p>
          Don't worry. <strong>It's easy!</strong>
        </p>
      </div>
    )
  },
  outtro: {
    head: <h1>Shapes Quiz</h1>,
    body: <p>See? That wasn't so bad. Onward!</p>
  }
};

export class ShapesQuiz1 extends Component {
  state = {
    quizCompleted: false
  };
  quizId = "Shapes Quiz 1";
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
)(ShapesQuiz1);
