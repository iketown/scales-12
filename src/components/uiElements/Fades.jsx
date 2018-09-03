import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

const Fader = posed.div({
  in: { opacity: 1, delay: 400 },
  out: { opacity: 0, delay: 400 }
});
export const FadeMe = ({ children, show }) => (
  <Fader pose={show ? "in" : "out"}>{children}</Fader>
);
