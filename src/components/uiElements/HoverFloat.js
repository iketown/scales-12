import React from "react";
import styled from "styled-components";

const Hovered = styled.div`
  cursor: pointer;
  & .card:hover {
    transition: 0.3s all;
    box-shadow: 2px 2px 9px #00000044;
    transform: scale(1.02);
  }
`;

export default ({ children }) => {
  return <Hovered>{children}</Hovered>;
};
