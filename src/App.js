import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/uiElements/ScrollToTop.jsx";
import FireTest from "./components/firebaseTester.jsx";
import "./App.css";
// import IntroPage from "./pages/IntroPage.jsx";
// import Page1 from "./pages/Page1.jsx";
// import ABetterWay from "./pages/ABetterWay.jsx";
// import Page3 from "./pages/Page3.jsx";
// import Page4 from "./pages/Page4.jsx";
// import Page5 from "./pages/Page5.jsx";
// import Page6 from "./pages/Page6";
// import Page7 from "./pages/Page7";
// import Page8 from "./pages/Page8";
// import ShapesQuiz1 from "./pages/ShapesQuiz1";
// import ShapesQuiz2 from "./pages/ShapesQuiz2";
import { lessonsArr } from "./utils/chapterIndex";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            {lessonsArr.map(lesson => (
              <Route
                key={lesson.url}
                path={lesson.url}
                exact
                component={lesson.component}
              />
            ))}
            <Route path="/firetest" component={FireTest} />
          </Switch>
          {/* <Route path="/" exact component={IntroPage} />
            <Route path="/intro" exact component={IntroPage} />
            <Route path="/page1" component={Page1} />
            <Route path="/a-better-way" component={ABetterWay} />
            <Route path="/page3" component={Page3} />
            <Route path="/page4" component={Page4} />
            <Route path="/page5" component={Page5} />
            <Route path="/page6" component={Page6} />
            <Route path="/page7" component={Page7} />
            <Route path="/page8" component={Page8} />
            <Route path="/shapesQuiz1" component={ShapesQuiz1} />
            <Route path="/shapesQuiz2" component={ShapesQuiz2} /> */}
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
