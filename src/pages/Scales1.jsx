import React, { Component } from "react";
import { Header, Image, Step } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../layout/Layout";
import { NN } from "../keySVGs/keyboardUtils";
import {
  BuildAScale,
  BuildBbScale,
  wagonPic,
  carPic,
  truckPic
} from "../images";
export default class Scales1 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>The Scales</Header.Content>
          <Header.Subheader>You're almost there!</Header.Subheader>
        </Header>

        <h3>So far, we've learned:</h3>
        <ul>
          <li>Four different shapes (Line, Car, Truck, Wagon)</li>
          <li>How to play each shape on the keyboard</li>
          <li>
            Which shape <em>belongs</em> to each key.
          </li>
        </ul>
        <h3>Where's the rest?</h3>
        <p>
          We're only playing four notes at a time, and a Major Scale is made up
          of <em>EIGHT</em> notes. 🤨
        </p>
        <p>
          Remember when we said you only have to remember the{" "}
          <strong>FIRST</strong> shape?
        </p>
        <p>
          Here's how you figure out what the <strong>SECOND</strong> shape is,
          so you can make a full scale.
        </p>
        <p>
          <ul>
            <li>
              First, you play <NN num={1} /> <NN num={2} />
              {"  "}
              <NN num={3} />
              <NN num={4} /> of the FIRST shape.
            </li>
            <li>
              Then <Orange>skip</Orange> a key.
            </li>
            <li>
              The very next key starts the <strong>SECOND</strong> shape. (you
              remember which shape goes with which key, right?)
            </li>
          </ul>
        </p>
        <h3>Let's see how that looks.</h3>
        <p>
          In this next image, you would:
          <ul>
            <li>play the 1st shape (truck)</li>
            <li>
              <Orange>skip</Orange> a key
            </li>
            <li>play the 2nd shape (car)</li>
          </ul>
        </p>
        <Step.Group size="mini">
          <Step>
            <Image src={truckPic} size="mini" spaced />
            <Step.Content>
              <Step.Title>1st Shape</Step.Title>
              <Step.Description>(Truck)</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content>
              <Step.Title>
                <Orange>Skip a Key</Orange>
              </Step.Title>
            </Step.Content>
          </Step>
          <Step>
            <Image src={carPic} size="mini" spaced />
            <Step.Content>
              <Step.Title>2nd Shape</Step.Title>
              <Step.Description>(Car)</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
        <Image src={BuildAScale} size="large" />
        <br />
        <br />
        <br />
        <h3>Get it?</h3>
        <p>
          Here's another example, but this time we'll need to 'skip' a white key
          instead of a black key.
        </p>

        <Step.Group size="mini">
          <Step>
            <Image
              src={carPic}
              size="mini"
              spaced
              style={{ transform: "scaleY(-1)" }}
            />
            <Step.Content>
              <Step.Title>1st Shape</Step.Title>
              <Step.Description>(Flipped Car)</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content>
              <Step.Title>
                <Orange>Skip a Key</Orange>
              </Step.Title>
            </Step.Content>
          </Step>
          <Step>
            <Image src={wagonPic} size="mini" spaced />
            <Step.Content>
              <Step.Title>2nd Shape</Step.Title>
              <Step.Description>(Wagon)</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
        <Image src={BuildBbScale} size="large" />
      </Layout>
    );
  }
}
const Orange = styled.span`
  font-weight: bold;
  color: #f5a623;
  padding: 3px;
`;
