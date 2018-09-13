import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import { Container, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

import { getPreviousAndNextLessons } from "../utils/chapterIndex";
import { finishPage } from "../actions/userScoreActions";
import { openModal } from "../components/uiElements/modals/modalActions.jsx";
import NavBar2 from "./NavBar2";
import SignUpInterrupt from "../components/uiElements/modals/SignUpInterrupt.jsx";
class Layout extends Component {
  state = {
    isSignedIn: false,
    user: {}
  };
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, photoURL, email } = user;
        this.setState({
          isSignedIn: true,
          user: { uid, displayName, photoURL, email }
        });
      }
    });
  }

  handleNextClicked = () => {
    const { myUrl, firebase } = this.props;
    const { chapter, slug } = getPreviousAndNextLessons(myUrl).thisLesson;
    const finishedPageObject = { pageUrl: myUrl, chapter, slug };
    this.props.dispatch(finishPage(finishedPageObject));
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
    const { children, myUrl, hideNav, auth } = this.props;
    const signedIn = auth.isLoaded && !auth.isEmpty && !auth.isAnonymous;

    return (
      <Fragment>
        <NavBar2 />
        <Container style={{ marginTop: "4rem" }}>
          <SignUpInterrupt />
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
  auth: state.firebase.auth
});
const actions = { openModal };

export default withFirebase(
  connect(
    mapStateToProps,
    actions
  )(Layout)
);
