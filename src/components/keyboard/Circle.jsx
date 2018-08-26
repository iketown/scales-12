import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const iconNames = {
  outline: { color: "", text: "circle outline" },
  red: { color: "red", text: "close" },
  green: { color: "green", text: "circle" },
  starter: { color: "orange", text: "arrow alternate circle right outline" }
};
export default ({ circleType, scale }) => {
  return (
    <Icon
      name={iconNames[circleType].text}
      style={{ fontSize: `${3 * scale}rem` }}
      color={iconNames[circleType].color}
    />
  );
};
