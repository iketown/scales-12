import React, { Component } from "react";
import styled from "styled-components";
import WhiteKey from "../keySVGs/WhiteKey.jsx";
import { keyObject, keyList } from "../keySVGs/keyboardUtils";

const KeyboardDiv = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 600px;
`;

export default class Keyboard extends Component {
  state = {
    keysToShow: [],
    secretNumber: 42
  };
  componentDidMount() {
    const { bottomKey, topKey } = this.props;
    this.setState({ keysToShow: keyList(bottomKey, topKey) });
  }
  render() {
    const { bottomKey, topKey, keysToLabel } = this.props;
    return (
      <KeyboardDiv>
        {this.state.keysToShow.map(key => (
          <WhiteKey
            key={key}
            keyName={keyObject[key].shape}
            hideFlat={key === bottomKey}
            showNoteName={keysToLabel && keysToLabel.includes(key)}
          />
        ))}
      </KeyboardDiv>
    );
  }
}
