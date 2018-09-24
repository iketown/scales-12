import React, { Component } from "react";
import { connect } from "react-redux";
import { completeChapterQuiz } from "../actions/userScoreActions";
import Layout from "../layout/Layout";
import KeyboardShapePicker from "../components/keyboard/KeyboardShapePicker.jsx";
import { StarterIcon } from "../components/uiElements/index";
import { keyboardShapes } from "../components/keyboard/keyboardShapes";

class PlacesTest1 extends Component {
  state = {
    quizCompleted: false
  };
  handleCompletedQuiz = () => {
    const { displayName, city } = this.props.profile;
    const { completeChapterQuiz } = this.props;
    completeChapterQuiz({
      quizId: this.quizId,
      displayName,
      city
    });
    this.setState({ quizCompleted: true });
  };
  quizId = "Places 1";
  render() {
    return (
      <Layout
        myUrl={this.props.match.url}
        nextButtonDisabled={!this.state.quizCompleted}
        quizId={this.quizId}
      >
        <h1>Places Test</h1>
        <p>
          Next we'll do a different kind of test. Instead of playing keys, when
          you see the <StarterIcon /> on the keyboard, click the button below
          the keyboard with the corresponding SHAPE.
        </p>
        <KeyboardShapePicker
          answers={shapePickerAnswers}
          bottomKey={"C1"}
          topKey={"E2"}
          keyboardScale={0.5}
          whenToShowShape="afterCorrect"
          callbackWhenFinished={this.handleCompletedQuiz}
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

const mapStateToProps = state => ({
  profile: state.firebase.profile
});
const actions = {
  completeChapterQuiz
};
export default connect(
  mapStateToProps,
  actions
)(PlacesTest1);
