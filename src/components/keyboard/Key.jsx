import React, { Component } from "react";
import { paths, blackKeyOffsets } from "../../keySVGs/keyboardUtils";
import styled from "styled-components";
import posed from "react-pose";

import Circle from "./Circle.jsx";

const Svg = styled.svg`
  :hover path {
    fill: lightgrey;
  }
`;
const CircleDiv = styled.div`
  position: absolute;
  bottom: ${({ scale }) => 4 * scale}rem;
  width: 100%;
  text-align: center;
  color: ${({ black }) => (black ? "white" : "black")};

  transition: all 0.5s;
  :hover {
    transform: scale(1.3);
  }
`;
const LabelDiv = styled.div`
  position: absolute;
  bottom: -1.5rem;
  width: 100%;
  text-align: center;
`;
const animatedCircleConfig = {
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.1, delay: 1500 }
};
const AnimatedCircle = posed.div(animatedCircleConfig);

class Key extends Component {
  render() {
    const {
      noteShape,
      noteName,
      clickHandler,
      circleType,
      scale,
      showLabel,
      showCircles
    } = this.props;
    const keyIsBlack = noteShape === "flat";

    const blackKeyStyles = {
      position: "absolute",
      top: 0,
      left: `${blackKeyOffsets[noteName] * scale}px`
    };

    const KeyJSX = (
      <div style={keyIsBlack ? blackKeyStyles : {}}>
        <Svg
          onMouseDown={clickHandler}
          width={keyIsBlack ? 46 * scale : 77 * scale}
          height={keyIsBlack ? 338 * scale : 502 * scale}
          viewBox={keyIsBlack ? "0 0 46 338" : "0 0 77 502"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={paths[noteShape]}
            stroke="#000"
            id={noteName}
            fill={noteShape === "flat" ? "#000000CC" : "#FFFFFFCC"}
          />
        </Svg>
        {circleType && (
          <AnimatedCircle pose={showCircles ? "in" : "out"}>
            <CircleDiv
              onMouseDown={clickHandler}
              black={keyIsBlack}
              scale={scale}
            >
              <Circle circleType={circleType} scale={scale} key={noteName} />
            </CircleDiv>
          </AnimatedCircle>
        )}
        {showLabel && (
          <LabelDiv>
            <h3>{noteName.slice(0, -1)}</h3>
          </LabelDiv>
        )}
      </div>
    );
    return KeyJSX;
  }
}
export default Key;
