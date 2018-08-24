import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Keyboard from "./components/keyboard/Keyboard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Keyboard
          bottomKey="C1"
          topKey="E2"
          keysToLabel={["C2", "G1"]}
          keyboardId="myId"
        />
      </div>
    );
  }
}

export default App;
