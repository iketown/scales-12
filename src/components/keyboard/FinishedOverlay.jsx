import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
const OverlayDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #ffffffc4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default () => {
  return (
    <OverlayDiv>
      <Icon name="check circle" size="massive" color="green" />
    </OverlayDiv>
  );
};
