import React, { Component } from "react";
import { Button, Header, Image, Step, Icon } from "semantic-ui-react";
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
          <Header.Subheader>part deux</Header.Subheader>
        </Header>

        <p>
          now, we'll try it out with some help before we hit the final test:
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
        <p>Here's another example, but this time we'll 'skip' a white key.</p>

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
