import React, { Component } from "react";
import { Header, Image, Card } from "semantic-ui-react";
import styled from "styled-components";

import Layout from "../layout/Layout";
import { lessonsArr } from "../utils/chapterIndex";
import { NextButton } from "../components/uiElements";
import { EMajor12Scales, EMajorConventional } from "../images";
export const DotCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  grid-gap: 10px;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #b7b7b7;
  margin: 1.5rem;
`;

export default class ABetterWay extends Component {
  state = {
    split: false,
    shapesSelected: [],
    colorAll: true,
    slideIndex: 0
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("lessonsARr", lessonsArr);
  }
  increment = () => {
    this.setState({ slideIndex: this.state.slideIndex + 1 });
  };
  decrement = () => {
    this.setState({ slideIndex: this.state.slideIndex - 1 });
  };

  render() {
    return (
      <Layout>
        <Header as="h2">
          <Header.Content>A Better Way</Header.Content>
          <Header.Subheader>to learn Major scales</Header.Subheader>
        </Header>

        <p>
          The major difference between the conventional method and the 12scales
          method can be illustrated like this:
        </p>
        <p>Here are two different approaches to learning the E-major scale.</p>
        <Card.Group>
          <Card color="red">
            <Image src={EMajorConventional} />
            <Card.Content>
              <Card.Header>E Major Scale</Card.Header>
              <Card.Meta>Conventional Method</Card.Meta>
              <Card.Description>
                Sharps (#s) get assigned in this order:{" "}
                <strong>F#, C#, G#, D#, A#, E#, B#</strong>. E Major Scale has
                four sharps, so we use the first four:
                <strong> F#, C#, G# </strong>
                and <strong>D#</strong>. When we get to any of those keys, we
                substitute the 'sharped' version in for the natural key. (
                <strong>F </strong>
                becomes <strong>F#</strong>, etc)
              </Card.Description>
            </Card.Content>
          </Card>
          <Card color="green">
            <Image src={EMajor12Scales} />
            <Card.Content>
              <Card.Header>E Major Scale</Card.Header>
              <Card.Meta>12Scales Method</Card.Meta>
              <Card.Description>Car, Car.</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <p>
          <br />
          Both methods will get you playing an E major scale, but which one is
          easier to remember?
        </p>

        <Header>
          <Header.Content as="h2">12Scales method</Header.Content>
        </Header>
        <p>
          As you saw in the example above, the 12Scales method divides each
          scale into two halves. The first four notes make a shape, and the last
          four notes make a second shape. (E Major becomes "Car, Car")
        </p>
        <p>
          So in this class we'll first learn the shapes, then we'll learn which
          scales use which shapes. You'll be playing all 12 scales with ease in
          no time.
        </p>
        <NextButton center active to="/page3" />
      </Layout>
    );
  }
}
