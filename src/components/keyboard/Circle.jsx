import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { iconNames } from "../../keySVGs/keyboardUtils";

class Circle extends Component {
  render() {
    const { circleType, keyboardScale } = this.props;

    return (
      <div>
        <Icon
          name={iconNames[circleType].text}
          style={{ fontSize: `${3 * keyboardScale}rem`, zIndex: 25 }}
          color={iconNames[circleType].color}
        />
      </div>
    );
  }
}

export default Circle;
