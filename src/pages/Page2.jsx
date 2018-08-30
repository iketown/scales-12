import React, { Component } from "react";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
import { Header, Card, Image, Button, Icon } from "semantic-ui-react";
import { ScaleCard } from "../components/uiElements/customDisplays";
import styled from "styled-components";
import posed from "react-pose";
import Line from "../images/Line.svg";
import Car from "../images/Car.svg";
import Truck from "../images/Truck.svg";
import Wagon from "../images/Wagon.svg";
import lineSpacing from "../images/lineSpacing.svg";
import carSpacing from "../images/carSpacing.svg";
import keyKeyNoKey from "../images/keyKeyNoKey.svg";

const CardFader = posed.div({
  active: { opacity: 1, y: "0%" },
  disabled: { opacity: 0.05, y: "10%" },
  done: { opacity: 0.7, y: "3%" }
});
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, max-content));
  justify-content: center;
  grid-gap: 1.5rem;
`;
const ButtonSlider = posed.div({
  out: { x: "5rem", opacity: 0, disabled: true },
  in: { x: "0rem", opacity: 1, disabled: false, delay: 500 }
});

export default class Page2 extends Component {
  state = {
    currentCardIndex: 0
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  setCardIndex = num => {
    this.setState({ currentCardIndex: num });
  };

  render() {
    const { currentCardIndex } = this.state;
    return (
      <Layout>
        <Header as="h2">
          <Header.Content>A Better Way</Header.Content>
          <Header.Subheader>to learn Major scales</Header.Subheader>
        </Header>
        <div>
          <p>
            First, we need to learn the
            <strong> four basic shapes</strong>
          </p>
          <CardsGrid>
            {cardsArr.map((card, i) => (
              <ShapeCard
                {...card}
                setCardIndex={this.setCardIndex}
                i={i}
                active={currentCardIndex === i}
                disabled={currentCardIndex < i}
              />
            ))}
            <CardFader pose={currentCardIndex === 4 ? "active" : "disabled"}>
              <Card>
                <Card.Content>
                  <Card.Header>Got it?</Card.Header>
                  <Card.Description>
                    Before moving on, try to commit all four shapes to memory.
                  </Card.Description>
                  <ButtonSlider pose={currentCardIndex === 4 ? "in" : "out"}>
                    <Button
                      as={Link}
                      to="/page3"
                      primary
                      icon
                      labelPosition="right"
                      style={{ margin: "2rem" }}
                      disabled={currentCardIndex < 4}
                    >
                      Next <Icon name="arrow circle right" />
                    </Button>
                  </ButtonSlider>
                </Card.Content>
              </Card>
            </CardFader>
          </CardsGrid>
        </div>
      </Layout>
    );
  }
}

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

        <Button
          floated="right"
          disabled={!active}
          basic={!active}
          primary={active}
          size="small"
          compact
          onClick={() => setCardIndex(i + 1)}
          content="OK"
        />
      </Card.Content>
    </Card>
  </CardFader>
);

const cardsArr = [
  {
    src: Line,
    header: "Line",
    description: "down • down •  down down"
  },
  {
    src: Car,
    header: "Car",
    description: "down • UP • UP down"
  },
  {
    src: Truck,
    header: "Truck",
    description: "down • down • UP down"
  },
  {
    src: Wagon,
    header: "Wagon",
    description: "down • down • down UP"
  }
];
