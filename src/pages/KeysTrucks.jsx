import React, { Component } from "react";
import Layout from "../layout/Layout";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import KeyboardInline from "../components/keyboard/KeyboardInline";
import { StarterIcon } from "../components/uiElements";
import { completeChapterQuiz } from "../actions/userScoreActions";

import { keyboardShapes } from "../components/keyboard/keyboardShapes";
class KeysTrucks extends Component {
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
  quizId = "Trucks";
  render() {
    return (
      <Layout
        myUrl={this.props.match.path}
        nextButtonDisabled={!this.state.testFinished}
        quizId={this.quizId}
      >
        <Header as="h2">
          <Header.Content>The Trucks</Header.Content>
        </Header>
        <p>
          ... And now for the <strong>TRUCKS</strong>.
        </p>
        <p>
          same drill, only this time there's <em>nobody in the back seat.</em>
        </p>
        <KeyboardInline
          keyboardId="TruckShapes"
          keyboardScale={0.5}
          showAllCircles={false}
          messageInstructions={{
            icon: "question circle",
            header: "Truck Shapes",
            content: (
              <p>
                Make TRUCK shapes on the keyboard, starting at the{" "}
                <StarterIcon />
              </p>
            )
          }}
          whenToShowShape={"afterCorrect"}
          answers={truckAnswers}
          continueText="Well done!  Just one more shape to learn."
          callbackWhenFinished={this.handleCompletedQuiz}
        />
      </Layout>
    );
  }
}

const truckAnswers = [
  {
    bottomKey: "C1",
    topKey: "C2",
    correctAnswer: keyboardShapes.D
  },
  {
    bottomKey: "C1",
    topKey: "C2",
    correctAnswer: keyboardShapes.Db
  },
  {
    bottomKey: "F1",
    topKey: "F2",
    correctAnswer: keyboardShapes.A
  },
  {
    bottomKey: "F1",
    topKey: "F2",
    correctAnswer: keyboardShapes.Ab
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
)(KeysTrucks);
