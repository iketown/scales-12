import React, { Component } from "react";
import { Header, Image, Card } from "semantic-ui-react";
import styled from "styled-components";

import Layout from "../layout/Layout";
import { lessonsArr } from "../utils/chapterIndex";
// import { NextButton } from "../components/uiElements";
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
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>A Better Way</Header.Content>
          <Header.Subheader>to learn Major scales</Header.Subheader>
        </Header>

        <p>
          For this class, we are going to sidestep music theory, key signatures,
          note names, sharps and flats. We're just going to cut straight to how
          these 12 Major Scales <em>look</em>.
        </p>
        <p>
          Similar to how you can <em>"just know"</em> your way around your
          neighborhood, even if you don't know all the street names, You can be
          familiar, even <em>very familiar</em> with all your Major scales, even
          without knowing any of the note names.
        </p>

        <Card.Group>
          <Card color="red">
            <Image src={EMajorConventional} />
            <Card.Content>
              <Card.Header>The Hard Way</Card.Header>
              <Card.Meta>E Major Scale</Card.Meta>
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
              <Card.Header>The 12Scales Method</Card.Header>
              <Card.Meta>E Major Scale</Card.Meta>
              <Card.Description>Car, Car.</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <p>
          <br />
          Both methods will lead you to a proper E major scale, but obviously
          remembering 'Car, Car' is going to be easier than all that other
          stuff.
        </p>
        <p>
          Later, when you already know the shape of an E major scale, you wont
          even have to think "Car Car." Youll just think "E Major." At that
          point, learning which notes are sharp will be a simple task; Like
          learning <em>the name</em> of a road that you already use all the
          time.
        </p>

        <Header>
          <Header.Content as="h2">12Scales method</Header.Content>
        </Header>
        <p>
          As you saw in the example above, the 12Scales method divides each
          scale into two halves. The first four notes make a shape, and the last
          four notes make a second shape. (E Major becomes "Car, Car")
        </p>
        <p />
        <p>
          So in this class we'll first learn the shapes, then we'll learn where
          they go, and finally how to put them together.
        </p>
      </Layout>
    );
  }
}
