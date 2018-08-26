import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Keyboard from "./components/keyboard/Keyboard";
import Layout from "./layout/Layout.jsx";
import Page1 from "./pages/Page1";
class App extends Component {
  render() {
    return <Page1 />;
  }
}

export default App;
