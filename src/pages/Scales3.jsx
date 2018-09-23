import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { StarterIcon } from "../components/uiElements/index";
import {
  fullScales,
  scaleShapes2
} from "../components/keyboard/keyboardShapes";

import KeyboardInline from "../components/keyboard/KeyboardInline.jsx";
export default class Scales1 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>The Scales</Header.Content>
          <Header.Subheader>part trois</Header.Subheader>
        </Header>

        <p>And now we reach the final test.</p>
        <ul>
          <li>
            You know <Link to="/the_shapes_2">the shapes</Link>,
          </li>
          <li>
            you know <Link to="/keys_line">how to play them</Link>,
          </li>
          <li>
            and you know <Link to="/places_1">where they go.</Link>
          </li>
        </ul>
        <p>You're ready to play all 12 scales!</p>
        <p>
          Just remember:
          <ol>
            <li>play the FIRST shape,</li>
            <li>skip a key,</li>
            <li>play the SECOND shape.</li>
          </ol>
          You got this!
        </p>
        <KeyboardInline
          keyboardId="Scales3"
          answers={shapePickerAnswers}
          keyboardScale={0.5}
          whenToShowShape="afterCorrect"
          callbackWhenFinished={() =>
            this.setState({ nextButtonDisabled: false })
          }
          messageInstructions={{
            // icon: "question circle",
            header: "Shapes on Keyboard",
            content: (
              <p>
                Starting with the <StarterIcon />, play the correct shape{" "}
                <em>on the keyboard.</em>{" "}
              </p>
            )
          }}
        />
      </Layout>
    );
  }
}

const Cposition = { bottomKey: "C1", topKey: "E2" };
const Fposition = { bottomKey: "F1", topKey: "A2" };
const FpositionExtended = { bottomKey: "F1", topKey: "B2" };
const shapePickerAnswers = [
  {
    noteName: "F1",
    shape: "Wagon",
    correctAnswer: fullScales.F,
    scaleShapes: scaleShapes2.F,
    ...Fposition,
    keyToSkip: "B1"
  },
  {
    noteName: "Bb1",
    shape: "Car",
    correctAnswer: fullScales.Bb,
    scaleShapes: scaleShapes2.Bb,
    ...FpositionExtended,
    keyToSkip: "E2"
  },
  {
    noteName: "D1",
    shape: "Truck",
    correctAnswer: fullScales.D,
    scaleShapes: scaleShapes2.D,
    ...Cposition,
    keyToSkip: "Ab1"
  },
  {
    noteName: "C1",
    shape: "Line",
    correctAnswer: fullScales.C,
    scaleShapes: scaleShapes2.C,
    ...Cposition,
    keyToSkip: "Gb1"
  },
  {
    noteName: "Ab1",
    shape: "Truck",
    correctAnswer: fullScales.Ab,
    scaleShapes: scaleShapes2.Ab,
    ...FpositionExtended,
    keyToSkip: "D2"
  },
  {
    noteName: "E1",
    shape: "Car",
    correctAnswer: fullScales.E,
    scaleShapes: scaleShapes2.E,
    ...Cposition,
    keyToSkip: "Bb1"
  },
  {
    noteName: "Gb1",
    shape: "Wagon",
    correctAnswer: fullScales.Gb,
    scaleShapes: scaleShapes2.Gb,
    ...Fposition,
    keyToSkip: "C2"
  },
  {
    noteName: "Db1",
    shape: "Truck",
    correctAnswer: fullScales.Db,
    scaleShapes: scaleShapes2.Db,
    ...Cposition,
    keyToSkip: "G1"
  },
  {
    noteName: "B1",
    shape: "Car",
    correctAnswer: fullScales.B,
    scaleShapes: scaleShapes2.B,
    ...FpositionExtended,
    keyToSkip: "F2"
  },
  {
    noteName: "G1",
    shape: "Line",
    correctAnswer: fullScales.G,
    scaleShapes: scaleShapes2.G,
    ...FpositionExtended,
    keyToSkip: "Eb2"
  },
  {
    noteName: "Eb1",
    shape: "Car",
    correctAnswer: fullScales.Eb,
    scaleShapes: scaleShapes2.Eb,
    ...Cposition,
    keyToSkip: "A1"
  },
  {
    noteName: "A1",
    shape: "Truck",
    correctAnswer: fullScales.A,
    scaleShapes: scaleShapes2.A,
    ...FpositionExtended,
    keyToSkip: "Eb2"
  }
];
