import React, { Component } from "react";
import Layout from "../layout/Layout";
import { Header, Image, Card, Grid } from "semantic-ui-react";
import posed from "react-pose";
import styled from "styled-components";
// import { NextButton } from "../components/uiElements/";
import {
  LineKeyboardAni,
  CarKeyboardAni,
  TruckKeyboardAni,
  WagonKeyboardAni
} from "../images";

const ShapeName = styled.span`
  font-weight: bold;
  background: #9e9e9e12;
  padding: 3px;
  border-radius: 3px;
`;
export const DownUp = styled.p`
  display: flex;
  justify-content: center;
`;
export const Down = () => <span style={{ margin: "5px" }}>DOWN</span>;
export const Up = () => (
  <span style={{ margin: "5px", fontWeight: "bold" }}>UP</span>
);

export default class TheShapes2 extends Component {
  render() {
    return (
      <Layout myUrl={this.props.match.path}>
        <Header as="h2">
          <Header.Content>The Shapes</Header.Content>
        </Header>
        <p>
          These four shapes are the basic building blocks of the entire 12scales
          system. Each shape is a code for a series of black and white keys.
        </p>
        <p>
          Take a few moments to read each description, and notice the
          similarities and differences.
        </p>
        <p>
          Once you have these four memorized, you'll be ready to ace the quiz.
          😎
        </p>
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
        </div>
      </Layout>
    );
  }
}

const shapesArr = [
  {
    name: "line",
    src: LineKeyboardAni,
    header: "Line",
    description: (
      <div>
        <p>
          Yep. its just a straight line. You can do this. The{" "}
          <ShapeName>LINE</ShapeName> is ALL white keys.
        </p>
        <hr />
        <DownUp>
          <Down />
          <Down />
          <Down />
          <Down />
        </DownUp>
      </div>
    )
  },
  {
    name: "wagon",
    src: WagonKeyboardAni,
    header: "Wagon",
    description: (
      <div>
        <p>
          Same as the <ShapeName>LINE</ShapeName>, except{" "}
          <strong>dot #4</strong> is raised. Think of
          <strong> dot #4</strong> as the 'handle' to pull the{" "}
          <ShapeName>WAGON</ShapeName>.
        </p>
        <hr />
        <DownUp>
          <Down />
          <Down />
          <Down />
          <Up />
        </DownUp>
      </div>
    )
  },
  {
    name: "car",
    src: CarKeyboardAni,
    header: "Car",
    description: (
      <div>
        <p>
          The <ShapeName>CAR</ShapeName> has both 'wheels' on the ground. (
          <strong>#1</strong> and <strong>#4</strong>)
        </p>
        <p>
          In the middle of the <ShapeName>CAR</ShapeName>, dots{" "}
          <strong>#2</strong> and <strong>#3</strong> are raised. Imagine{" "}
          <strong>#2</strong> in the back seat and <strong>#3</strong> in the
          front seat.
        </p>
        <hr />
        <DownUp>
          <Down />
          <Up />
          <Up />
          <Down />
        </DownUp>
      </div>
    )
  },
  {
    name: "truck",
    src: TruckKeyboardAni,
    header: "Truck",
    description: (
      <div>
        <p>
          Just like the <ShapeName>CAR</ShapeName>, the{" "}
          <ShapeName>TRUCK</ShapeName> has both wheels down. (
          <strong>#1</strong> and <strong>#4</strong>) The only difference is
          there's no "back seat." The <ShapeName>TRUCK</ShapeName> only has a
          raised <strong>#3</strong>.
        </p>
        <hr />
        <DownUp>
          <Down />
          <Down />
          <Up />
          <Down />
        </DownUp>
      </div>
    )
  }
];
const ShapeCard = ({
  src,
  src2,
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
        <Image src={src} style={{ marginBottom: "10px" }} />
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
