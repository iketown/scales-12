import React, { Component } from "react";
import { Header, Card, Image, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import Carousel from "nuka-carousel";
import Layout from "../layout/Layout.jsx";
import {
  fullScales,
  scaleShapes2
} from "../components/keyboard/keyboardShapes";
import { FadeMe } from "../components/uiElements/index";
import { carDots, truckDots, lineDots, wagonDots } from "../images";
import Dotboard8 from "../components/dotboard/Dotboard8.jsx";
import KeyboardDisplayOnly from "../components/keyboard/KeyboardDisplayOnly";

const CardFader = posed.div({
  active: { opacity: 1, y: "0%" },
  disabled: { opacity: 0.05, y: "10%" },
  done: { opacity: 0.7, y: "3%" }
});
const PoseItem = posed.div({
  before: { opacity: 0, x: "5rem" },
  enter: { opacity: 1, x: "0rem", delay: 200 },
  exit: { opacity: 0, x: "-5rem" }
});
const DotCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  grid-gap: 10px;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #b7b7b7;
`;

const AnimatedGrid = posed.div({ in: { staggerChildren: 70 }, out: {} });

export default class Page2 extends Component {
  state = {
    currentCardIndex: 0,
    fadeKeys: false,
    showKeyboards: false,
    index: 0,
    split: false,
    shapesSelected: [],
    colorAll: true
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  increment = () => {
    this.setState({ index: this.state.index + 1 });
  };
  decrement = () => {
    this.setState({ index: this.state.index - 1 });
  };
  setShapeSelected = shapeSelected => {
    this.setState({ shapeSelected });
  };
  toggleShapeSelected = shape => {
    const { shapesSelected } = this.state;
    let newShapesSelected;
    if (shapesSelected.includes(shape)) {
      // remove it
      newShapesSelected = [...shapesSelected.filter(s => s !== shape)];
    } else {
      // add it
      newShapesSelected = [...shapesSelected, shape];
    }
    this.setState({ shapesSelected: newShapesSelected });
  };
  toggleFadeKeys = () => {
    this.setState({ fadeKeys: !this.state.fadeKeys });
  };

  toggleSplit = () => {
    this.setState({ split: !this.state.split });
  };

  render() {
    const {
      currentCardIndex,
      fadeKeys,
      slideIndex,
      split,
      colorAll
    } = this.state;

    const frame1 = (
      <div>
        <p>There are 12 Major Scales, and each scale has 8 notes.</p>
        <p>
          Instead of thinking about note names, sharps and flats, let's just
          imagine that each Major Scale is simply made of
          <strong> UP </strong>
          notes and
          <strong> DOWN </strong>
          notes.
        </p>
        <p>Look at this one, called B-Flat Major.</p>
        <KeyboardDisplayOnly
          bottomKey={"F1"}
          topKey={"B2"}
          keysToLabel={""}
          notesToShow={fullScales["Bb"]}
          keyboardScale={0.4}
          scaleShapes={{ bottom: "car", top: "wagon" }}
          shapeToShow={this.state.shapeSelected}
          showCircles={true}
          fadeKeys={fadeKeys}
          displayText={"Bb major Scale"}
          colorAll={true}
        />
        <p>
          We could describe that as{" "}
          <strong>UP • down • down • UP • down • down • down • UP</strong>
        </p>
      </div>
    );

    const frame3 = (
      <div>
        <PoseGroup preEnterPose="before">
          {this.state.index === 0 && (
            <PoseItem key={0}>
              <p>
                If we look at each scale as a series of <strong>UP</strong>{" "}
                notes and
                <strong> DOWN </strong>
                notes, then it starts getting a litte simpler.
              </p>
              <p>
                But there are still <strong>12</strong> scales to memorize:
              </p>
              To simplify this task, we'll first{" "}
              <Button
                onClick={() => {
                  this.toggleSplit();
                  this.increment();
                }}
                primary={!this.state.split}
                basic={this.state.split}
              >
                split
              </Button>{" "}
              each scale in half.
            </PoseItem>
          )}
          {this.state.index === 1 && (
            <PoseItem key={1}>
              <p>
                Now we have 24 "groups" of 4 dots each. The good news is that
                there are really only FOUR shapes to learn!
              </p>
              <p>click these buttons to see where they are.</p>
              <div>
                <Button.Group>
                  {shapesArr.map(shape => (
                    <Button
                      onClick={() => this.toggleShapeSelected(shape.name)}
                      active={this.state.shapesSelected.includes(shape.name)}
                    >
                      <img
                        src={shape.image}
                        alt={`${shape.name} shape`}
                        width={60}
                      />
                    </Button>
                  ))}
                </Button.Group>
              </div>
            </PoseItem>
          )}
        </PoseGroup>

        <DotCardsGrid>
          {Object.entries(scaleShapes2).map(scaleShape => (
            <Dotboard8
              bottomShape={scaleShape[1].bottom}
              topShape={scaleShape[1].top}
              shapesSelected={this.state.shapesSelected}
              root={scaleShape[0]}
              split={split}
              colorAll={!this.state.shapesSelected.length}
            />
          ))}
        </DotCardsGrid>
      </div>
    );
    return (
      <Layout>
        <Header as="h2">
          <Header.Content>A Better Way</Header.Content>
          <Header.Subheader>to learn Major scales</Header.Subheader>
          <Header.Subheader>page {this.state.slickIndex}</Header.Subheader>
        </Header>
        <Carousel>
          {frame1}
          {frame3}
        </Carousel>

        {/* <div>
          <p>
            So <strong>12 scales</strong> x <strong>8 notes each</strong> ={" "}
            <strong>96 pieces of information</strong>. hmm. Too hard.
          </p>

          <ShapeButtonDiv>
            {[
              { img: lineDots, text: "line" },
              { img: carDots, text: "car" },
              { img: truckDots, text: "truck" },
              { img: wagonDots, text: "wagon" }
            ].map(shape => (
              <div key={shape.text}>
                <Button onClick={() => this.setShapeSelected(shape.text)}>
                  <img src={shape.img} alt="" width={"100px"} />
                </Button>
              </div>
            ))}
            <Button onClick={() => this.setState({ shapeSelected: "all" })}>
              Show All
            </Button>
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
        </div> */}
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

const shapesArr = [
  { name: "line", image: lineDots },
  { name: "car", image: carDots },
  { name: "truck", image: truckDots },
  { name: "wagon", image: wagonDots }
];
