import React, { Component } from "react";
import { Button, Header, Image, Step, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../layout/Layout";
import { NN } from "../keySVGs/keyboardUtils";
import {
  Line,
  Car,
  Truck,
  Wagon,
  KeystoDots,
  BuildAScale,
  BuildBbScale,
  wagonPic,
  FlipCar,
  carPic,
  truckPic
} from "../images";
export default class Scales1 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>The Scales</Header.Content>
          <Header.Subheader>finally</Header.Subheader>
        </Header>

        <p>You're almost there! </p>
        <h3>so far, we've learned:</h3>
        <ul>
          <li>Four different shapes (Line, Car, Truck, Wagon)</li>
          <li>How to play each shape on the keyboard</li>
          <li>Which shape "belongs" to each key.</li>
        </ul>
        <h3>where's the rest?</h3>
        <p>
          We're only playing four notes at a time, and a Major Scale is made up
          of <em>EIGHT</em> notes. 🤨
        </p>
        <p>
          To build a full scale, you play <NN num={1} /> <NN num={2} />
          {"  "}
          <NN num={3} />
          <NN num={4} /> of the 1st shape, then <Orange>skip</Orange> a key,
          then start a new shape on the next key. You remember which shape goes
          with which key, right? If not, you can{" "}
          <Link to="/places_1">
            <strong>go back and review</strong>
          </Link>{" "}
          .
        </p>
        <p>
          In this next image, you would:
          <ul>
            <li>
              play the 1st shape (truck) <NN num={1} /> <NN num={2} />
              {"  "}
              <NN num={3} />
              <NN num={4} />
            </li>
            <li>skip a key</li>
            <li>
              play the 2nd shape (car) <NN num={5} /> <NN num={6} />
              {"  "}
              <NN num={7} />
              <NN num={8} />
            </li>
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
const shapesArr = [
  { name: "line", image: Line },
  { name: "car", image: Car },
  { name: "truck", image: Truck },
  { name: "wagon", image: Wagon }
];

const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  align-items: center;
`;
