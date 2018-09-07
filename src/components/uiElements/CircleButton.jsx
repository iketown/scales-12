import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  border: 1px white solid;
  position: relative;
  display: inline-flex;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: darkblue;
  > span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -43%);
    color: white;
    font-weight: 400;
    font-family: serif;
    color: lightgoldenrodyellow;
  }
`;
export default ({ children }) => {
  return (
    <Circle>
      <span>{children}</span>
    </Circle>
  );
};
