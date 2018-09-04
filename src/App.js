import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";
import AnimatedGrid from "./components/AnimatedGrid";
import IntroPage from "./pages/IntroPage.jsx";
import SimpleSlider from "./pages/slickTest.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/intro" exact component={IntroPage} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
          <Route path="/gridTest" component={AnimatedGrid} />
          <Route path="/slicktest" component={SimpleSlider} />
        </Switch>
      </Router>
    );
  }
}

export default App;
