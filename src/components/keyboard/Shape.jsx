import React from "react";
import styled from "styled-components";
import carPic from "../../images/carPic.svg";
import truckPic from "../../images/truckPic.svg";
import wagonPic from "../../images/wagonPic.svg";
import linePic from "../../images/linePic.svg";

const ShapeDiv = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 39px;
  transform: scale(1.2);
  opacity: 0.4;
  z-index: -1;
`;
const FlippedShapeDiv = styled.div`
  position: absolute;
  bottom: -6rem;
  left: 28px;
  transform: scale(1.1);
  opacity: 0.4;
  z-index: -1;
`;

const StyledImg = styled.img`
  transform: ${({ flipIt }) => (flipIt ? "rotateX(180deg)" : null)};
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
    <FlippedShapeDiv>
      <StyledImg flipIt src={shapeMap[noteName.slice(0, -1)]} alt="" />
    </FlippedShapeDiv>
  ) : (
    <ShapeDiv>
      <StyledImg src={shapeMap[noteName.slice(0, -1)]} alt="" />
    </ShapeDiv>
  );
};
