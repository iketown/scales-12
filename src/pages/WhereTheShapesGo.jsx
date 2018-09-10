import React from "react";
import Layout from "../layout/Layout.jsx";
import { Header, Image } from "semantic-ui-react";

import KeyboardInline from "../components/keyboard/KeyboardInline";
import { StarterIcon } from "../components/uiElements/index";
import { carsOnKeyboard, splitKeyboardAnimation } from "../images/index";
import { keyboardShapes } from "../components/keyboard/keyboardShapes";
const Page7 = () => {
  return (
    <Layout myUrl={this.props.match.path}>
      <Header as="h2">
        <Header.Content>On The Piano</Header.Content>
      </Header>
      <h1>The Cars</h1>
      <p>
        Now we'll start putting <strong>CARS</strong> on the keyboard.
      </p>
      <p>
        There are FOUR keys that make car shapes, so let's look at those quickly
        before we start.
      </p>
      <p>
        If you split the keyboard into 2-black-key sections and 3-black-key
        sections, we will find yet another repeating pattern to make our job
        easier.
      </p>
      <Image src={splitKeyboardAnimation} size="large" />
      <p>Lets picture each one of those sections as a highway.</p>
      <p>
        The <em>right two lanes</em> of that highway (the slow lanes?) are CARS.
      </p>
      <p>
        Of course, the cars starting on the black keys will actually be{" "}
        <strong>FlipCars</strong>, but since ALL black keys are 'flip-whatevers'
        we'll just call them cars.{" "}
      </p>
      <Image src={carsOnKeyboard} size="medium" />
      <p />
      <KeyboardInline
        keyboardId="kb002CarShapes"
        showAllCircles={false}
        keyboardScale={0.54}
        messageInstructions={{
          icon: "question circle",
          header: "Car Shapes",
          content: (
            <p>
              Make CAR shapes on the keyboard, starting at the <StarterIcon />
            </p>
          )
        }}
        answers={carAnswers}
        continueLink="/page8"
        continueText="Well done!  Next we'll check out the TRUCKS."
      />
    </Layout>
  );
};

const carAnswers = [
  {
    bottomKey: "C1",
    topKey: "C2",
    correctAnswer: keyboardShapes.E
  },
  {
    bottomKey: "G1",
    topKey: "G2",
    correctAnswer: keyboardShapes.B
  },
  {
    bottomKey: "C1",
    topKey: "C2",
    correctAnswer: keyboardShapes.Eb
  },
  {
    bottomKey: "G1",
    topKey: "G2",
    correctAnswer: keyboardShapes.Bb
  }
];

export default Page7;
