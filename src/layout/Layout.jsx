import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withFirebase, isLoaded } from "react-redux-firebase";
import firebase from "firebase/app";
import { Container, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

import { getPreviousAndNextLessons } from "../utils/chapterIndex";
import { finishPage } from "../actions/userScoreActions";
import { goToLatestLesson, signInUserAnon } from "../actions/authActions.jsx";
import { openModal } from "../components/uiElements/modals/modalActions.jsx";
import NavBar2 from "./NavBar2";
import SignUpInterrupt from "../components/uiElements/modals/SignUpInterrupt.jsx";
class Layout extends Component {
  state = {
    isSignedIn: false,
    user: {}
  };
  componentDidMount() {
    const { myUrl, auth } = this.props;
    const signedIn = auth.isLoaded && !auth.isEmpty && !auth.isAnonymous;
    const urlsToTriggerInterrupt = ["/the_shapes"];
    const showInterrupt = !signedIn && urlsToTriggerInterrupt.includes(myUrl);
    if (showInterrupt) this.props.openModal("SignUpInterrupt");
  }
  componentDidUpdate(prevProps) {
    if (this.props.profileIsReady !== prevProps.profileIsReady) {
      this.getLatestUrl();
    }
  }
  getLatestUrl = () => {
    if (this.props.profileIsReady) {
      const latestSlug =
        this.props.profile.finishedLessons &&
        this.props.profile.finishedLessons.sort(
          (a, b) => b.timestamp.seconds - a.timestamp.seconds
        )[0].slug;
      const nextUrl = getPreviousAndNextLessons(`/${latestSlug}`).nextLesson
        .url;
      this.props.history.push(nextUrl);
    }
  };
  handleSignInAnon = () => {
    this.props.signInUserAnon();
  };
  handleNextClicked = () => {
    const { myUrl, firebase } = this.props;
    const { chapter, slug } = getPreviousAndNextLessons(myUrl).thisLesson;
    const finishedPageObject = { pageUrl: myUrl, chapter, slug };
    const untracked = this.props.auth.isEmpty && this.props.auth.isLoaded;
    if (untracked) {
      this.props.dispatch(signInUserAnon());
    } else {
      this.props.dispatch(finishPage(finishedPageObject));
    }
  };
  handlePrevClicked = () => {};

  BottomNavButtons = ({ myUrl }) => {
    const indexes = getPreviousAndNextLessons(myUrl);
    return (
      <NavDiv>
        {indexes.prevLesson && (
          <Button
            as={Link}
            to={indexes.prevLesson.url}
            icon
            labelPosition="left"
          >
            <Icon name="arrow left" />
            {indexes.prevLesson.title}
          </Button>
        )}
        {indexes.nextLesson && (
          <Button
            as={Link}
            to={indexes.nextLesson.url}
            icon
            labelPosition="right"
            primary
            onClick={this.handleNextClicked}
          >
            <Icon name="arrow right" />
            {indexes.nextLesson.title}
          </Button>
        )}
      </NavDiv>
    );
  };

  render() {
    const {
      children,
      myUrl,
      hideNav,
      auth,
      profile,
      profileIsReady
    } = this.props;
    return (
      <Fragment>
        <NavBar2 />
        <Container style={{ marginTop: "4rem" }}>
          <Button onClick={this.props.goToLatestLesson}>go 2 latest</Button>
          <p>profile is loaded: {profileIsReady ? "yep" : "nope"}</p>
          {children}
          <br />
          {!hideNav && <this.BottomNavButtons myUrl={myUrl} />}
          <br />
          <br />
        </Container>
      </Fragment>
    );
  }
}

const NavDiv = styled.div`
  // border: 1px red solid;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  profileIsReady:
    state.firebase.profile.isLoaded && !state.firebase.profile.isEmpty
});
const actions = { openModal, goToLatestLesson, signInUserAnon };

export default withRouter(
  withFirebase(
    connect(
      mapStateToProps,
      actions
    )(Layout)
  )
);
