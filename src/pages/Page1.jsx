import React from "react";
import Layout from "../layout/Layout.jsx";
import { Header, Container } from "semantic-ui-react";
import LessonCard from "../components/LessonCard.jsx";

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
        <LessonCard answers={fakeDotAnswers} graphicType="keyboard" />
      </Container>
    </Layout>
  );
};

const fakeAnswers = [
  { name: "Car 1", correctAnswer: ["E1", "Gb1", "Ab1", "A1"] },
  { name: "Car 2", correctAnswer: ["B1", "Db2", "Eb2", "E2"] },
  { name: "Car 3", correctAnswer: ["E1", "Gb1", "Ab1", "A1"] }
];
const fakeDotAnswers = [
  {
    name: "Car 1",
    correctAnswer: { 4: true, 5: true, 6: true, 7: true },
    image: "wagon"
  },
  {
    name: "Car 2",
    correctAnswer: { 4: true, 5: true, 6: true, 7: true },
    image: "car"
  },
  {
    name: "Car 3",
    correctAnswer: { 4: true, 5: true, 6: true, 7: true },
    image: "truck"
  },
  {
    name: "Car 4",
    correctAnswer: { 4: true, 5: true, 6: true, 7: true },
    image: "car"
  },
  {
    name: "Car 5",
    correctAnswer: { 4: true, 5: true, 6: true, 7: true },
    image: "wagon"
  },
  {
    name: "Car 6",
    correctAnswer: { 4: true, 5: true, 6: true, 7: true },
    image: "truck"
  }
];
