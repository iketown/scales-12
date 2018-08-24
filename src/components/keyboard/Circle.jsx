import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const iconNames = {
  outline: "circle outline",
  red: "close",
  green: "circle"
};
export default ({ circleType }) => {
  return (
    <div>
      <Icon name={iconNames[circleType]} size="big" color={circleType} />
    </div>
  );
};
