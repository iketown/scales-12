import React, { Component } from "react";
import Layout from "../layout/Layout";
import { connect } from "react-redux";
import { completeChapterQuiz } from "../actions/userScoreActions";

import KeyboardInline from "../components/keyboard/KeyboardInline.jsx";
import { StarterIcon } from "../components/uiElements/index";
import { keyboardShapes } from "../components/keyboard/keyboardShapes";
class PlacesTest2 extends Component {
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
  quizId = "Places 2";
  render() {
    return (
      <Layout
        myUrl={this.props.match.url}
        nextButtonDisabled={!this.state.quizCompleted}
        quizId={this.quizId}
      >
        <h1>Places Test 2</h1>

        <KeyboardInline
          keyboardId="places2"
          answers={shapePickerAnswers}
          keyboardScale={0.5}
          whenToShowShape="afterCorrect"
          callbackWhenFinished={this.handleCompletedQuiz}
          messageInstructions={{
            icon: "question circle",
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

const Cposition = {
  bottomKey: "C1",
  topKey: "C2"
};
const Fposition = {
  bottomKey: "F1",
  topKey: "F2"
};
const shapePickerAnswers = [
  {
    noteName: "F1",
    shape: "Wagon",
    correctAnswer: keyboardShapes.F,
    ...Cposition
  },
  {
    noteName: "Bb1",
    shape: "Car",
    correctAnswer: keyboardShapes.Bb,
    ...Fposition
  },
  {
    noteName: "D1",
    shape: "Truck",
    correctAnswer: keyboardShapes.D,
    ...Cposition
  },
  {
    noteName: "C1",
    shape: "Line",
    correctAnswer: keyboardShapes.C,
    ...Cposition
  },
  {
    noteName: "Ab1",
    shape: "Truck",
    correctAnswer: keyboardShapes.Ab,
    ...Fposition
  },
  {
    noteName: "E1",
    shape: "Car",
    correctAnswer: keyboardShapes.E,
    ...Cposition
  },
  {
    noteName: "Gb1",
    shape: "Wagon",
    correctAnswer: keyboardShapes.Gb,
    ...Fposition
  },
  {
    noteName: "Db1",
    shape: "Truck",
    correctAnswer: keyboardShapes.Db,
    ...Cposition
  },
  {
    noteName: "B1",
    shape: "Car",
    correctAnswer: keyboardShapes.B,
    ...Fposition
  },
  {
    noteName: "G1",
    shape: "Line",
    correctAnswer: keyboardShapes.G,
    ...Cposition
  },
  {
    noteName: "Eb1",
    shape: "Car",
    correctAnswer: keyboardShapes.Eb,
    ...Cposition
  },
  {
    noteName: "A1",
    shape: "Truck",
    correctAnswer: keyboardShapes.A,
    ...Fposition
  }
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
)(PlacesTest2);
