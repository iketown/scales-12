import React, { Component } from "react";
import Layout from "../layout/Layout";
import { Header, Image, Card, Grid } from "semantic-ui-react";
import posed from "react-pose";
import styled from "styled-components";
// import { NextButton } from "../components/uiElements/";
import {
  Line,
  FlipTruck,
  FlipWagon,
  FlipCar,
  CarFlipAnimation
} from "../images";
import { Down, Up, DownUp } from "./TheShapes2.jsx";
export default class Page5 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>The FLIPPED Shapes</Header.Content>
        </Header>
        <p>
          Now that we're familiar with the four shapes, we're going to learn
          their 'flipped' counterparts.
        </p>
        <p>
          a.k.a. <strong>Flip-Car</strong>, <strong>Flip-Truck</strong> and{" "}
          <strong>Flip-Wagon</strong>.
        </p>
        <p>
          This will feel pretty obvious once we start using these on the
          keyboard.
        </p>
        <li>
          When the shape starts on a <strong>white key</strong>, you use the{" "}
          <em>regular</em> (non-flipped) shape.
        </li>
        <li>
          When the shape starts on a <strong>black key</strong>, you use the
          flipped shape.
        </li>
        <br />

        <img src={CarFlipAnimation} alt="" />
        <div>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={8}>{shapeCards[0]}</Grid.Column>
              <Grid.Column width={8}>{shapeCards[1]}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>{shapeCards[2]}</Grid.Column>
              <Grid.Column width={8}>{shapeCards[3]}</Grid.Column>
            </Grid.Row>
          </Grid>
          {/* {shapesArr.map(shape => (
            <ShapeCard {...shape} />
          ))} */}
        </div>

        {/* <NextButton active={true} to="/ShapesQuiz2" center /> */}
      </Layout>
    );
  }
}

const shapesArr = [
  {
    name: "line",
    src: Line,
    header: "Line",
    description: "There are no flipped lines.  Lines are always white keys.  😬"
  },
  {
    name: "car",
    src: FlipCar,
    header: "Flip-Car",
    description: (
      <DownUp>
        <Up />
        <Down />
        <Down />
        <Up />
      </DownUp>
    )
  },
  {
    name: "truck",
    src: FlipTruck,
    header: "Flip-Truck",
    description: (
      <DownUp>
        <Up />
        <Up />
        <Down />
        <Up />
      </DownUp>
    )
  },
  {
    name: "wagon",
    src: FlipWagon,
    header: "Flip-Wagon",
    description: (
      <DownUp>
        <Up />
        <Up />
        <Up />
        <Down />
      </DownUp>
    )
  }
];
const ShapeCard = ({
  src,
  header,
  description,
  setCardIndex,
  i,
  disabled,
  active
}) => (
  <CardFader pose={active ? "active" : disabled ? "disabled" : "done"}>
    <Card>
      <Card.Content>
        <Image src={src} />
        <Card.Header>{header}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  </CardFader>
);
const shapeCards = shapesArr.map(shape => <ShapeCard {...shape} />);

const CardFader = posed.div({
  active: { opacity: 1, y: "0%" },
  disabled: { opacity: 0.05, y: "10%" },
  done: { opacity: 0.7, y: "3%" }
});
export const DotCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 21rem);
  justify-items: center;
  grid-gap: 10px;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #b7b7b7;
  margin: 1.5rem;
  align-items: center;
  justify-content: center;
`;
