import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

import Layout from "../layout/Layout";

import { splitKeyboardAnimation, CarTruckLineWagonAnimation } from "../images";
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
          Each key starts its own shape. That is, if you start on a WAGON key,
          you play a WAGON shape.
        </p>
        <p>
          There is another pattern here. First think of the keyboard in two
          sections: The <strong>3-black-key</strong> section, and the{" "}
          <strong>2-black-key</strong> section.{" "}
        </p>
        <p>
          Each section of black keys is sandwiched in by a single white key on
          either side.
        </p>

        <Image size="medium" src={splitKeyboardAnimation} />
        <br />
        <p>
          As you can see in the following image, the{" "}
          <strong>3-black-key</strong> section is the same as the{" "}
          <strong>2-black-key</strong> section, except with two wagons attached
          on the left side.
        </p>
        <p>
          You can picture it like a freeways, and you're looking down from a
          birds-eye view. It's a sort of backwards freeway though, because the
          fastest vehicles are on the right.
        </p>

        <ul>
          <li>
            <strong>Cars</strong> zooming in the right two lanes.
          </li>
          <li>
            Next come the big semi <strong>Trucks</strong>.
          </li>
          <li>
            Then there's the <strong>Line</strong> painted on the pavement...
          </li>
        </ul>

        <Image size="medium" src={CarTruckLineWagonAnimation} />
        <ul>
          <li>
            On the larger (3-black-key) highway, there are two extra slow lanes,
            reserved for use only by kids in those red radio-flyer wagons. It's
            not a super safe freeway.
          </li>
        </ul>
        <p>
          Take a minute to look that over. Remember where each shape goes? Close
          your eyes and think through each lane, from right to left:{" "}
          <strong>Cars</strong>,<strong> Trucks</strong>, a{" "}
          <strong>Line</strong>. Sometimes, there are two extra lanes for
          <strong> Wagons </strong>
          on the left.
        </p>
        <p>Ready for the quiz?</p>
      </Layout>
    );
  }
}

export default connect()(Places);
