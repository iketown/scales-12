import React, { Component } from "react";
import Layout from "../layout/Layout";
import { Header, Image, Card, Grid } from "semantic-ui-react";
import posed from "react-pose";
import styled from "styled-components";
import { NextButton } from "../components/uiElements/";
import { Line, Car, Wagon, Truck } from "../images/";
export default class Page4 extends Component {
  render() {
    return (
      <Layout>
        <Header as="h2">
          <Header.Content>The Shapes</Header.Content>
        </Header>
        <p>
          These four shapes are the basic building blocks of the entire 12scales
          system. Carefully memorize all four.
        </p>
        <p>
          This will be on the test.{" "}
          <span role="img" aria-label="wink emoji">
            😉
          </span>
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
          {/* {shapesArr.map(shape => (
            <ShapeCard {...shape} />
          ))} */}
        </div>

        <NextButton active={true} to="/shapesquiz1" center />
      </Layout>
    );
  }
}

const shapesArr = [
  {
    name: "line",
    src: Line,
    header: "Line",
    description: "yep. its just a straight line. You can do this."
  },
  { name: "car", src: Car, header: "Car", description: "down • UP • UP down" },
  {
    name: "truck",
    src: Truck,
    header: "Truck",
    description: "down • down • UP down"
  },
  {
    name: "wagon",
    src: Wagon,
    header: "Wagon",
    description: (
      <div>
        <p>
          same as the LINE, except <strong>dot #4</strong> is raised.
        </p>
      </div>
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
