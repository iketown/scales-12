import React from "react";

import HoverFloat from "./HoverFloat";
import CardOverlay from "./CardOverlay";
import ShapeCard from "./ShapeCard";
import PageTurner from "./PageTurner.jsx";
import NextButton from "./NextButton";
import CircleButton from "./CircleButton";
import { FadeMe } from "./Fades";
import { Icon } from "semantic-ui-react";
import { iconNames } from "../../keySVGs/keyboardUtils";
const StarterIcon = () => (
  <Icon name={iconNames.starter.text} color={iconNames.starter.color} />
);
const CheckIcon = () => <Icon name="check circle" color="grey" />;

export {
  PageTurner,
  HoverFloat,
  CardOverlay,
  ShapeCard,
  FadeMe,
  NextButton,
  CircleButton,
  StarterIcon,
  CheckIcon
};
