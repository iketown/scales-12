import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Container, Card } from "semantic-ui-react";
import { ScaleCard } from "../components/uiElements/customDisplays";
import Layout from "../layout/Layout.jsx";
import KeyboardNumbered from "../components/keyboard/KeyboardNumbered.jsx";
import { finishPage } from "../actions/userScoreActions";
import AmajorScale from "../images/AmajorScale.svg";
import DbMajorScale from "../images/DbMajorScale.svg";
import BbMajorScale from "../images/BbmajorScale.svg";
import { fullScales } from "../components/keyboard/keyboardShapes";
import { NN } from "../keySVGs/keyboardUtils";

class WhatsAScale extends Component {
  render() {
    const myUrl = this.props.match.path;
    return (
      <Layout myUrl={myUrl}>
        <Header as="h1">
          <Header.Content>What is a Scale?</Header.Content>
        </Header>
        <Container>
          <p>
            The Major Scale is a collection of notes which are related to each
            other in a way that gives your ear an idea of <em>where</em> a song
            is.
          </p>
          <p>
            Have you ever sang <em>'Happy Birthday To You...'</em> in a group of
            people, and it just sounded terrible? Even if each individual person
            sounds pretty ok‍, if the group collectively sounds like some kind
            of <em>tone-deaf hell chorus</em>, it's probably because they're all
            singing in different keys. That is, they're using different{" "}
            <strong>Major Scales</strong>. (One person is singing in C, while
            another is singing in F, etc)
          </p>
          <p>Let's see what that means.</p>
          <p>
            There are 8 notes in the Major Scale. We'll number them 1 through 8.
            Here's our old friend, the <strong>'C Major Scale'</strong>. (all
            white keys)
          </p>
          <KeyboardNumbered
            keyboardId="kb000Cmajor"
            showAllCircles={true}
            keyboardScale={0.5}
            callbackWhenFinished={() => this.setState({ CScaleDone: true })}
            answers={[
              {
                bottomKey: "C1",
                topKey: "E2",
                scaleNumbers: fullScales.C
              }
            ]}
          />
          <p>
            If you click on{" "}
            <strong>
              <NN num={3} scale={0.8} />
              <NN num={3} scale={0.8} />
              <NN num={3} scale={0.8} />
            </strong>
            ,{" "}
            <strong>
              <NN num={3} scale={0.8} />
              <NN num={3} scale={0.8} />
              <NN num={3} scale={0.8} />
            </strong>
            ,{" "}
            <strong>
              <NN num={3} scale={0.8} />
              <NN num={5} scale={0.8} />
              <NN num={1} scale={0.8} />
              <NN num={2} scale={0.8} />
              <NN num={3} scale={0.8} />
            </strong>{" "}
            on the above keyboard, it should sound like "Jingle Bells."
          </p>
          <p>
            Or if you prefer "Happy Birthday," try:
            <strong>
              <NN num={5} scale={0.8} />
              <NN num={5} scale={0.8} />
              <NN num={6} scale={0.8} />
              <NN num={5} scale={0.8} />
              <NN num={8} scale={0.8} />
              <NN num={7} scale={0.8} />
            </strong>
          </p>
          <p>
            Here's another Major Scale, this time starting on{" "}
            <strong>Eb</strong>.
          </p>
          <p>Try playing the same number sequences on this keyboard.</p>
          <KeyboardNumbered
            keyboardId="kb000Cmajor"
            showAllCircles={true}
            keyboardScale={0.5}
            callbackWhenFinished={() => this.setState({ CScaleDone: true })}
            answers={[
              {
                bottomKey: "D1",
                topKey: "E2",
                scaleNumbers: fullScales.Eb,
                correctAnswer: "333|333|35123"
              }
            ]}
          />
          <p>
            The songs <em>sound</em> right, but they
            <em> look</em> completely different when you use a different scale.
            The mix of black and white keys give the Eb scale a different
            'shape'. Here are a few other scale 'shapes'. (You don't have to
            learn these, just notice how each one is different)
          </p>
          <Card.Group centered>
            <ScaleCard src={AmajorScale} title={"A Major"} />
            <ScaleCard src={DbMajorScale} title={"Db Major"} />
            <ScaleCard src={BbMajorScale} title={"Bb Major"} />
          </Card.Group>
          <br />
          <br />

          <p>
            Most people don't realize that there are also patterns in the way
            the scales <strong>look</strong>. They may look like random patterns
            of black and white keys, but if you dig a little deeper, there is an
            underlying structure. There are <em>secret mysterious patterns</em>.{" "}
            <span role="img" aria-label="amazed face">
              😱
            </span>
          </p>
          <p>
            These patterns aren't obvious (until you see them, that is.) Most
            students just go to the practice room and start memorizing.
          </p>
          <p>
            This is where we depart from the path of 'most students.' There is a
            hidden short cut to our common destination. There is a better way.
          </p>
        </Container>
      </Layout>
    );
  }
}
// const NNspan = styled.span`
//   color: #57a5ff;
//   font-size: 1.5rem;
//   font-family: initial;
// `;
//  const NN = ({ num }) => <NNspan>{noteNumbers[num]}</NNspan>;

const actions = { finishPage };
export default connect(
  null,
  actions
)(WhatsAScale);
