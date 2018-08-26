import React, { Component } from "react";
import Sound from "react-sound";
import buzzer from "./buzzer.mp3";

class Buzzer extends Component {
  render() {
    return <Sound url={buzzer} playStatus={Sound.status.PLAYING} />;
  }
}

export default Buzzer;
