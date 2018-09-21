import React from "react";
import styled from "styled-components";
import {
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8
} from "../images/numberDots.jsx";
import { Image } from "semantic-ui-react";
export const paths = {
  C:
    "M1,1 L42.3175303,1 L42.3175303,341.199627 L76,341.199627 L76,491 C76,496.522847 71.5228475,501 66,501 L11,501 C5.4771525,501 1,496.522847 1,491 L1,1 Z",
  D:
    "M16.6137061,1 L62.0779466,1 L62.0779466,341.199627 L76,341.199627 L76,491 C76,496.522847 71.5228475,501 66,501 L11,501 C5.4771525,501 1,496.522847 1,491 L1,341.199627 L16.6137061,341.199627 L16.6137061,1 Z",
  E:
    "M35.0624073,1 L76,1 L76,341.199627 L76,491 C76,496.522847 71.5228475,501 66,501 L11,501 C5.4771525,501 1,496.522847 1,491 L1,341.199627 L35.0624073,341.199627 L35.0624073,1 Z",
  F:
    "M39.8759437,1 L1,1 L1,341.199627 L1,491 C1,496.522847 5.4771525,501 11,501 L66,501 C71.5228475,501 76,496.522847 76,491 L76,341.199627 L39.8759437,341.199627 L39.8759437,1 Z",
  G:
    "M12.5989732,1 L50.8066799,1 L50.8066799,341.199627 L76,341.199627 L76,491 C76,496.522847 71.5228475,501 66,501 L11,501 C5.4771525,501 1,496.522847 1,491 L1,341.199627 L12.5989732,341.199627 L12.5989732,1 Z",
  A:
    "M24.047334,1 L60.3469806,1 L60.3469806,341.199627 L76,341.199627 L76,491 C76,496.522847 71.5228475,501 66,501 L11,501 C5.4771525,501 1,496.522847 1,491 L1,341.199627 L24.047334,341.199627 L24.047334,1 Z",
  B:
    "M35.0624073,1 L76,1 L76,341.199627 L76,491 C76,496.522847 71.5228475,501 66,501 L11,501 C5.4771525,501 1,496.522847 1,491 L1,341.199627 L35.0624073,341.199627 L35.0624073,1 Z",
  flat:
    "M0.5,0.5 L0.5,328 C0.5,333.246705 4.75329488,337.5 10,337.5 L36,337.5 C41.2467051,337.5 45.5,333.246705 45.5,328 L45.5,0.5 L0.5,0.5 Z"
};

export const blackKeyOffsets = {
  Db1: -33,
  Eb1: -14,
  Gb1: -36,
  Ab1: -25,
  Bb1: -15,
  Db2: -33,
  Eb2: -14,
  Gb2: -36,
  Ab2: -25,
  Bb2: -15
};

export const keyGroups = [
  ["C1"],
  ["D1", "Db1"],
  ["E1", "Eb1"],
  ["F1"],
  ["G1", "Gb1"],
  ["A1", "Ab1"],
  ["B1", "Bb1"],
  ["C2"],
  ["D2", "Db2"],
  ["E2", "Eb2"],
  ["F2"],
  ["G2", "Gb2"],
  ["A2", "Ab2"],
  ["B2", "Bb2"]
];

export const keyArray = [
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

export const keyObject = {
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

export const keyList = (bottomKey, topKey) => {
  let bottomIndex = keyArray.findIndex(key => key === bottomKey);
  let topIndex = keyArray.findIndex(key => key === topKey);
  if (bottomIndex >= topIndex) {
    [bottomIndex, topIndex] = [topIndex, bottomIndex];
    console.log("Key ranges were entered backwards");
  }
  const list = keyGroups.filter((key, i) => i >= bottomIndex && i <= topIndex);
  return list;
};

export const noteConverter = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#"
};

export const iconNames = {
  outline: { color: "", name: "circle outline" },
  wrong: { color: "red", name: "close" },
  correct: { color: "green", name: "circle" },
  starter: { color: "pink", name: "arrow alternate circle right" },
  selected: { color: "blue", name: "dot circle" },
  yellow: { color: "orange", name: "dot circle" },
  red: { color: "red", name: "dot circle" },
  grey: { color: "grey", name: "dot circle" },
  green: { color: "green", name: "dot circle" },
  purple: { color: "purple", name: "dot circle" },
  pink: { color: "pink", name: "dot circle" },
  skip: { color: "orange", name: "times circle outline", loading: true }
};

export const noteNumbers = ["①", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"];
export const noteNumbers2 = ["❶", "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽"];
export const noteNumbers3 = [
  <Image src={num1} />,
  <Image src={num1} />,
  <Image src={num2} />,
  <Image src={num3} />,
  <Image src={num4} />,
  <Image src={num5} />,
  <Image src={num6} />,
  <Image src={num7} />,
  <Image src={num8} />
];
const NNspan = styled.span`
  color: #57a5ff;
  font-size: 1.5rem;
  font-family: initial;
  display: inline-block;
  width: 25px;
  ${p => (p.scale ? `transform: scale(${p.scale});` : "")};
`;
export const NN = ({ num, scale }) => (
  <NNspan scale={scale}>{noteNumbers3[num]}</NNspan>
);
