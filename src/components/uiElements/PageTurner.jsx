import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";

const Staggerer = posed.div({});

export default class PageTurner extends Component {
  render({ children, showIndex }) {
    return (
      <PoseGroup>
        <Staggerer>
          {children.map(child => (
            <div style={{ border: "1px solid blue" }}>what</div>
          ))}
        </Staggerer>
      </PoseGroup>
    );
  }
}
s;
