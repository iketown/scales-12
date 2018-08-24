import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { blackKeyOffsets } from "../../keySVGs/keyboardUtils";

const Svg = styled.svg`
  &:hover path {
    fill: #505050;
  }
`;

const BlackKey = ({ noteName, keyboardId, handleClick, hide }) => {
  if (noteName === "Fb" || noteName === "Cb" || hide) {
    return null;
  }
  const BlackKeyDiv = styled.div`
    position: absolute;
    top: 0;
    left: ${blackKeyOffsets[noteName]};
  `;

  return (
    <BlackKeyDiv>
      <Svg
        width="46"
        height="338"
        viewBox="0 0 46 338"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <g id="Flat" fill="none" fillRule="evenodd">
          <path
            d="M0.5,0.5 L0.5,328 C0.5,333.246705 4.75329488,337.5 10,337.5 L36,337.5 C41.2467051,337.5 45.5,333.246705 45.5,328 L45.5,0.5 L0.5,0.5 Z"
            id={noteName}
            stroke="#000"
            fill="#000"
          />
        </g>
      </Svg>
    </BlackKeyDiv>
  );
};

const mapState = state => ({
  foo: "bar"
});

export default connect(mapState)(BlackKey);
