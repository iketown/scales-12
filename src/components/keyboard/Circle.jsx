import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const iconNames = {
  outline: { color: "", text: "circle outline" },
  red: { color: "red", text: "close" },
  green: { color: "green", text: "circle" },
  starter: { color: "orange", text: "arrow alternate circle right outline" }
};
export default ({ circleType }) => {
  return (
    <div>
      <Icon
        name={iconNames[circleType].text}
        style={{ fontSize: "3rem" }}
        color={iconNames[circleType].color}
      />
    </div>
  );
};
