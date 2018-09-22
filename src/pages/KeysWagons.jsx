import React, { Component } from "react";
import Layout from "../layout/Layout";
import { Header } from "semantic-ui-react";
import KeyboardInline from "../components/keyboard/KeyboardInline";
import { StarterIcon } from "../components/uiElements";

import { keyboardShapes } from "../components/keyboard/keyboardShapes";
class KeysWagons extends Component {
  state = {
    testFinished: false
  };
  render() {
    return (
      <Layout
        myUrl={this.props.match.path}
        nextButtonDisabled={!this.state.testFinished}
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
          callbackWhenFinished={() => this.setState({ testFinished: true })}
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

export default KeysWagons;
