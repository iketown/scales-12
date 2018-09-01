import React, { Component } from "react";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
import { Header, Card, Image, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import posed from "react-pose";
import {
  fullScales,
  edgeKeys,
  scaleShapes
} from "../components/keyboard/keyboardShapes";
import {
  Line,
  Car,
  Truck,
  Wagon,
  lineDots,
  carDots,
  truckDots,
  wagonDots,
  mindBlown
} from "../images";
import KeyboardDisplayOnly from "../components/keyboard/KeyboardDisplayOnly";

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
const ScaleGridItem = styled.div`
  padding: 5px;
  margin: 5px;
`;
const ScaleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 169px);
  grid-gap: 1rem;
`;
const ShapeButtonDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: space-between;
`;

export default class Page2 extends Component {
  state = {
    currentCardIndex: 0,
    shapeSelected: "truck"
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  setCardIndex = num => {
    this.setState({ currentCardIndex: num });
  };
  setShapeSelected = shapeSelected => {
    this.setState({ shapeSelected });
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
          <p>So there are 12 Major Scales to learn. here they are:</p>
          <ScaleGrid>
            {Object.keys(fullScales).map(s => {
              return (
                <ScaleGridItem key={s}>
                  <KeyboardDisplayOnly
                    bottomKey={edgeKeys[s].bottom}
                    topKey={edgeKeys[s].top}
                    keysToLabel={[fullScales[s][0], fullScales[s][7]]}
                    notesToShow={fullScales[s]}
                    keyboardScale={0.2}
                    scaleShapes={scaleShapes[s]}
                    shapeToShow={this.state.shapeSelected}
                    showCircles={true}
                    fadeInactive={true}
                  />
                </ScaleGridItem>
              );
            })}
          </ScaleGrid>
          <p>
            So <strong>12 scales</strong> x <strong>8 notes</strong> per
            scale... that's a lot of information. Let's look at that as simple
            dot patterns.
          </p>
          <p>check it out: </p>
          <ShapeButtonDiv>
            {[
              { img: lineDots, text: "line", gridArea: "1 / 1 / 1 / 2" },
              { img: carDots, text: "car", gridArea: "1 / 2 / 1 / 3" },
              { img: truckDots, text: "truck", gridArea: "1 / 3 / 1 / 4" },
              { img: wagonDots, text: "wagon", gridArea: "1 / 4 / 1 / 5" }
            ].map(shape => (
              <div style={{ gridArea: shape.gridArea }} key={shape.text}>
                <Button onClick={() => this.setShapeSelected(shape.text)}>
                  <img src={shape.img} alt="" width={"100px"} />
                </Button>
              </div>
            ))}
          </ShapeButtonDiv>
          <img src={mindBlown} alt="" />
          <p>
            First, we need to learn the
            <strong> four basic shapes</strong>
          </p>
          <p>
            Each shape is simply a row of four dots, with each dot being either{" "}
            <strong>UP</strong> or <strong>DOWN</strong>.
          </p>
          <CardsGrid>
            {cardsArr.map((card, i) => (
              <ShapeCard
                {...card}
                key={i}
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
