import React, { Component } from "react";
import { paths, blackKeyOffsets } from "../../keySVGs/keyboardUtils";
import { delayBetweenQuestions } from "../../utils/generalConfig";
import styled, { keyframes } from "styled-components";
import posed from "react-pose";

import Circle from "./Circle.jsx";
import NumberCircle from "./NumberCircle.jsx";
import ShapeBackground from "./ShapeBackground";

const Keydiv = styled.div`
  display: relative;
`;
const Svg = styled.svg`
  :hover path {
    fill: lightgrey;
  }
`;
const CircleDiv = styled.div`
  position: absolute;
  bottom: ${({ keyboardScale }) => 4 * keyboardScale}rem;
  width: 100%;
  text-align: center;

  color: ${p => p.theme[p.circleType]};
  transition: all 0.5s;
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

class DumbKey extends Component {
  render() {
    const {
      noteShape,
      noteName,
      circleType,
      showLabel,
      showShapeBackground,
      keyboardScale,
      fadeKeys,
      numberOfScale
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
          width={keyIsBlack ? 46 * keyboardScale : 77 * keyboardScale}
          height={keyIsBlack ? 338 * keyboardScale : 502 * keyboardScale}
          viewBox={keyIsBlack ? "0 0 46 338" : "0 0 77 502"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={paths[noteShape]}
            stroke="#000"
            id={noteName}
            fill={keyIsBlack ? "#EEEEEECC" : "#FFFFFFCC"}
            style={fadeKeys ? { opacity: 0 } : { opacity: 1 }}
          />
        </Svg>
        {circleType && (
          <CircleDiv
            black={keyIsBlack}
            keyboardScale={keyboardScale}
            circleType={circleType}
          >
            <NumberCircle
              circleType={circleType}
              keyboardScale={keyboardScale}
              key={noteName}
              numberOfScale={numberOfScale}
            />
          </CircleDiv>
        )}
        {showLabel && (
          <LabelDiv keyIsBlack={keyIsBlack} keyboardScale={keyboardScale}>
            <span>{noteName.slice(0, -1)}</span>
          </LabelDiv>
        )}
        {showShapeBackground &&
          showShapeBackground.includes(noteName) && (
            <ShapeBackground
              noteName={noteName}
              keyboardScale={keyboardScale}
            />
          )}
      </Keydiv>
    );
    return KeyJSX;
  }
}
export default DumbKey;
