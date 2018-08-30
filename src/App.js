import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import IntroPage from "./pages/IntroPage.jsx";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/intro" exact component={IntroPage} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Switch>
      </Router>
    );
  }
}

export default App;
