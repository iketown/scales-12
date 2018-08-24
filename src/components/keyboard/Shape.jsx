import React from "react";
import styled from "styled-components";
import carPic from "../../images/carPic.svg";
import truckPic from "../../images/truckPic.svg";
import wagonPic from "../../images/wagonPic.svg";

const ShapeDiv = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 39px;
  transform: scale(1.2);
  opacity: 0.5;
`;

export default () => {
  return (
    <ShapeDiv>
      <img src={wagonPic} alt="" />
    </ShapeDiv>
  );
};
