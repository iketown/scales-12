import React from "react";
import { CircleButton } from "../uiElements/index";
import { Image } from "semantic-ui-react";
import {
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8
} from "../../images/numberDots.jsx";
const NumberCircle = ({
  keyboardScale,
  numberOfScale,
  selected,
  labelType
}) => {
  const selectedStyle = { width: "18px", transform: "scale(1.5)" };
  const unselectedStyle = { width: "18px" };
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

const numberObj2 = {
  1: <Image size="tiny" src={num1} alt="" />,
  2: <Image size="tiny" src={num2} alt="" />,
  3: <Image size="tiny" src={num3} alt="" />,
  4: <Image size="tiny" src={num4} alt="" />,
  5: <Image size="tiny" src={num5} alt="" />,
  6: <Image size="tiny" src={num6} alt="" />,
  7: <Image size="tiny" src={num7} alt="" />,
  8: <Image size="tiny" src={num8} alt="" />
};
