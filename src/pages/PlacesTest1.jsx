import React, { Component } from "react";
import Layout from "../layout/Layout";
import KeyboardShapePicker from "../components/keyboard/KeyboardShapePicker.jsx";
import { StarterIcon } from "../components/uiElements/index";
import { keyboardShapes } from "../components/keyboard/keyboardShapes";
export default class PlacesTest1 extends Component {
  state = {
    nextButtonDisabled: true
  };
  render() {
    return (
      <Layout
        myUrl={this.props.match.url}
        nextButtonDisabled={this.state.nextButtonDisabled}
      >
        <h1>Places Test</h1>

        <p>
          Next we'll do a different kind of test. When you see the{" "}
          <StarterIcon /> on the keyboard, click the button with the
          corresponding SHAPE.{" "}
        </p>
        <p>
          Remember the freeway. CARS on the right, then TRUCKS, then one LINE.
          And the extra lanes for WAGONS on the extra-wide freeway.
        </p>
        <KeyboardShapePicker
          answers={shapePickerAnswers}
          bottomKey={"C1"}
          topKey={"E2"}
          keyboardScale={0.5}
          whenToShowShape="afterCorrect"
          callbackWhenFinished={() =>
            this.setState({ nextButtonDisabled: false })
          }
        />
      </Layout>
    );
  }
}

const shapePickerAnswers = [
  { noteName: "F1", shape: "Wagon", notes: keyboardShapes.F },
  { noteName: "Bb1", shape: "Car", notes: keyboardShapes.Bb },
  { noteName: "D1", shape: "Truck", notes: keyboardShapes.D },
  { noteName: "C1", shape: "Line", notes: keyboardShapes.C },
  { noteName: "Ab1", shape: "Truck", notes: keyboardShapes.Ab },
  { noteName: "E1", shape: "Car", notes: keyboardShapes.E },
  { noteName: "Gb1", shape: "Wagon", notes: keyboardShapes.Gb },
  { noteName: "Db1", shape: "Truck", notes: keyboardShapes.Db },
  { noteName: "B1", shape: "Car", notes: keyboardShapes.B },
  { noteName: "G1", shape: "Line", notes: keyboardShapes.G },
  { noteName: "Eb1", shape: "Car", notes: keyboardShapes.Eb },
  { noteName: "A1", shape: "Truck", notes: keyboardShapes.A }
];
