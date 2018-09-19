import React from "react";
import { CircleButton } from "../uiElements/index";

const NumberCircle = ({
  keyboardScale,
  numberOfScale,
  selected,
  labelType
}) => {
  const selectedStyle = { transform: `scale(2)` };
  const unselectedStyle = {};
  return (
    <div style={selected ? selectedStyle : unselectedStyle}>
      {labelType === undefined ? numberObj[numberOfScale] : null}
    </div>
  );
};

export default NumberCircle;

const numberObj = {
  1: "\u2776",
  2: "\u2777",
  3: "\u2778",
  4: "\u2779",
  5: "\u277A",
  6: "\u277B",
  7: "\u277C",
  8: "\u277D"
};
