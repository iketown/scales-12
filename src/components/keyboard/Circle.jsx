import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

const iconNames = {
  outline: { color: "", text: "circle outline" },
  wrong: { color: "red", text: "close" },
  correct: { color: "green", text: "circle" },
  starter: { color: "orange", text: "arrow alternate circle right outline" },
  selected: { color: "blue", text: "dot circle" }
};

class Circle extends Component {
  render() {
    const { circleType, scale } = this.props;

    return (
      <div>
        <Icon
          name={iconNames[circleType].text}
          style={{ fontSize: `${3 * scale}rem`, zIndex: 25 }}
          color={iconNames[circleType].color}
        />
      </div>
    );
  }
}

export default Circle;
