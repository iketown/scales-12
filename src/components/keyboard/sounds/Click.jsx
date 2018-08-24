import React, { Component } from "react";
import Sound from "react-sound";
import KeyClick from "./KeyClick.mp3";
class Click extends Component {
  render() {
    return <Sound url={KeyClick} playStatus={Sound.status.PLAYING} />;
  }
}

export default Click;
