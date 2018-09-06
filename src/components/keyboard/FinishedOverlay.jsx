import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import { Icon, Button } from "semantic-ui-react";

const OverlayDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
  background: #ffffffc4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;
class FinishedOverlay extends Component {
  state = {
    showMe: false
  };
  componentDidMount() {
    this.setState({ showMe: true });
  }
  render() {
    const { correct, doOver } = this.props;
    return (
      <OverlayDiv>
        <Icon
          onDoubleClick={doOver}
          name={correct ? "check circle" : "frown outline"}
          size="massive"
          color={correct ? "green" : "red"}
          style={{ cursor: "pointer" }}
        />

        {!correct && (
          <Button onClick={doOver} style={{ margin: "2rem" }} primary>
            Try Again
          </Button>
        )}
      </OverlayDiv>
    );
  }
}

export default FinishedOverlay;
