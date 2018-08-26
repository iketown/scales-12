import React, { Component } from "react";
import Sound from "react-sound";
import fingerCymbal from "./fingercymbal.mp3";
class Click extends Component {
  render() {
    return <Sound url={fingerCymbal} playStatus={Sound.status.PLAYING} />;
  }
}

export default Click;
