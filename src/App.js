import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import ScrollToTop from "./components/uiElements/ScrollToTop.jsx";
import SignUp from "./pages/User/SignUp.jsx";
import User from "./User.jsx";
import Auth from "./pages/User/Auth.jsx";
import { lessonsArr } from "./utils/chapterIndex";
import FireTest from "./pages/FireTest.jsx";
import UserDashboard from "./pages/User/UserDashboard";
import ModalManager from "./components/uiElements/modals/ModalManager.jsx";
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <ScrollToTop>
          <ModalManager />
          <Switch>
            <Route exact path="/dashboard" component={UserDashboard} />
            {lessonsArr.map(lesson => (
              <Route
                key={lesson.slug}
                path={`/${lesson.slug}`}
                exact
                component={lesson.component}
              />
            ))}
            <Redirect exact path="/" to="/intro_1" />
            <Route exact path="/auth" component={Auth} />
            <Route path="/firetest" component={FireTest} />
            <Route path="/user" component={User} />
            <Router path="/signup" component={SignUp} />
            <Router path="/privacy-policy" component={Auth} />
            <Router path="/signup" component={Auth} />
          </Switch>
        </ScrollToTop>
      </ConnectedRouter>
    );
  }
}

export default App;
