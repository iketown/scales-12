import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { paths, keyObject, blackKeyOffsets } from "../../keySVGs/keyboardUtils";
import styled from "styled-components";
import { addNoteToList } from "../../actions/keyboardActions";
import BlackKey from "./BlackKey.jsx";
import Circle from "./Circle.jsx";
import Shape from "./Shape";
import { Icon } from "semantic-ui-react";

const Svg = styled.svg`
  &:hover path {
    fill: lightgrey;
  }
`;
const CircleDiv = styled.div`
  position: absolute;
  bottom: 4rem;
  width: 100%;
  text-align: center;
  color: ${({ black }) => (black ? "white" : "black")};
`;

class Key extends Component {
  render() {
    const {
      keyboardId,
      noteShape,
      noteName,
      hide,
      clickHandler,
      circleType,
      showShape
    } = this.props;
    const noteNameNoNumber = noteName.slice(0, -1);
    const keyIsBlack = noteShape === "flat";
    const NoteDisplay = styled.div`
      position: absolute;
      bottom: 1rem;
      text-align: center;
      width: 100%;
      font-size: 1.5rem;
      color: ${keyIsBlack ? "white" : "black"};
    `;
    const BlackKeyDiv = styled.div`
      position: absolute;
      top: 0;
      left: ${blackKeyOffsets[noteName]};
    `;

    const KeyJSX = (
      <div>
        <Svg
          onMouseDown={clickHandler}
          width={keyIsBlack ? "46" : "77"}
          height={keyIsBlack ? "338" : "502"}
          viewBox={keyIsBlack ? "0 0 46 338" : "0 0 77 502"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={paths[noteShape]}
            stroke="#000"
            id={noteName}
            fill={noteShape === "flat" ? "#000" : "none"}
          />
        </Svg>
        {circleType && (
          <CircleDiv onClick={clickHandler} black={keyIsBlack}>
            <Circle circleType={circleType} />
          </CircleDiv>
        )}
        {showShape && <Shape noteName={noteName} />}
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
