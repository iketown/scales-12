import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../layout/Layout.jsx";
import { DotCardsGrid } from "./Page2.jsx";
import { scaleShapes2 } from "../components/keyboard/keyboardShapes";
import { Button, Popup, Icon, Header } from "semantic-ui-react";
import { NextButton } from "../components/uiElements/index";
import Dotboard8 from "../components/dotboard/Dotboard8.jsx";
import { Line, Car, Truck, Wagon } from "../images/index";

export default class Page3 extends Component {
  state = {
    hide2ndShape: false,
    split: false,
    shapesSelected: [],
    colorAll: true
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
        <p>Below, you can see all 12 scales in their raw form.</p>
        <p>
          The first thing we do is{" "}
          <Button
            onClick={() => {
              this.toggleSplit();
            }}
            primary={!this.state.split}
            basic={this.state.split}
          >
            split
          </Button>{" "}
          each scale in half.
        </p>

        <p>Now we have 24 small 'shapes' of four dots each.</p>
        <p>It is still a lot of information.</p>

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
          The good news is there are really only FOUR shapes to learn: The{" "}
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
          <Popup
            on={shapeButtonsClicked ? "" : "hover"}
            trigger={
              <Button
                as={Link}
                to={shapeButtonsClicked ? `/page3` : "/page2"}
                icon
                labelPosition="right"
                primary={shapeButtonsClicked}
              >
                <Icon name="arrow right" />
                Next
              </Button>
            }
            content={"Click all four shape buttons to continue"}
            disabled
          />
        </ButtonRow>
        <p>
          We've already cut the complexity down by a lot, by simply memorizing
          <strong> two shapes </strong>
          for each scale, instead of
          <strong> eight notes</strong>.
        </p>
        <p>
          <em>but it gets easier than that.</em>
        </p>
        <p>
          Look again at this chart. see how the{" "}
          <strong>2nd shape of the 'C' scale</strong> matches the
          <strong> first shape of the 'G' scale</strong>?
        </p>
        <p>
          ...and the 2nd shape of the 'G' scale matches the 1st shape of the 'D'
          scale?
        </p>
        <p>
          ...and the 2nd shape of the 'D' scale matches the 1st shape of the 'A'
          scale ? . . . and on and on and on.
        </p>

        <DotCardsGrid>
          {Object.entries(scaleShapes2).map(scaleShape => (
            <Dotboard8
              bottomShape={scaleShape[1].bottom}
              topShape={scaleShape[1].top}
              shapesSelected={["car", "truck", "wagon", "line"]}
              root={scaleShape[0]}
              split={!this.state.hide2ndShape && true}
              colorAll={true}
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
            disabled={this.state.hide2ndShape}
            onClick={() => this.setState({ hide2ndShape: true })}
          >
            FIRST SHAPE
          </Button>
        </p>
        <p>
          ...and it gets even easier than that, but lets not get ahead of
          ourselves.
        </p>
        <p>let's introduce the shapes.</p>
        <NextButton active={this.state.hide2ndShape} to="/Page4" />
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
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
