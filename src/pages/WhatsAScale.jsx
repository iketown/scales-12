import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header, Container, Card, Item, Grid, Button } from "semantic-ui-react";
import { ScaleCard } from "../components/uiElements/customDisplays";
import Layout from "../layout/Layout.jsx";
import styled from "styled-components";
import KeyboardNumbered from "../components/keyboard/KeyboardNumbered.jsx";
import { finishPage } from "../actions/userScoreActions";
import AmajorScale from "../images/AmajorScale.svg";
import DbMajorScale from "../images/DbMajorScale.svg";
import BbMajorScale from "../images/BbmajorScale.svg";
import { fullScales } from "../components/keyboard/keyboardShapes";
import { NN } from "../keySVGs/keyboardUtils";
import { CMajorScale } from "../images";
import { StarterIcon } from "../components/uiElements/index";
import { getPreviousAndNextLessons } from "../utils/chapterIndex";

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
            other in a way that gives your ear an idea of <em>where</em> the
            song is.
          </p>
          <p>
            Have you ever sang <em>'Happy Birthday To You...'</em> in a group of
            people, and even if each individual person sounds ok‍, all together
            it sounds terrible? Usually, that's because people are singing in
            different <em>keys</em>. That is, they're using different{" "}
            <strong>Major Scales</strong>.
          </p>
          <p>
            There are 8 notes in the Major Scale. We'll number them 1 through 8.
            Here is a <strong>'C Major Scale'</strong>. (all white keys)
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
                // correctAnswer: "333|333|35123"
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
          <p>Try playing the same number sequence(s) on this keyboard.</p>
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
            It's the same song, it's still definitely "Jingle Bells", but it
            <em> looks</em> completely different when you use the Eb scale. The
            mix of black and white keys give the Eb scale a different 'shape'.
            Here are a few other scale 'shapes'. (You don't have to learn these,
            just notice how each one is different)
          </p>
          <Card.Group centered>
            <ScaleCard src={AmajorScale} title={"A Major"} />
            <ScaleCard src={DbMajorScale} title={"Db Major"} />
            <ScaleCard src={BbMajorScale} title={"Bb Major"} />
          </Card.Group>
          <br />
          <br />

          <p>
            Most people don't realize that there are also{" "}
            <strong>patterns in the way the scales look</strong>. They are not
            just random combinations of white and black keys.
          </p>
          <p>
            This is where most students go to the practice room and start
            memorizing.
          </p>
          <p>
            We're sneaking out the side door though. There's a better way to do
            it.
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
