import React, { Component } from "react";
import Sound from "react-sound";
import LittleDing from "./LittleDing.mp3";

window.soundManager.setup({ debugMode: false });

class LittleDingSound extends Component {
  render() {
    return <Sound url={LittleDing} playStatus={Sound.status.PLAYING} />;
  }
}

export default LittleDingSound;
