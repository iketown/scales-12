import React, { Component } from "react";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
import { Header, Card, Image, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import { ding, plink } from "../components/keyboard/sounds/soundFX";
import { shuffleArray } from "../utils/generalUtils";
import { delayBetweenQuestions } from "../utils/generalConfig";
import { ShapeCard } from "../components/uiElements/index";
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
    clue: "Truck",
    answer: "truck"
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

export default class Page3 extends Component {
  handleCompletedQuiz = () => {
    console.log("ok that one is done");
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
