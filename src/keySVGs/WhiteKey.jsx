import React, { Component } from "react";
import { paths, keyObject } from "./keyboardUtils";
import styled from "styled-components";

import { displayFlat } from "./BlackKey.jsx";

const WhiteKeyDiv = styled.div`
  position: relative;
  margin: 1px;
`;

const Svg = styled.svg`
  &:hover path {
    fill: lightgrey;
  }
`;

const NoteName = styled.div`
  position: absolute;
  bottom: 1rem;
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
`;

class WhiteKey extends Component {
  state = {
    noteName: "B"
  };
  render() {
    const { keyName, hideFlat, showNoteName } = this.props;
    return (
      <WhiteKeyDiv>
        <Svg
          width="77"
          height="502"
          viewBox="0 0 77 502"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={paths[keyName]} stroke="#000" id="C" fill="none" />
        </Svg>
        {!hideFlat && displayFlat(keyName)}
        {showNoteName && <NoteName>{keyName}</NoteName>}
      </WhiteKeyDiv>
    );
  }
}

export default WhiteKey;
