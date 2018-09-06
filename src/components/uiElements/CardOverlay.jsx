import React from "react";
import styled from "styled-components";

const OverlayDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${p => (p.shape === "x" ? "#ff000029" : "#8bc34a26")};
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  & h1.x {
        opacity: .5;
        font-size: 8rem;
        color: red;
    }
    & h1.check {
        opacity: .5;
        font-size: 8rem;
        color: green;
    }
  }
`;

export default ({ shape }) => {
  return (
    <OverlayDiv shape={shape}>
      {shape === "x" && <h1 className="x">✘</h1>}
      {shape === "check" && <h1 className="check">✔︎</h1>}
    </OverlayDiv>
  );
};
