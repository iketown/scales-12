import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";
import { Container, Button, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";
import Waypoint from "react-waypoint";

import { getPreviousAndNextLessons } from "../utils/chapterIndex";
import { finishPage } from "../actions/userScoreActions";
import { signInUserAnon } from "../actions/authActions.jsx";
import { openModal } from "../components/uiElements/modals/modalActions.jsx";
import { twelveScales } from "../images";
import NavBar2 from "./NavBar2";
import PaperBG from "../images/paperBG.jpg";
import QuizHistory from "../components/QuizHistory";

class Layout extends Component {
  state = {
    isSignedIn: false,
    user: {},
    nextUrl: "",
    notes: "hello"
  };
  componentDidMount() {
    const { myUrl, auth } = this.props;
    const signedIn = auth.isLoaded && !auth.isEmpty && !auth.isAnonymous;
    const urlsToTriggerInterrupt = [
      "/the_shapes",
      "/keys_line",
      "/places_1",
      "/scales_1"
    ];
    const showInterrupt = !signedIn && urlsToTriggerInterrupt.includes(myUrl);
    if (showInterrupt) this.props.openModal("SignUpInterrupt");
  }

  handleSignInAnon = () => {
    this.props.signInUserAnon();
  };
  handleWaypointEnter = () => {};
  handleNextClicked = () => {
    const { myUrl } = this.props;
    const { chapter, slug } = getPreviousAndNextLessons(myUrl).thisLesson;
    const finishedPageObject = { pageUrl: myUrl, chapter, slug };
    const untracked = this.props.auth.isEmpty && this.props.auth.isLoaded;
    if (untracked) {
      this.props.dispatch(signInUserAnon(finishedPageObject));
    } else {
      this.props.dispatch(finishPage(finishedPageObject));
    }
  };
  handlePrevClicked = () => {};

  BottomNavButtons = ({ myUrl }) => {
    const indexes = getPreviousAndNextLessons(myUrl);
    const { nextButtonDisabled } = this.props;
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
            primary={!nextButtonDisabled}
            basic={nextButtonDisabled}
            onClick={this.handleNextClicked}
            disabled={nextButtonDisabled}
          >
            <Icon name="arrow right" />
            {indexes.nextLesson.title}
          </Button>
        )}
      </NavDiv>
    );
  };

  render() {
    const { children, myUrl, hideNav, quizId } = this.props;
    return (
      <div>
        <div
          style={{
            backgroundImage: `radial-gradient(white, #ffffffc7, #ffffffc7, #ffffff00), url(${PaperBG})`,
            height: "100vh",
            position: "fixed",
            top: "0",
            width: "100vw",
            zIndex: "-1000"
          }}
        />
        <NavBar2 />
        <Container style={{ marginTop: "4rem" }}>
          {/* <Button onClick={this.props.>go 2 latest</Button>
          <p>profile is loaded: {profileIsReady ? "yep" : "nope"}</p> */}
          {children}
          <br />
          {!hideNav && <this.BottomNavButtons myUrl={myUrl} />}
          <Waypoint onEnter={this.handleWaypointEnter} />
          <br />
          <br />
          <Image src={twelveScales} centered size="small" />
          {quizId && <QuizHistory quizId={quizId} />}
          <br />
          <br />
        </Container>
      </div>
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
    state.firebase.profile.isLoaded && !state.firebase.profile.isEmpty,
  myReduxUrl: state.router.location.pathname,
  form: state.form
});
const actions = { openModal, signInUserAnon };

export default withRouter(
  withFirebase(
    connect(
      mapStateToProps,
      actions
    )(Layout)
  )
);
