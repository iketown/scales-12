import React from "react";
import Layout from "../layout/Layout.jsx";
import { Header, Container, Icon } from "semantic-ui-react";
import LessonCard from "../components/LessonCard.jsx";
import { dotShapes } from "../components/dotboard/dotShapes";
import { keyboardShapes } from "../components/keyboard/keyboardShapes";
import { iconNames } from "../keySVGs/keyboardUtils";
import { keyboardScale } from "../utils/generalConfig";
import CarSvg from "../images/Car.svg";
import carSpacing from "../images/carSpacing.svg";
import dotSpace from "../images/DOTspace.svg";
import dotSpace2 from "../images/DOTspace2.svg";
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
        <LessonCard
          answers={cars.answers}
          chapterTitle={cars.chapterTitle}
          scale={0.6}
        />
      </Container>
    </Layout>
  );
};

const DotIcon = (
  <Icon
    name={iconNames.selected.text}
    color={iconNames.selected.color}
    size="large"
  />
);

const CheckIcon = (
  <Icon name="check circle outline" color="grey" size="small" />
);

const carLessons = [
  <div>
    <img src={CarSvg} alt="" />
    <h3>
      First, we'll learn the <strong>CAR</strong> shape.
    </h3>
    <p>
      {CheckIcon} think of two tires on the outsides, and the hood in the
      middle.
    </p>

    <p>
      {CheckIcon} A <strong>CAR</strong> makes a pattern of{" "}
      <strong>down-UP-UP-down</strong>{" "}
    </p>
    <p>
      {CheckIcon} Start your shape by clicking the{" "}
      <Icon
        name={iconNames.starter.text}
        color={iconNames.starter.color}
        size="large"
      />
    </p>
  </div>,
  <div>
    <img src={CarSvg} alt="" style={{ transform: "scaleY(-1)" }} />
    <h3>
      Next up, the <strong>FLIPPED CAR</strong>.
    </h3>
    <p>
      {CheckIcon} The <strong>FLIPPED CAR</strong> is the same pattern as the
      car, only flipped! 🧐
    </p>
    <p>
      {CheckIcon} The pattern goes <strong>UP-down-down-UP</strong>{" "}
    </p>
  </div>,
  <div>
    <h3>Easy! right?</h3>
    <p>let's hit those one more time, this time with no pictures.</p>
    <p>
      {CheckIcon} Always start your shape by clicking the{" "}
      <Icon
        name={iconNames.starter.text}
        color={iconNames.starter.color}
        size="large"
      />
    </p>
  </div>,
  <div>
    <h3>Flip it</h3>
    <p>same drill, this time, FLIP it over.</p>
  </div>,
  <div>
    <h3>Now let's try it on the keyboard.</h3>
    <p>
      First, we'll do it the easy way. Just click on the circles to fill out a
      CAR shape.
    </p>
    <p>
      {CheckIcon} Any time you start a shape on a <em>white</em> key, it will be
      right-side-up.
    </p>
  </div>,
  <div>
    <h3>Flip it</h3>
    <p>
      {CheckIcon} if a shape starts on a black key, you use the FLIPPED shape.
    </p>
  </div>,
  <div>
    <img src={dotSpace} alt="" />
    <h3>Now we're getting somewhere!</h3>
    <p>
      Next we'll put car shapes on the keyboard with <em>no training wheels</em>
      .
    </p>
    <p>{CheckIcon} Remember that the left-right spacing isn't even.</p>
    <p>
      {CheckIcon} There are <span style={{ color: "red" }}>SPACE</span>s between
      the first three dots / keys.
    </p>
    <p>
      {CheckIcon} Say it in your head: "<strong>DOT</strong> (space){" "}
      <strong>DOT</strong> (space) <strong>DOT</strong> <strong>DOT</strong>"
    </p>
  </div>,
  <div>
    <img src={dotSpace2} alt="" />
    <h3>And now we flip it.</h3>
    <p>
      {CheckIcon} Again, say it in your head: "<strong>DOT</strong> (space){" "}
      <strong>DOT</strong> (space) <strong>DOT</strong> <strong>DOT</strong>"
    </p>
    <p>
      {CheckIcon} You'll get a feel for that shape after you do it a couple
      times.
    </p>
  </div>,
  <div>
    <h3>Traffic</h3>
    <p>{CheckIcon} Now let's put TWO cars on the keyboard.</p>
    <p>
      {CheckIcon} Playing those two cars from left to right is a Major Scale!
    </p>
  </div>,
  <div>
    <h3>Another Scale</h3>
    <p>
      {CheckIcon} There's another Major Scale if you play two (flipped) cars
      here.
    </p>
  </div>
];

