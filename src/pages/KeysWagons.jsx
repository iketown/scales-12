import React, { Component } from "react";
import Layout from "../layout/Layout";
import { Header } from "semantic-ui-react";
import KeyboardInline from "../components/keyboard/KeyboardInline";
import { StarterIcon } from "../components/uiElements";
import { connect } from "react-redux";
import { completeChapterQuiz } from "../actions/userScoreActions";

import { keyboardShapes } from "../components/keyboard/keyboardShapes";
class KeysWagons extends Component {
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
  quizId = "Wagons";
  render() {
    return (
      <Layout
        myUrl={this.props.match.path}
        nextButtonDisabled={!this.state.quizCompleted}
        quizId={this.quizId}
      >
        <Header as="h2">
          <Header.Content>The Wagons</Header.Content>
        </Header>
        <p>
          Finally, we reach our fourth shape, <strong>THE WAGON</strong>.
        </p>
        <p>
          The Wagon only shows up in two places on the keyboard, so this will be
          another quick test. Then we can start mixing them up.
        </p>
        <KeyboardInline
          keyboardId="WagonShapes"
          keyboardScale={0.5}
          showAllCircles={false}
          messageInstructions={{
            icon: "question circle",
            header: "Wagon Shapes",
            content: (
              <p>
                Make WAGON shapes on the keyboard, starting at the{" "}
                <StarterIcon />
              </p>
            )
          }}
          whenToShowShape={"afterCorrect"}
          answers={wagonAnswers}
          continueText="Well done!  That's all the shapes."
          callbackWhenFinished={this.handleCompletedQuiz}
        />
      </Layout>
    );
  }
}

const wagonAnswers = [
  {
    bottomKey: "C1",
    topKey: "C2",
    correctAnswer: keyboardShapes.F
  },
  {
    bottomKey: "C1",
    topKey: "C2",
    correctAnswer: keyboardShapes.Gb
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
)(KeysWagons);
