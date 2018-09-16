import React, { Component } from "react";
import {
  paths,
  blackKeyOffsets,
  noteNumbers
} from "../../keySVGs/keyboardUtils";
import { delayBetweenQuestions } from "../../utils/generalConfig";
import styled, { keyframes } from "styled-components";
import posed from "react-pose";

import Circle from "./Circle.jsx";
import ShapeBackground from "./ShapeBackground";
const jiggle = keyframes`
0% {
  transform: scale(1) rotate(0deg);
}
33% {
  transform: scale(1.005) rotate(.1deg);
}
66% {
  transform: scale(.995) rotate(-.1deg);
}

100% {
  transform: scale(1) rotate(0deg);
}
`;
const Keydiv = styled.div`
  display: relative;
  :hover {
    animation: ${jiggle} 0.4s infinite;
  }
`;
const Svg = styled.svg`
  :hover path {
    ${p => (!p.highlight ? "fill: lightgrey;" : "")};
  }
  & path {
    ${p =>
      p.highlight
        ? "fill: lightgoldenrodyellow;"
        : ""} transition: .1s all cubic-bezier(0.1, 0.79, 1, 1);
  }
`;
const CircleDiv = styled.div`
  position: absolute;
  bottom: ${({ keyboardScale }) => 4 * keyboardScale}rem;
  width: 100%;
  text-align: center;
  color: ${({ black }) => (black ? "white" : "black")};

  transition: all 0.5s;
  :hover {
    transform: scale(1.3);
  }
`;
const NumberDiv = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: ${({ keyboardScale }) => 5 * keyboardScale}rem;
  width: 100%;
  text-align: center;
  color: #57a5ff;
  font-size: 2.2rem;
  transition: all 0.5s;
  & span {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: initial;
  }
  :hover {
    transform: scale(1.3);
  }
`;
const LabelDiv = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 13px;
  ${p => (p.keyIsBlack ? `top: -1.3rem; color: #333;` : `bottom: -1.0rem;`)};
`;
const animatedCircleConfig = {
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.1, delay: delayBetweenQuestions - 500 }
};
const AnimatedCircle = posed.div(animatedCircleConfig);

class Key extends Component {
  render() {
    const {
      noteShape,
      noteName,
      clickHandler,
      circleType,
      number,
      showLabel,
      showCircles,
      showShapeBackground,
      keyboardScale,
      highlight
    } = this.props;
    const keyIsBlack = noteShape === "flat";

    const blackKeyStyles = {
      position: "absolute",
      top: 0,
      left: `${blackKeyOffsets[noteName] * keyboardScale}px`
    };

    const KeyJSX = (
      <Keydiv style={keyIsBlack ? blackKeyStyles : {}}>
        <Svg
          onClick={clickHandler}
          width={keyIsBlack ? 46 * keyboardScale : 77 * keyboardScale}
          height={keyIsBlack ? 338 * keyboardScale : 502 * keyboardScale}
          viewBox={keyIsBlack ? "0 0 46 338" : "0 0 77 502"}
          xmlns="http://www.w3.org/2000/svg"
          highlight={highlight}
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
              onClick={clickHandler}
              black={keyIsBlack}
              keyboardScale={keyboardScale}
            >
              <Circle
                circleType={circleType}
                keyboardScale={keyboardScale}
                key={noteName}
              />
            </CircleDiv>
          </AnimatedCircle>
        )}
        {number && (
          <NumberDiv
            onClick={clickHandler}
            black={keyIsBlack}
            keyboardScale={keyboardScale}
          >
            <span>{noteNumbers[number]}</span>
          </NumberDiv>
        )}
        {showLabel && (
          <LabelDiv keyIsBlack={keyIsBlack} keyboardScale={keyboardScale}>
            <span>{noteName.slice(0, -1)}</span>
          </LabelDiv>
        )}
        {showShapeBackground && (
          <ShapeBackground noteName={noteName} keyboardScale={keyboardScale} />
        )}
      </Keydiv>
    );
    return KeyJSX;
  }
}
export default Key;
