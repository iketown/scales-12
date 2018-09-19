import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import NumberCircle from "../keyboard/NumberCircle.jsx";
import Synth from "../keyboard/sounds/audiosynth";
import { fullScales } from "../keyboard/keyboardShapes";

const piano = Synth.createInstrument("piano");

const playNote = noteName => {
  let octave = Number(noteName.split("").pop());
  let note = noteConverter[noteName.slice(0, -1)];
  piano.play(note, octave + 2, 2);
};
export const noteConverter = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#"
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 4px #b1b1b161;
  border-radius: 5px;
  // margin: 10px;
  position: relative;
  padding: 3px 7px;
  background: white;
  &:hover {
    // border: 1px red solid;
    box-shadow: 2px 2px 2px #888888;
    cursor: pointer;
  }
`;
const GridHalfPose = posed.div({
  in: { opacity: 1 },
  out: { opacity: 0, width: "0px" }
});
const DotboardGridHalf = styled(GridHalfPose)`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1.5rem);
  grid-template-rows: repeat(2, 1.5rem);
  grid-template-areas: "u1 u2 u3 u4" "d1 d2 d3 d4";
  justify-items: center;
  align-items: center;
  margin-left: ${p => (p.split ? "1.5rem" : "0")};
  border: ${p => (p.box ? "1px grey dotted" : "none")};
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1);
  }
  }
`;
const ScaleName = styled.div`
  text-align: center;
  color: rgb(43, 43, 43);
  position: absolute;
  top: -9px;
  left: -13px;
  border-radius: 50%;
  background: white;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 10px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-10deg);
  opacity: 1;
  z-index: 10;
  box-shadow: 1px 1px 4px #9e9e9e;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.3);
  }
`;
const ListenButton = styled.div`
  text-align: center;
  color: rgb(43, 43, 43);
  position: absolute;
  top: -9px;
  right: -13px;
  border-radius: 50%;
  background: white;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 10px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-10deg);
  opacity: 1;
  z-index: 10;
  box-shadow: 1px 1px 4px #9e9e9e;
`;
const CircleDiv = styled.div`
  border: 2px #9c27b0 dotted;
  position: absolute;
  left: -10%;
  top: -10%;
  width: 120%;
  height: 120%;
  border-radius: 26px;
  transform: rotate(4deg);
  box-shadow: 1px 1px 1px 2px #00000017;
`;
const GridItem = styled.div`
  grid-area: ${p => p.area};
  color: ${p => p.color};
  transition: 0.5s all;
`;
const shapesObj = {
  car: ["d", "u", "u", "d"],
  flipCar: ["u", "d", "d", "u"],
  truck: ["d", "d", "u", "d"],
  flipTruck: ["u", "u", "d", "u"],
  wagon: ["d", "d", "d", "u"],
  flipWagon: ["u", "u", "u", "d"],
  line: ["d", "d", "d", "d"]
};

const colors = {
  car: "#2a8c3c",
  flipCar: "#2a8c3c",
  truck: "#4056A1",
  flipTruck: "#4056A1",
  wagon: "#F13C20",
  flipWagon: "#F13C20",
  line: "#D79922",
  faded: "#cccccc3d"
};
class Dotboard8 extends Component {
  state = {
    numSelected: 0
  };
  componentDidMount() {
    this.myScale = fullScales[this.props.root];
  }
  playHalfScale = index => {
    const bottomHalfBool = index === 0;
    const firstNum = bottomHalfBool ? 1 : 5;
    const lastNum = bottomHalfBool ? 4 : 8;
    // state.numSelected is number of scale, not index. so -1 to get zero-based index
    playNote(this.myScale[firstNum - 1]);
    this.setState({ numSelected: bottomHalfBool ? 1 : 5 });
    const play4 = setInterval(() => {
      if (this.state.numSelected < lastNum) {
        // numSelected - 1 + 1 play the note, then change state
        playNote(this.myScale[this.state.numSelected]);
        this.setState({ numSelected: this.state.numSelected + 1 });
      } else {
        clearInterval(play4);
        this.setState({ numSelected: 0 });
      }
    }, 400);
  };
  playFullScale = () => {
    const firstNum = 1;
    const lastNum = 8;
    playNote(this.myScale[firstNum - 1]);
    this.setState({ numSelected: 1 });

    const play4 = setInterval(() => {
      if (this.state.numSelected < lastNum) {
        // numSelected - 1 + 1 play the note, then change state
        playNote(this.myScale[this.state.numSelected]);
        this.setState({ numSelected: this.state.numSelected + 1 });
      } else {
        clearInterval(play4);
        this.setState({ numSelected: 0 });
      }
    }, 400);
  };
  render() {
    const {
      bottomShape,
      topShape,
      split,
      shapesSelected,
      root,
      colorAll,
      hide2ndShape,
      circleTop,
      circleBottom
    } = this.props;
    const playBottom = () => {
      const bottomNotes = this.myScale.slice(0, 4);
      console.log("play bottom", bottomNotes);
    };
    return (
      <Box>
        {[bottomShape, topShape].map((shape, index) => {
          const topShapeBool = index === 1;
          const bottomShapeBool = index === 0;
          return (
            <DotboardGridHalf
              split={topShapeBool ? split : ""}
              box={split}
              key={index}
              pose={hide2ndShape && topShapeBool ? "out" : "in"}
              onClick={() => this.playHalfScale(index)}
            >
              {shapesObj[shape].map((letter, i) => {
                const offset = bottomShapeBool ? 1 : 5;
                return (
                  <GridItem
                    area={`${letter}${i + 1}`}
                    color={
                      shapesSelected.includes(shape) ||
                      shapesSelected.includes(shape.slice(4).toLowerCase())
                        ? colors[shape]
                        : colorAll
                          ? "#000"
                          : colors.faded
                    }
                  >
                    <NumberCircle
                      numberOfScale={i + offset}
                      selected={this.state.numSelected === i + offset}
                    />
                  </GridItem>
                );
              })}
              {circleTop && topShapeBool && <CircleDiv />}
              {circleBottom && bottomShapeBool && <CircleDiv />}
            </DotboardGridHalf>
          );
        })}

        <ScaleName onClick={this.playFullScale}>{root}</ScaleName>
      </Box>
    );
  }
}

export default Dotboard8;
