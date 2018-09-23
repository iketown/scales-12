import React, { Component } from "react";
import posed from "react-pose";

class FaceUnderlay extends Component {
  render() {
    const style = {
      position: "absolute",
      top: "60%",
      width: "100%",
      height: "100%",
      fontSize: "10rem"
    };
    const FadeIn = posed.div({
      vis: {
        opacity: 1,
        transition: { duration: 2000 }
      },
      invis: {
        opacity: 0
      }
    });
    const show = this.props.show;
    return (
      <FadeIn pose={show ? "vis" : "invis"}>
        <div style={style}>🤨</div>
      </FadeIn>
    );
  }
}

export default FaceUnderlay;
