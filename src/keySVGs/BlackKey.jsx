import React from "react";
import styled from "styled-components";

const blackKeyOffsets = {
  D: "-32px",
  E: "-13px",
  G: "-35px",
  A: "-24px",
  B: "-14px"
};

const BlackKey = ({ keyName }) => {
  const BlackKeyDiv = styled.div`
    position: absolute;
    top: 0;
    left: ${blackKeyOffsets[keyName]};
  `;

  return (
    <BlackKeyDiv>
      <svg
        width="46"
        height="338"
        viewBox="0 0 46 338"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Flat" fill="none" fillRule="evenodd">
          <path
            d="M0.5,0.5 L0.5,328 C0.5,333.246705 4.75329488,337.5 10,337.5 L36,337.5 C41.2467051,337.5 45.5,333.246705 45.5,328 L45.5,0.5 L0.5,0.5 Z"
            id={keyName}
            stroke="#000"
            fill="#000"
          />
        </g>
      </svg>
    </BlackKeyDiv>
  );
};

export const displayFlat = keyName => {
  if (keyName === "F") return null;
  if (keyName === "C") return null;

  return <BlackKey keyName={keyName} />;
  // keyboard never ends with a black key
  // each black key 'rides' on its natural key for positioning
};
