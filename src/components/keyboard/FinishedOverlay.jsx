import React from "react";
import styled from "styled-components";
import { Icon, Button } from "semantic-ui-react";
import Ding from "./sounds/Ding.jsx";
import Buzzer from "./sounds/Buzzer";
const OverlayDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #ffffffc4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default ({ correct, doOver }) => {
  return (
    <OverlayDiv>
      <Icon
        onDoubleClick={doOver}
        name={correct ? "check circle" : "frown outline"}
        size="massive"
        color={correct ? "green" : "red"}
        style={{ cursor: "pointer" }}
      />
      {correct && <Ding />}

      {!correct && (
        <Button onClick={doOver} style={{ margin: "2rem" }} primary>
          Try Again
          <Buzzer />
        </Button>
      )}
    </OverlayDiv>
  );
};
