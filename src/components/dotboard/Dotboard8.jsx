import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import NumberCircle from "../keyboard/NumberCircle.jsx";

const Box = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 4px #b1b1b161;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  padding: 3px 7px;
  background: white;
`;
const DotboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${p => (p.split ? "8" : "9")}, 1.5rem);
  grid-template-rows: repeat(2, 1.5rem);
  grid-template-areas: "u1 u2 u3 u4 u5 u6 u7 u8" "d1 d2 d3 d4 d5 d6 d7 d8";
  justify-items: center;
`;
const DotboardGridHalf = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1.5rem);
  grid-template-rows: repeat(2, 1.5rem);
  grid-template-areas: "u1 u2 u3 u4" "d1 d2 d3 d4";
  justify-items: center;
  align-items: center;
  margin-left: ${p => (p.split ? "1.5rem" : "0")};
  transition: 0.5s all;
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
`;
const Scooter = posed.div({
  before: {},
  enter: {},
  exit: {}
});
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

const Dotboard8 = ({ bottomShape, topShape, split, shapeToColor, root }) => {
  return (
    <Box>
      {[bottomShape, topShape].map((shape, index) => (
        <DotboardGridHalf split={index === 1 ? split : ""}>
          {shapesObj[shape].map((letter, i) => {
            const offset = index === 0 ? 1 : 5;
            return (
              <GridItem
                area={`${letter}${i + 1}`}
                color={
                  shape.toLowerCase().includes(shapeToColor)
                    ? colors[shape]
                    : shapeToColor === "all"
                      ? "#000"
                      : colors.faded
                }
              >
                <NumberCircle numberOfScale={i + offset} />
              </GridItem>
            );
          })}
        </DotboardGridHalf>
      ))}
      {/* {shapesObj[topShape].map((letter, i) => (
          <GridItem
            area={`${letter}${i + 5}`}
            color={
              shapeToColor === topShape
                ? colors[topShape]
                : shapeToColor === "all"
                  ? "#000"
                  : colors.faded
            }
          >
            <NumberCircle numberOfScale={i + 5} />
          </GridItem>
        ))} */}
      <ScaleName>{root}</ScaleName>
    </Box>
  );
};

export default Dotboard8;
