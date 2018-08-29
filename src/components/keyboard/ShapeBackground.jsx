import React from "react";
import styled from "styled-components";
import carPic from "../../images/carPic.svg";
import truckPic from "../../images/truckPic.svg";
import wagonPic from "../../images/wagonPic.svg";
import linePic from "../../images/linePic.svg";
import { keyboardScale } from "../../utils/generalConfig";

const ShapeDiv = styled.div`
  position: absolute;
  bottom: ${keyboardScale * 31}px;
  left: ${keyboardScale * 20}px;
  opacity: 1;
  z-index: -1;
`;
const FlippedShapeDiv = styled.div`
  position: absolute;
  bottom: ${keyboardScale * -100}px;
  left: ${keyboardScale * 10}px;
  opacity: 1;
  z-index: -1;
  // border: 2px red solid;
  transform: scaleY(-1);
`;

const StyledImg = styled.img`
  width: ${keyboardScale * 290}px;
`;
const FlipStyledImg = styled.img`
  width: ${keyboardScale * 275}px;
`;

const shapeMap = {
  A: truckPic,
  B: carPic,
  C: linePic,
  D: truckPic,
  E: carPic,
  F: wagonPic,
  G: linePic,
  Db: truckPic,
  Eb: carPic,
  Gb: wagonPic,
  Ab: truckPic,
  Bb: carPic
};

export default ({ noteName }) => {
  const flipIt = noteName.split("").includes("b");

  return flipIt ? (
    <FlippedShapeDiv keyboardScale={keyboardScale}>
      <FlipStyledImg src={shapeMap[noteName.slice(0, -1)]} alt="" />
    </FlippedShapeDiv>
  ) : (
    <ShapeDiv keyboardScale={keyboardScale}>
      <StyledImg flipIt src={shapeMap[noteName.slice(0, -1)]} alt="" />
    </ShapeDiv>
  );
};
