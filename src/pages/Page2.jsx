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
import { FadeMe, PageTurner } from "../components/uiElements/customDisplays";
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
const AnimatedScale = posed.div({
  in: { x: "0rem", opacity: 1 },
  out: { x: "5rem", opacity: 0 }
});
const ScaleGridItem = styled(AnimatedScale)`
  padding: 5px;
  margin: 5px;
`;

const AnimatedGrid = posed.div({ in: { staggerChildren: 70 }, out: {} });
const ScaleGrid = styled(AnimatedGrid)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 169px);
  // grid-gap: 1rem;
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
    pageTurnerIndex: 0
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
  render() {
    const { currentCardIndex, fadeKeys, showKeyboards } = this.state;
    const frame1 = (
      <div>
        <p>
          So as we discussed, there are 12 Major Scales. Each scale has 8 notes.
        </p>
        <p>
          Lets just imagine the keyboard as a series of <strong>up</strong>{" "}
          (black) and <strong>down</strong> (white) notes.
        </p>
        <p>
          So each Major Scale is simply a unique pattern of <strong>UPs</strong>{" "}
          and
          <strong>DOWNs</strong>.
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
    return (
      <Layout>
        <Header as="h2">
          <Header.Content>A Better Way</Header.Content>
          <Header.Subheader>to learn Major scales</Header.Subheader>
        </Header>
        <PageTurner
          showIndex={this.state.pageTurnerIndex}
          advance={this.handlePageTurnerAdvance}
        >
          <div>page 1</div>
          {frame1}
        </PageTurner>
        <div>
          <p>
            All the Major Scales have their own shape like that; Their own
            series of ups and downs.
          </p>
          <FadeMe pose={this.state.showKeyboards ? "out" : "in"}>
            <Button
              onClick={() => this.setState({ showKeyboards: true })}
              primary={!this.state.showKeyboards}
            >
              Show All 12 Scales
            </Button>
          </FadeMe>
          <ScaleGrid pose={showKeyboards ? "in" : "out"}>
            {Object.keys(fullScales).map(s => {
              return (
                <ScaleGridItem key={s}>
                  <KeyboardDisplayOnly
                    bottomKey={edgeKeys[s].bottom}
                    topKey={edgeKeys[s].top}
                    keysToLabel={""}
                    notesToShow={fullScales[s]}
                    keyboardScale={0.2}
                    scaleShapes={scaleShapes[s]}
                    shapeToShow={this.state.shapeSelected}
                    showCircles={true}
                    fadeKeys={fadeKeys}
                    displayText={fullScales[s][0].slice(0, -1)}
                    displayTitleCircle
                  />
                </ScaleGridItem>
              );
            })}
          </ScaleGrid>
          <p>
            You <em>could</em> print those out, and with a few days of practice,
            memorize all 12.
          </p>
          <p>
            ... but there is an easier way. First, let's{" "}
            <Button onClick={this.toggleFadeKeys}>isolate the shapes</Button>
          </p>
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
