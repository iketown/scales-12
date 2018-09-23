import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import { StarterIcon } from "../components/uiElements/index";
import {
  fullScales,
  scaleShapes2
} from "../components/keyboard/keyboardShapes";

import KeyboardWithGuides from "../components/keyboard/KeyboardWithGuides";
export default class Scales1 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>The Scales</Header.Content>
          <Header.Subheader>part deux</Header.Subheader>
        </Header>

        <p>
          Now, we'll try it out with some help before we hit the final test:
        </p>
        <p>
          After correctly playing the first shape, you'll see the skipped key
          turn <Orange>orange</Orange>, then play the correct shape on the
          following key.
        </p>
        <KeyboardWithGuides
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
                Starting with the <StarterIcon />, play the correct shape on the
                keyboard.
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

const Orange = styled.span`
  font-weight: bold;
  color: #f5a623;
  padding: 3px;
`;
