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
            The Major Scale is a collection of notes which are related to
            eachother in a way that gives your ear an idea of <em>where</em> the
            song is. It is probably easier to show than to describe.
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
              <NN num={3} />
              <NN num={3} />
              <NN num={3} />
            </strong>
            ,{" "}
            <strong>
              <NN num={3} />
              <NN num={3} />
              <NN num={3} />
            </strong>
            ,{" "}
            <strong>
              <NN num={3} />
              <NN num={5} />
              <NN num={1} />
              <NN num={2} />
              <NN num={3} />
            </strong>{" "}
            on the above keyboard, it should sound like "Jingle Bells."
          </p>
          <p>
            Here's another Major Scale, this time starting on{" "}
            <strong>Eb</strong>.
          </p>
          <p>try playing the same number sequence on this keyboard.</p>
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
            looks completely different when you use the Eb scale. The mix of
            black and white keys give the 8-step scale a different 'shape'. Here
            are a few other scale 'shapes'.
          </p>

          <Card.Group centered>
            <ScaleCard src={AmajorScale} title={"A Major"} />
            <ScaleCard src={DbMajorScale} title={"Db Major"} />
            <ScaleCard src={BbMajorScale} title={"Bb Major"} />
          </Card.Group>
          <p>
            Each scale follows an exact pattern which makes them
            <em>sound</em> correct, but they still all <em>look</em> completely
            different.
          </p>
          <p>
            Most people don't realize that there are also{" "}
            <strong>patterns in the way the scales look</strong>. They are not
            just random combinations of white and black keys to be memorized.
          </p>
          <p>
            This is where we depart from the well-trodden path of students
            painstakingly working their way through 12 seemingly unrelated scale
            patterns. There's a faster, easier, better way.
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
