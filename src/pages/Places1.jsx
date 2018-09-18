import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

import Layout from "../layout/Layout";

import { splitKeyboardAnimation, CarTruckLineWagonAnimation } from "../images";
import { StarterIcon } from "../components/uiElements";
import KeyboardShapePicker from "../components/keyboard/KeyboardShapePicker";
class Places extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.url}>
        <h1>Places</h1>
        <p>
          Now that we're familiar with the four shapes, it's time to figure out
          which shape goes where.
        </p>
        <p>
          First think of the keyboard in two sections: The{" "}
          <strong>3-black-key</strong> section, and the{" "}
          <strong>2-black-key</strong> section.{" "}
        </p>
        <p>
          Each section of black keys is sandwiched in by a single white key on
          either side.
        </p>

        <Image size="medium" src={splitKeyboardAnimation} />
        <br />
        <p>
          Starting from the right side of each of those sections, you have 2
          Cars, 2 Trucks, and a Line.
        </p>
        <p>
          You can picture it like a huge freeway, you're looking down from a
          birds-eye view.
        </p>
        <p>From right to left:</p>
        <ul>
          <li>
            <strong>Cars</strong> in the right lanes, driving slowly.
          </li>
          <li>
            <strong>Trucks</strong> in the left lanes, passing the cars. (Super
            fast trucks? 🤷🏼‍ )
          </li>
          <li>
            Then there's the <strong>Line</strong> on the pavement...
          </li>
          <li>For the 2-black-key section, that's it!</li>
        </ul>

        <Image size="medium" src={CarTruckLineWagonAnimation} />
        <ul>
          <li>
            on the larger (3-black-key) highway, there are two extra lanes, made
            especially for people to pull their kids in red Radio Flyer wagons.
          </li>
        </ul>
        <p>
          Take a minute to look that over. Remember where each shape goes? Close
          your eyes and think through each lane, from right to left:{" "}
          <strong>Cars</strong>,<strong>Trucks</strong>, a <strong>Line</strong>
          . and when it's a <em>really</em> big 'freeway', there are two extra
          lanes for
          <strong> Wagons </strong>
          on the left.
        </p>
      </Layout>
    );
  }
}

export default connect()(Places);
