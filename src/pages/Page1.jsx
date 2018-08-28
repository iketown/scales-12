import React from "react";
import Layout from "../layout/Layout.jsx";
import { Header, Container } from "semantic-ui-react";
import LessonCard from "../components/LessonCard.jsx";
import { dotShapes } from "../components/dotboard/dotShapes";
import { keyboardShapes } from "../components/keyboard/keyboardShapes";
import { keyboardScale } from "../utils/generalConfig";

export default () => {
  return (
    <Layout>
      <Header as="h1">Welcome!</Header>
      <Container>
        <p>
          This is a quick and simple way to learn all 12 major scales on the
          piano.
        </p>
        <p>
          First, click all the white keys from the lower C on the left to the
          high C on the right (turn computer speakers on for sound)
        </p>
        <LessonCard answers={fakeMixedAnswers} delayMS={1000} scale={0.6} />
      </Container>
    </Layout>
  );
};

const fakeMixedAnswers = [
  {
    name: "Car keyboard",
    correctAnswer: keyboardShapes.E,
    type: "keyboard",
    showCircles: true,
    keysToLabel: ["E1", "Bb1"]
  },
  {
    name: "Car dots",
    correctAnswer: dotShapes.car,
    image: "car",
    shapeName: "Car",
    type: "dotboard"
  },
  {
    name: "Flip Car dots",
    correctAnswer: dotShapes.flipCar,
    image: "flipCar",
    shapeName: "Car",
    type: "dotboard"
  },
  {
    name: "Flip Car keyboard",
    correctAnswer: keyboardShapes.Bb,
    type: "keyboard",
    showCircles: true
  }
];
