import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button, Icon, Popup } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../layout/Layout.jsx";
import { scaleShapes2 } from "../components/keyboard/keyboardShapes";
import { CarDots, TruckDots, LineDots, WagonDots } from "../images";
import Dotboard8 from "../components/dotboard/Dotboard8.jsx";

export const DotCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  grid-gap: 10px;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #b7b7b7;
  margin: 1.5rem;
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default class Page2 extends Component {
  state = {
    split: false,
    shapesSelected: [],
    colorAll: true,
    slideIndex: 0
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  increment = () => {
    this.setState({ slideIndex: this.state.slideIndex + 1 });
  };
  decrement = () => {
    this.setState({ slideIndex: this.state.slideIndex - 1 });
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
          <Header.Content>A Better Way</Header.Content>
          <Header.Subheader>to learn Major scales</Header.Subheader>
        </Header>

        <p>
          If we look at each scale as a series of <strong>UP</strong> notes and
          <strong> DOWN </strong>
          notes, then the job of memorizing all of them gets a little easier.
        </p>
        <p>
          To simplify even further, we'll first{" "}
          <Button
            onClick={() => {
              this.toggleSplit();
            }}
            primary={!this.state.split}
            basic={this.state.split}
            disabled={this.state.split}
          >
            split
          </Button>{" "}
          each scale in half.
        </p>

        <p>Now we have 24 small 'shapes' of four dots each.</p>
        <p>It is still a lot of information, but we're getting closer.</p>

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
          The good news is that each of those 24 shapes is one of these four
          possibilities (sometimes upside-down):
        </p>

        <ButtonRow>
          {shapesArr.map((shape, i) => (
            <Button
              onClick={() => this.toggleShapeSelected(shape.name)}
              active={this.state.shapesSelected.includes(shape.name)}
            >
              <div>{`shape ${i + 1}`}</div>
              <img src={shape.image} alt={`${shape.name} shape`} width={60} />
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
      </Layout>
    );
  }
}

const shapesArr = [
  { name: "line", image: LineDots },
  { name: "car", image: CarDots },
  { name: "truck", image: TruckDots },
  { name: "wagon", image: WagonDots }
];
