import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";
import Page5 from "./pages/Page5.jsx";
import Page6 from "./pages/Page6";
import AnimatedGrid from "./components/AnimatedGrid";
import IntroPage from "./pages/IntroPage.jsx";
import SimpleSlider from "./pages/slickTest.jsx";
import ShapesQuiz1 from "./pages/ShapesQuiz1";
import ShapesQuiz2 from "./pages/ShapesQuiz2";

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
          <Route path="/page5" component={Page5} />
          <Route path="/page6" component={Page6} />
          <Route path="/shapesQuiz1" component={ShapesQuiz1} />
          <Route path="/shapesQuiz2" component={ShapesQuiz2} />
          <Route path="/gridTest" component={AnimatedGrid} />
          <Route path="/slicktest" component={SimpleSlider} />
        </Switch>
      </Router>
    );
  }
}

export default App;
