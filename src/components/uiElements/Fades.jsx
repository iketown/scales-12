import React from "react";
import posed from "react-pose";

const Fader = posed.div({
  in: { opacity: 1, delay: 400 },
  out: { opacity: 0, delay: 400 }
});
export const FadeMe = ({ children, show }) => (
  <Fader pose={show ? "in" : "out"}>{children}</Fader>
);
