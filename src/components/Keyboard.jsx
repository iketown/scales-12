import React, { Component } from "react";
import styled from "styled-components";
import WhiteKey from "../keySVGs/WhiteKey.jsx";
const KeyboardDiv = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 600px;
`;

const keyArray = [
  "C1",
  "D1",
  "E1",
  "F1",
  "G1",
  "A1",
  "B1",
  "C2",
  "D2",
  "E2",
  "F2",
  "G2",
  "A2",
  "B2"
];

const keyObject = {
  C1: { shape: "C" },
  D1: { shape: "D" },
  E1: { shape: "E" },
  F1: { shape: "F" },
  G1: { shape: "G" },
  A1: { shape: "A" },
  B1: { shape: "B" },
  C2: { shape: "C" },
  D2: { shape: "D" },
  E2: { shape: "E" },
  F2: { shape: "F" },
  G2: { shape: "G" },
  A2: { shape: "A" },
  B2: { shape: "B" }
};

const keyList = (bottomKey, topKey) => {
  let bottomIndex = keyArray.findIndex(key => key === bottomKey);
  let topIndex = keyArray.findIndex(key => key === topKey);
  if (bottomIndex >= topIndex) {
    [bottomIndex, topIndex] = [topIndex, bottomIndex];
    console.log("Key ranges were entered backwards");
  }
  const list = keyArray.filter((key, i) => i >= bottomIndex && i <= topIndex);
  return list;
};

export default class Keyboard extends Component {
  state = {
    keysToShow: []
  };
  componentDidMount() {
    const { bottomKey, topKey } = this.props;
    this.setState({ keysToShow: keyList(bottomKey, topKey) });
  }
  render() {
    return (
      <KeyboardDiv>
        {this.state.keysToShow.map(key => (
          <WhiteKey keyName={keyObject[key].shape} />
        ))}
      </KeyboardDiv>
    );
  }
}