const cars = {
  chapterTitle: "Cars",
  answers: [
    {
      name: "Car dots",
      correctAnswer: dotShapes.car,
      image: "car",
      shapeName: "Car",
      type: "dotboard",
      lesson: carLessons[0],
      cta: "Click the dots to make a CAR shape"
    },
    {
      name: "Flip Car dots",
      correctAnswer: dotShapes.flipCar,
      image: "flipCar",
      shapeName: "Car",
      type: "dotboard",
      lesson: carLessons[1],
      cta: "Click the dots to make a FLIPPED CAR shape"
    },
    {
      name: "Car dots",
      correctAnswer: dotShapes.car,
      image: "",
      shapeName: "Car",
      type: "dotboard",
      lesson: carLessons[2],
      cta: "Click the dots to make a CAR shape"
    },
    {
      name: "Flip Car dots",
      correctAnswer: dotShapes.flipCar,
      image: "",
      shapeName: "Car",
      type: "dotboard",
      lesson: carLessons[3],
      cta: "Click the dots to make a FLIPPED CAR shape"
    },
    {
      name: "Car keyboard",
      correctAnswer: keyboardShapes.E,
      type: "keyboard",
      showCircles: true,
      // keysToLabel: ["E1"],
      lesson: carLessons[4],
      cta: "Click the circles.  See the car shape?",
      showShapeBackground: ["E1"]
    },
    {
      name: "Flip Car keyboard",
      correctAnswer: keyboardShapes.Bb,
      type: "keyboard",
      showCircles: true,
      lesson: carLessons[5],
      cta: "Click the circles.  See the flipped car?",
      showShapeBackground: ["Bb1"]
    },
    {
      name: "Truck keyboard",
      correctAnswer: keyboardShapes.A,
      type: "keyboard",
      showCircles: true,
      // keysToLabel: ["E1"],
      lesson: carLessons[4],
      cta: "Click the circles.  See the car shape?",
      showShapeBackground: ["A1"]
    },
    {
      name: "Flip Truck keyboard",
      correctAnswer: keyboardShapes.Db,
      type: "keyboard",
      showCircles: true,
      lesson: carLessons[5],
      cta: "Click the circles.  See the flipped car?",
      showShapeBackground: ["Db1"]
    },
    {
      name: "Wagon keyboard",
      correctAnswer: keyboardShapes.F,
      type: "keyboard",
      showCircles: true,
      // keysToLabel: ["E1"],
      lesson: carLessons[4],
      cta: "Click the circles.  See the car shape?",
      showShapeBackground: ["F1"]
    },
    {
      name: "Flip Wagon keyboard",
      correctAnswer: keyboardShapes.Gb,
      type: "keyboard",
      showCircles: true,
      lesson: carLessons[5],
      cta: "Click the circles.  See the flipped car?",
      showShapeBackground: ["Gb1"]
    },
    {
      name: "Car keyboard",
      correctAnswer: keyboardShapes.B,
      type: "keyboard",
      showCircles: false,
      // keysToLabel: ["B1"],
      lesson: carLessons[6],
      cta: (
        <span>
          Make a CAR shape, starting on the{" "}
          <Icon name={iconNames.starter.text} color={iconNames.starter.color} />{" "}
        </span>
      )
    },
    {
      name: "Flip Car keyboard",
      correctAnswer: keyboardShapes.Bb,
      type: "keyboard",
      showCircles: false,
      // keysToLabel: ["Bb1"],
      lesson: carLessons[7],
      cta: (
        <span>
          Make a FLIPPED CAR shape, starting on the{" "}
          <Icon name={iconNames.starter.text} color={iconNames.starter.color} />{" "}
        </span>
      )
    },
    {
      name: "2 Cars",
      correctAnswer: [...keyboardShapes.B, ...keyboardShapes.E],
      type: "keyboard",
      showCircles: false,
      // keysToLabel: ["E1", "B1"],
      lesson: carLessons[8],
      starters: ["E1", "B1"],
      cta: (
        <span>
          Make a CAR shape on each{" "}
          <Icon name={iconNames.starter.text} color={iconNames.starter.color} />
        </span>
      )
    },
    {
      name: "2 Flipped Cars",
      correctAnswer: [...keyboardShapes.Bb, ...keyboardShapes.Eb],
      type: "keyboard",
      showCircles: false,
      // keysToLabel: ["Eb1", "Bb1"],
      lesson: carLessons[9],
      starters: ["Bb1", "Eb1"],
      cta: (
        <span>
          Make a FLIPPED CAR shape on each{" "}
          <Icon name={iconNames.starter.text} color={iconNames.starter.color} />
        </span>
      )
    }
  ]
};
