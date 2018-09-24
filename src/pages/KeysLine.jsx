import React, { Component } from "react";
import Layout from "../layout/Layout";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import KeyboardInline from "../components/keyboard/KeyboardInline";
import { StarterIcon } from "../components/uiElements";
import { completeChapterQuiz } from "../actions/userScoreActions";

class KeysLine extends Component {
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
  quizId = "Lines";
  render() {
    return (
      <Layout
        myUrl={this.props.match.path}
        nextButtonDisabled={!this.state.quizCompleted}
        quizId={this.quizId}
      >
        <Header as="h2">
          <Header.Content>On The Piano</Header.Content>
        </Header>
        <h1>The Line</h1>
        <p>
          Now we'll finally put some shapes on the keyboard, starting with the
          easiest and straightest shape of them all, <strong>the LINE</strong>.
        </p>
        <p>
          There are only two keys that use a LINE shape, so this will be a
          pretty quick test:
        </p>
        <KeyboardInline
          keyboardId={this.quizId}
          bottomKey="C1"
          topKey="C2"
          showAllCircles={false}
          keyboardScale={0.54}
          messageInstructions={{
            icon: "question circle",
            header: "Line Shapes",
            content: (
              <p>
                Make a line shape on the keyboard, starting at the{" "}
                <StarterIcon />
              </p>
            )
          }}
          whenToShowShape={"afterCorrect"}
          answers={lineAnswers}
          continueText="Nice!  next we'll check out the CARS."
          callbackWhenFinished={this.handleCompletedQuiz}
        />
      </Layout>
    );
  }
}

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
const mapStateToProps = state => ({
  profile: state.firebase.profile
});
const actions = {
  completeChapterQuiz
};
export default connect(
  mapStateToProps,
  actions
)(KeysLine);
