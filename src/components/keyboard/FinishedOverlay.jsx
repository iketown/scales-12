import React from "react";
import styled from "styled-components";
import { Icon, Button } from "semantic-ui-react";
const OverlayDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #ffffffc4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default ({correct, doOver}) => {
  return (
    <OverlayDiv>
      <Icon onClick={doOver} name={correct ? "check circle" : 'frown outline'} size="massive" color={correct ? "green" : 'red'} />
        {!correct && <Button onClick={doOver} style={{margin: '2rem'}}  primary>Try Again</Button>}
    </OverlayDiv>
  );
};
