import React, { Component, createContext } from "react";
import { Link } from "react-router-dom";
import { Button, Popup, Icon, Header, Image, Item } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../layout/Layout.jsx";
import { CheckIcon } from "../components/uiElements/index";
import { DotCardsGrid } from "./ABetterWay";
import { scaleShapes2 } from "../components/keyboard/keyboardShapes";
import { NextButton } from "../components/uiElements/index";
import Dotboard8 from "../components/dotboard/Dotboard8.jsx";
import { Line, Car, Truck, Wagon, KeystoDots } from "../images/index";
import { LessonContext } from "../layout/Layout.jsx";
export default class Page3 extends Component {
  state = {
    hide2ndShape: false,
    split: false,
    shapesSelected: [],
    colorAll: true,
    sectionsCircled: []
  };
  setShapeSelected = shapeSelected => {
    this.setState({ shapeSelected });
  };

  toggleSectionsCircled = (section1, section2) => {
    const adding = !this.state.sectionsCircled.includes(section1);
    const { sectionsCircled } = this.state;
    let newSectionsCircles;
    if (adding) {
      // add sections
      newSectionsCircles = [...sectionsCircled, section1, section2];
    } else {
      // remove sections
      newSectionsCircles = sectionsCircled.filter(
        sect => sect !== section1 && sect !== section2
      );
    }
    this.setState({ sectionsCircled: [...newSectionsCircles] });
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
  toggleSplit = () => {
    this.setState({ split: !this.state.split });
  };
  render() {
    const { split } = this.state;
    const shapeButtonsClicked = this.state.shapesSelected.length === 4;

    return (
      <Layout>
        <Header as="h2">
          <Header.Content>All The Shapes</Header.Content>
          <Header.Subheader>and where they go</Header.Subheader>
        </Header>

        <Item>
          <Item.Image size="medium" src={KeystoDots} />
          <Item.Header as="h4">
            Here is how we'll break down all 12 scales:
          </Item.Header>
          <Item.Description>
            <p>
              <CheckIcon />
              Each Major Scale is a series of <strong>eight keys</strong>, with
              its own unique pattern of <strong>BLACK</strong> and{" "}
              <strong>WHITE</strong> keys.
            </p>
            <p>
              <CheckIcon />
              We'll visualize each scale as a series of{" "}
              <strong>eight dots</strong>, with its own unique pattern of{" "}
              <strong>UP</strong> and <strong>DOWN</strong> dots.
            </p>

            <p>
              <CheckIcon />
              Each dot represents a note in the scale.
            </p>
            <p>
              <CheckIcon />
              <strong>UP</strong> dots are <strong>black</strong> keys, and
              <strong> DOWN</strong> dots are <strong>white</strong> keys.
            </p>
            <p>
              <CheckIcon />
              We'll{" "}
              <Button
                onClick={() => {
                  this.toggleSplit();
                }}
                primary={!this.state.split}
                basic={this.state.split}
              >
                split
              </Button>{" "}
              each scale in half, so two shapes make up each scale.
            </p>
          </Item.Description>
        </Item>
        <p />

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

        <p>
          The amazing part of the 12scales system is after you split everything
          up like this, there are only
          <strong> FOUR</strong> shapes to learn:{" "}
        </p>
        <p>
          The{" "}
          <a
            style={{ cursor: "pointer" }}
            onClick={() => this.toggleShapeSelected("line")}
          >
            <strong>Line</strong>
          </a>
          , The{" "}
          <a
            style={{ cursor: "pointer" }}
            onClick={() => this.toggleShapeSelected("car")}
          >
            <strong>Car</strong>
          </a>
          , The{" "}
          <a
            style={{ cursor: "pointer" }}
            onClick={() => this.toggleShapeSelected("truck")}
          >
            <strong>Truck</strong>
          </a>
          , and The{" "}
          <a
            style={{ cursor: "pointer" }}
            onClick={() => this.toggleShapeSelected("wagon")}
          >
            <strong>Wagon</strong>
          </a>
          .
        </p>
        <p>click on each to see where they fit in the above graph:</p>
        <ButtonRow>
          {shapesArr.map((shape, i) => (
            <Button
              onClick={() => this.toggleShapeSelected(shape.name)}
              active={this.state.shapesSelected.includes(shape.name)}
              primary={!this.state.shapesSelected.includes(shape.name)}
            >
              <div>{shape.name}</div>
              <img
                src={shape.image}
                alt={`${shape.name} shape`}
                width={60}
                style={{
                  background: "#ffffffa1",
                  padding: "3px",
                  borderRadius: "3px"
                }}
              />
            </Button>
          ))}
        </ButtonRow>
        <hr />
        <Header as="h2">
          <Header.Content>It gets easier</Header.Content>
          <Header.Subheader>the farther you go</Header.Subheader>
        </Header>
        <p>
          <br />
          We've already cut the complexity down by a lot, by only needing to
          learn
          <strong> two shapes </strong>
          for each scale, instead of
          <strong> eight notes</strong>.
        </p>
        <p>
          <em>but it gets easier than that.</em>
        </p>
        <p>
          Look again at our scale chart below. see how the{" "}
          <strong>2nd shape of the 'C' scale</strong> matches the
          <strong> first shape of the 'G' scale</strong>?
          <Button
            size="mini"
            compact
            onClick={() => this.toggleSectionsCircled("Ctop", "Gbottom")}
            basic
            primary
          >
            {!this.state.sectionsCircled.includes("Ctop")
              ? "show me"
              : "got it"}
          </Button>
        </p>
        <p>
          ...and the 2nd shape of the 'G' scale matches the 1st shape of the 'D'
          scale?
          <Button
            size="mini"
            compact
            onClick={() => this.toggleSectionsCircled("Gtop", "Dbottom")}
            basic
            primary
          >
            {!this.state.sectionsCircled.includes("Gtop")
              ? "show me"
              : "got it"}
          </Button>
        </p>
        <p>
          ...and the 2nd shape of the 'D' scale matches the 1st shape of the 'A'
          scale ? . . . and on and on and on.
        </p>

        <DotCardsGrid>
          {Object.entries(scaleShapes2).map((scaleShape, i) => (
            <Dotboard8
              bottomShape={scaleShape[1].bottom}
              topShape={scaleShape[1].top}
              shapesSelected={["car", "truck", "wagon", "line"]}
              root={scaleShape[0]}
              split={!this.state.hide2ndShape && true}
              colorAll={true}
              circleTop={this.state.sectionsCircled.includes(
                `${scaleShape[0]}top`
              )}
              circleBottom={this.state.sectionsCircled.includes(
                `${scaleShape[0]}bottom`
              )}
              hide2ndShape={this.state.hide2ndShape}
            />
          ))}
        </DotCardsGrid>
        <p>
          we'll talk about how these scales connect later, but when we start
          playing them, you'll find you don't even have to learn the 2nd shape.
        </p>
        <p>
          you really only have to learn the{" "}
          <Button
            primary={!this.state.hide2ndShape}
            onClick={() => this.setState({ hide2ndShape: true })}
          >
            FIRST SHAPE
          </Button>
        </p>
        <p>
          ...and it gets even easier than that, but before we get ahead of
          ourselves, let's dig into those four shapes.
        </p>
        <NextButton active to="/Page4" />
        <MyConsumerStuff props={this.props} />
      </Layout>
    );
  }
}

const shapesArr = [
  { name: "line", image: Line },
  { name: "car", image: Car },
  { name: "truck", image: Truck },
  { name: "wagon", image: Wagon }
];

const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  align-items: center;
`;

const MyConsumerStuff = ({ props }) => (
  <LessonContext.Consumer>
    {val => {
      const myUrl = props.match.path;
      const indexes = val.getPreviousAndNextLessons(myUrl);
      return (
        <div>
          <p>my url is {myUrl}</p>
          <p>my lesson index is {indexes.myIndex}</p>
        </div>
      );
    }}
  </LessonContext.Consumer>
);
