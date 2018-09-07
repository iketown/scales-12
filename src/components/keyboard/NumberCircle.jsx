import React from "react";
import { CircleButton } from "../uiElements/index";
const NumberCircle = ({
  number = 8,
  keyboardScale,
  numberOfScale,
  theme,
  noteName,
  labelType
}) => {
  return (
    <div style={{ transform: `scale(${keyboardScale * 2})` }}>
      {labelType === undefined ? numberObj[numberOfScale] : null}
      {labelType === "letters" ? (
        <CircleButton>{noteName.slice(0, -1)}</CircleButton>
      ) : null}
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
