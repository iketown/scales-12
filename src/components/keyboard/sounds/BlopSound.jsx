import React, { Component } from "react";
import Sound from "react-sound";
import Blop from "./Blop.mp3";

window.soundManager.setup({ debugMode: false });

class BlopSound extends Component {
  render() {
    return <Sound url={Blop} playStatus={Sound.status.PLAYING} />;
  }
}

export default BlopSound;
