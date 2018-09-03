import React, { Component, Fragment } from "react";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
import { Header, Card, Image, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import posed from "react-pose";
import {
  fullScales,
  edgeKeys,
  scaleShapes,
  scaleShapes2
} from "../components/keyboard/keyboardShapes";
import { PageTurner, FadeMe } from "../components/uiElements/index";
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
import Dotboard8 from "../components/dotboard/Dotboard8.jsx";
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
const ButtonSlider = posed.div({
  out: { x: "5rem", opacity: 0, disabled: true },
  in: { x: "0rem", opacity: 1, disabled: false, delay: 500 }
});
const AnimatedScale = posed.div({
  in: { x: "0rem", opacity: 1 },
  out: { x: "5rem", opacity: 0 }
});
const ScaleGridItem = styled(AnimatedScale)`
  // padding: 5px;
  // margin: 5px;
`;

const AnimatedGrid = posed.div({ in: { staggerChildren: 70 }, out: {} });
const ScaleGrid = styled(AnimatedGrid)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 169px);
  background: lightblue;
  justify-items: center;
  padding: 1rem;
`;
const ShapeButtonDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: space-between;
`;

export default class Page2 extends Component {
  state = {
    currentCardIndex: 0,
    shapeSelected: "all",
    fadeKeys: false,
    showKeyboards: false,
    pageTurnerIndex: 0,
    split: false
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
  toggleFadeKeys = () => {
    this.setState({ fadeKeys: !this.state.fadeKeys });
  };
  handlePageTurnerAdvance = () => {
    this.setState({ pageTurnerIndex: this.state.pageTurnerIndex + 1 });
  };
  handlePageTurnerGoBack = () => {
    this.setState({ pageTurnerIndex: this.state.pageTurnerIndex - 1 });
  };
  toggleSplit = () => {
    this.setState({ split: !this.state.split });
  };
  render() {
    const { currentCardIndex, fadeKeys, showKeyboards, split } = this.state;
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
        />
        <p>
          We could describe that as{" "}
          <strong>UP • down • down • UP • down • down • down • UP</strong>
        </p>
      </div>
    );

    const frame3 = (
      <div done={false}>
        <p>
          If we look at each scale as a series of <strong>UP</strong> notes and
          <strong> DOWN </strong>
          notes, then it starts getting a litte easier to remember.
        </p>
        <p>
          It's still a lot of information though. Let's break it down further.
        </p>
        <div>
          first, we'll{" "}
          <Button
            onClick={this.toggleSplit}
            primary={!this.state.split}
            basic={this.state.split}
          >
            split
          </Button>{" "}
          each scale in half.
        </div>
      </div>
    );
    return (
      <Layout>
        <Header as="h2">
          <Header.Content>A Better Way</Header.Content>
          <Header.Subheader>to learn Major scales</Header.Subheader>
        </Header>

        <PageTurner
          showIndex={this.state.pageTurnerIndex}
          advance={this.handlePageTurnerAdvance}
          goBack={this.handlePageTurnerGoBack}
        >
          {frame1}
          {frame3}
        </PageTurner>
        <FadeMe show={this.state.pageTurnerIndex > 0}>
          <DotCardsGrid>
            {Object.entries(scaleShapes2).map(scaleShape => (
              <Dotboard8
                bottomShape={scaleShape[1].bottom}
                topShape={scaleShape[1].top}
                shapeToColor={this.state.shapeSelected}
                root={scaleShape[0]}
                split={split}
              />
            ))}
          </DotCardsGrid>
        </FadeMe>
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
