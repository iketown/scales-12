import React from "react";
import Layout from "../layout/Layout.jsx";
import { Header, Container, Icon, Message } from "semantic-ui-react";

import KeyboardInline from "../components/keyboard/KeyboardInline";
import { dotShapes } from "../components/dotboard/dotShapes";
import { Cars1 } from "./lessonText";
import { keyboardShapes } from "../components/keyboard/keyboardShapes";
import { iconNames } from "../keySVGs/keyboardUtils";
import { StarterIcon } from "../components/uiElements/index";
import { keyboardScale } from "../utils/generalConfig";
import CarSvg from "../images/Car.svg";
const Page7 = props => {
  return (
    <Layout>
      <Header as="h2">
        <Header.Content>On The Piano</Header.Content>
      </Header>
      <h1>The Line</h1>
      <p>
        now we'll put some shapes on the keyboard, starting with the easiest,
        the LINE
      </p>
      <KeyboardInline
        keyboardId="kb001"
        bottomKey="C1"
        topKey="C2"
        showAllCircles={false}
        keyboardScale={0.54}
        messageInstructions={{
          icon: "question circle",
          header: "Line Shapes",
          content: (
            <p>
              Make a line shape on the keyboard, starting at the <StarterIcon />
            </p>
          )
        }}
        answers={lineAnswers}
      />
    </Layout>
  );
};

const lineAnswers = [
  {
    bottomKey: "C1",
    topKey: "D2",
    correctAnswer: ["C1", "D1", "E1", "F1"]
  },
  {
    bottomKey: "F1",
    topKey: "F2",
    correctAnswer: ["G1", "A1", "B1", "C2"]
  }
];

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

const cars = {
  chapterTitle: "Cars",
  answers: [
    {
      name: "Cars",
      correctAnswer: keyboardShapes.E,
      type: "keyboard",
      showCircles: false,
      starters: ["Eb1", "E1", "B1", "Bb1"],
      lesson: Cars1,
      cta: "Click the circles.  See the car shape?",
      showShapeBackground: [""]
    },
    {
      name: "Flip Car keyboard",
      correctAnswer: keyboardShapes.Bb,
      type: "keyboard",
      showCircles: true,
      lesson: "lesson text",
      cta: "Click the circles.  See the flipped car?",
      showShapeBackground: ["Bb1"]
    },
    {
      name: "Truck keyboard",
      correctAnswer: keyboardShapes.A,
      type: "keyboard",
      showCircles: true,
      // keysToLabel: ["E1"],
      lesson: "lesson text",
      cta: "Click the circles.  See the car shape?",
      showShapeBackground: ["A1"]
    },
    {
      name: "Flip Truck keyboard",
      correctAnswer: keyboardShapes.Db,
      type: "keyboard",
      showCircles: true,
      lesson: "lesson text",
      cta: "Click the circles.  See the flipped car?",
      showShapeBackground: ["Db1"]
    },
    {
      name: "Wagon keyboard",
      correctAnswer: keyboardShapes.F,
      type: "keyboard",
      showCircles: true,
      // keysToLabel: ["E1"],
      lesson: "lesson text",
      cta: "Click the circles.  See the car shape?",
      showShapeBackground: ["F1"]
    },
    {
      name: "Flip Wagon keyboard",
      correctAnswer: keyboardShapes.Gb,
      type: "keyboard",
      showCircles: true,
      lesson: "lesson text",
      cta: "Click the circles.  See the flipped car?",
      showShapeBackground: ["Gb1"]
    },
    {
      name: "Car keyboard",
      correctAnswer: keyboardShapes.B,
      type: "keyboard",
      showCircles: false,
      // keysToLabel: ["B1"],
      lesson: "lesson text",
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
      lesson: "lesson text",
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
      lesson: "lesson text",
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
      lesson: "lesson text",
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

// const carLessons = [
//   <div>
//     <img src={CarSvg} alt="" />
//     <h3>
//       First, we'll learn the <strong>CAR</strong> shape.
//     </h3>
//     <p>
//       {CheckIcon} think of two tires on the outsides, and the hood in the
//       middle.
//     </p>

//     <p>
//       {CheckIcon} A <strong>CAR</strong> makes a pattern of{" "}
//       <strong>down-UP-UP-down</strong>{" "}
//     </p>
//     <p>
//       {CheckIcon} Start your shape by clicking the{" "}
//       <Icon
//         name={iconNames.starter.text}
//         color={iconNames.starter.color}
//         size="large"
//       />
//     </p>
//   </div>,
//   <div>
//     <img src={CarSvg} alt="" style={{ transform: "scaleY(-1)" }} />
//     <h3>
//       Next up, the <strong>FLIPPED CAR</strong>.
//     </h3>
//     <p>
//       {CheckIcon} The <strong>FLIPPED CAR</strong> is the same pattern as the
//       car, only flipped! 🧐
//     </p>
//     <p>
//       {CheckIcon} The pattern goes <strong>UP-down-down-UP</strong>{" "}
//     </p>
//   </div>,
//   <div>
//     <h3>Easy! right?</h3>
//     <p>let's hit those one more time, this time with no pictures.</p>
//     <p>
//       {CheckIcon} Always start your shape by clicking the{" "}
//       <Icon
//         name={iconNames.starter.text}
//         color={iconNames.starter.color}
//         size="large"
//       />
//     </p>
//   </div>,
//   <div>
//     <h3>Flip it</h3>
//     <p>same drill, this time, FLIP it over.</p>
//   </div>,
//   <div>
//     <h3>Now let's try it on the keyboard.</h3>
//     <p>
//       First, we'll do it the easy way. Just click on the circles to fill out a
//       CAR shape.
//     </p>
//     <p>
//       {CheckIcon} Any time you start a shape on a <em>white</em> key, it will be
//       right-side-up.
//     </p>
//   </div>,
//   <div>
//     <h3>Flip it</h3>
//     <p>
//       {CheckIcon} if a shape starts on a black key, you use the FLIPPED shape.
//     </p>
//   </div>,
//   <div>
//     <h3>Now we're getting somewhere!</h3>
//     <p>
//       Next we'll put car shapes on the keyboard with <em>no training wheels</em>
//       .
//     </p>
//     <p>{CheckIcon} Remember that the left-right spacing isn't even.</p>
//     <p>
//       {CheckIcon} There are <span style={{ color: "red" }}>SPACE</span>s between
//       the first three dots / keys.
//     </p>
//     <p>
//       {CheckIcon} Say it in your head: "<strong>DOT</strong> (space){" "}
//       <strong>DOT</strong> (space) <strong>DOT</strong> <strong>DOT</strong>"
//     </p>
//   </div>,
//   <div>
//     <h3>And now we flip it.</h3>
//     <p>
//       {CheckIcon} Again, say it in your head: "<strong>DOT</strong> (space){" "}
//       <strong>DOT</strong> (space) <strong>DOT</strong> <strong>DOT</strong>"
//     </p>
//     <p>
//       {CheckIcon} You'll get a feel for that shape after you do it a couple
//       times.
//     </p>
//   </div>,
//   <div>
//     <h3>Traffic</h3>
//     <p>{CheckIcon} Now let's put TWO cars on the keyboard.</p>
//     <p>
//       {CheckIcon} Playing those two cars from left to right is a Major Scale!
//     </p>
//   </div>,
//   <div>
//     <h3>Another Scale</h3>
//     <p>
//       {CheckIcon} There's another Major Scale if you play two (flipped) cars
//       here.
//     </p>
//   </div>
// ];

export default Page7;
