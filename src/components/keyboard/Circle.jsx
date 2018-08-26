import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const iconNames = {
  outline: { color: "", text: "circle outline" },
  red: { color: "red", text: "close" },
  green: { color: "green", text: "circle" },
  starter: { color: "orange", text: "arrow alternate circle right outline" },
  selectedNoHints: { color: "blue", text: "dot circle" }
};
const Circle = ({ circleType, scale }) => {
  return (
    <Icon
      name={iconNames[circleType].text}
      style={{ fontSize: `${3 * scale}rem`, zIndex: 25 }}
      color={iconNames[circleType].color}
    />
  );
};

export default Circle;
