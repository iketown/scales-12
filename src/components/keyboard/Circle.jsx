import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { iconNames } from "../../keySVGs/keyboardUtils";

class Circle extends Component {
  render() {
    const { circleType, keyboardScale } = this.props;

    return (
      <div>
        <Icon
          {...iconNames[circleType]}
          style={{ fontSize: `${3 * keyboardScale}rem`, zIndex: 25 }}
        />
      </div>
    );
  }
}

export default Circle;
