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
    header: "Line",
    description: "down • down •  down down"
  },
  {
    fullPic: Car,
    hintPic: carDots,
    name: "car",
    header: "Car",
    description: "down • UP • UP down"
  },
  {
    fullPic: Truck,
    hintPic: truckDots,
    name: "truck",
    header: "Truck",
    description: "down • down • UP down"
  },
  {
    fullPic: Wagon,
    hintPic: wagonDots,
    name: "wagon",
    header: "Wagon",
    description: "down • down • down UP"
  }
];

export default class Page3 extends Component {
  state = {
    questionIndex: 0,
    showImageOf: "",
    currentCorrectAnswer: "",
    shapeCards: [],
    wronglyClickedCards: []
  };

  render() {
    const { questionIndex, currentQuestion } = this.state;
    return (
      <CardQuizPage testQuestions={testQuestions} cardsArr={cardsArr}>
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
