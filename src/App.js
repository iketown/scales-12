import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/uiElements/ScrollToTop.jsx";
import SignUp from "./pages/User/SignUp.jsx";
import User from "./User.jsx";
import Auth from "./pages/User/Auth.jsx";
import { lessonsArr } from "./utils/chapterIndex";
import FireTest from "./pages/FireTest.jsx";
import MyLatestPage from "./pages/MyLatestPage.jsx";
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
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/my-latest-page" component={MyLatestPage} />
            <Route path="/firetest" component={FireTest} />
            <Route path="/user" component={User} />
            <Router path="/signup" component={SignUp} />
            <Router path="/privacy-policy" component={Auth} />
            <Router path="/signup" component={Auth} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
