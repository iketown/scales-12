import React, { Component } from "react";
import { Button, Header, Image, Step, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../layout/Layout";
import { StarterIcon } from "../components/uiElements/index";
import {
  scaleShapes,
  fullScales,
  scaleShapes2
} from "../components/keyboard/keyboardShapes";
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
import KeyboardInline from "../components/keyboard/KeyboardInline.jsx";
export default class Scales1 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>The End</Header.Content>
        </Header>

        <p>You did it!</p>
        <p>Learning all TWELVE MAJOR SCALES wasn't so bad, was it?</p>
        <p>
          Now any time you see a piano, think about those shapes, where they go,
          and how they fit together. Its easy!
        </p>
        <p>
          If this helped you, pass it on. Anyone can learn their major scales -
          just send them to <strong>12Scales.com</strong>
        </p>
      </Layout>
    );
  }
}
