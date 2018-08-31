import React, { Component } from "react";
import { Header } from "semantic-ui-react";
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
import CardQuizPage from "./CardQuizPage.jsx";
import { completeChapter } from "../actions/userScoreActions";

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

export class Page3 extends Component {
  handleCompletedQuiz = () => {
    console.log("ok that one is done");
    this.props.dispatch(completeChapter("shapes1"));
  };
  render() {
    return (
      <CardQuizPage
        testQuestions={testQuestions}
        cardsArr={cardsArr}
        handleCompletedQuiz={this.handleCompletedQuiz}
      >
        <Header as="h2">
          <Header.Content>Quick Quiz</Header.Content>
        </Header>
        <p>
          And now its time for a<strong> QUICK QUIZ</strong>
        </p>
        <p>I'll name a shape, and you click on it. ready ?</p>
      </CardQuizPage>
    );
  }
}

export default connect()(Page3);
