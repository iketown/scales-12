import React, { Component, Fragment } from "react";
import { paths, keyObject, blackKeyOffsets } from "../../keySVGs/keyboardUtils";
import styled from "styled-components";
import posed from "react-pose";

import Circle from "./Circle.jsx";
import Shape from "./Shape";

const AnimatedDot = posed.div({
  show: { y: "0rem", opacity: 1, delay: 2000 },
  hide: { y: "3rem", opacity: 0 }
});
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

class Key extends Component {
  state = {
    showDot: false
  };
  componentDidMount() {
    this.setState({ showDot: true });
  }
  render() {
    const {
      keyboardId,
      noteShape,
      noteName,
      hide,
      clickHandler,
      circleType,
      showShape,
      scale,
      showLabel,
      toggleCircle
    } = this.props;
    const { showDot } = this.state;
    const keyIsBlack = noteShape === "flat";
    const BlackKeyDiv = styled.div`
      position: absolute;
      top: 0;
      left: ${blackKeyOffsets[noteName] * scale}px;
    `;

    const KeyJSX = (
      <div>
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
          <CircleDiv
            onMouseDown={clickHandler}
            black={keyIsBlack}
            scale={scale}
          >
            <Circle circleType={circleType} scale={scale} />
          </CircleDiv>
        )}
        {showShape && <Shape noteName={noteName} />}
        {showLabel && (
          <LabelDiv>
            <h3>{noteName.slice(0, -1)}</h3>
          </LabelDiv>
        )}
      </div>
    );
    if (!keyIsBlack) {
      return KeyJSX;
    } else {
      if (noteName === "Fb" || noteName === "Cb" || hide) {
        return null;
      }
      return <BlackKeyDiv>{KeyJSX}</BlackKeyDiv>;
    }
  }
}
export default Key;
