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
export default class Page4 extends Component {
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
        <p>Once you have these four memorized, continue to the quiz. :)</p>
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

        {/* <NextButton active={true} to="/shapesquiz1" center /> */}
      </Layout>
    );
  }
}

const shapesArr = [
  {
    name: "line",
    src: LineKeyboardAni,
    header: "Line",
    description: "yep. its just a straight line. You can do this."
  },
  {
    name: "wagon",
    src: WagonKeyboardAni,
    header: "Wagon",
    description: (
      <div>
        <p>
          same as the LINE, except <strong>dot #4</strong> is raised. Think of
          <strong> dot #4</strong> as the 'handle' to pull the wagon.
        </p>
      </div>
    )
  },
  {
    name: "car",
    src: CarKeyboardAni,
    header: "Car",
    description: (
      <p>
        The CAR has both 'wheels' on the ground. (<strong>#1</strong> and{" "}
        <strong>#4</strong>) In the middle of the car, dots <strong>#2</strong>{" "}
        and <strong>#3</strong> are raised. Imagine <strong>#2</strong> in the
        back seat and <strong>#3</strong> in the front seat.
      </p>
    )
  },
  {
    name: "truck",
    src: TruckKeyboardAni,
    header: "Truck",
    description: (
      <p>
        Just like the car, except there's no one in the back seat. There IS no
        back seat!
      </p>
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
