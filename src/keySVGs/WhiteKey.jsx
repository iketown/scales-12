import React from "react";
import { paths, translations } from "./keyPaths";
import styled from "styled-components";

import { displayFlat } from "./BlackKey.jsx";

const WhiteKeyDiv = styled.div`
  position: relative;
`;

export default ({ keyName, hideFlat }) => (
  <WhiteKeyDiv>
    <svg
      width="77"
      height="502"
      viewBox="0 0 77 502"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={paths[keyName]} stroke="#000" id="C" fill="#FFF" />
    </svg>
    {!hideFlat && displayFlat(keyName)}
  </WhiteKeyDiv>
);
