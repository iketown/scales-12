import React, { Component, Fragment } from "react";
import { Container, Dropdown, Image, Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { withFirestore } from "react-redux-firebase";
import { chapters, lessonsArr } from "../utils/chapterIndex";
import { openModal } from "../components/uiElements/modals/modalActions.jsx";
import { signInUserAnon } from "../actions/authActions.jsx";
import firebase from "../utils/firebase";
import { twelveScales } from "../images";

const lessonFinishedStyle = { color: "#dadada" };
const lessonFutureStyle = {};
const lessonCurrentStyle = { color: "#6f3030", fontWeight: "bolder" };

const ChapterTitle = props => {
  const { displayText, lessons, profile, currentUrl } = props;
  let chapterIsFinished = false;
  let chapterIsCurrent = false;
  if (profile && profile.finishedLessons) {
    const theseFinishedLessons = lessons.filter(les =>
      profile.finishedLessons.find(
        profileLesson => profileLesson.slug === les.slug
      )
    );
    chapterIsFinished = theseFinishedLessons.length === lessons.length;
    chapterIsCurrent = lessons.find(les => les.url === currentUrl);
  } else {
    // chapterIsCurrent = displayText === "Introduction";
  }
  return (
    <Dropdown.Item>
      <span
        style={
          chapterIsCurrent
            ? lessonCurrentStyle
            : chapterIsFinished
              ? lessonFinishedStyle
              : lessonFutureStyle
        }
      >
        <Icon
          className={
            chapterIsCurrent
              ? "arrow right"
              : chapterIsFinished
                ? "check square outline"
                : "square outline"
          }
        />
        {displayText}
      </span>
      {lessons && (
        <Dropdown.Menu>
          {lessons.map(lesson => {
            const finished =
              profile &&
              profile.finishedLessons &&
              profile.finishedLessons.find(les => les.slug === lesson.slug);
            const current = currentUrl === lesson.url;
            return (
              <Dropdown.Item key={lesson.url} as={Link} to={lesson.url}>
                <span
                  style={
                    current
                      ? lessonCurrentStyle
                      : finished
                        ? lessonFinishedStyle
                        : lessonFutureStyle
                  }
                >
                  {/* {current && <Icon name="arrow right" />} */}
                  <Icon
                    className={
                      current
                        ? "arrow right"
                        : finished
                          ? "check square outline"
                          : "square outline"
                    }
                  />
                  {lesson.title}
                </span>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      )}
    </Dropdown.Item>
  );
};

class NavBar extends Component {
  state = {
    isSignedIn: false,
    user: {}
  };
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };
  handleSignInAnon = () => {
    this.props.signInUserAnon();
  };
  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };
  handleSignOut = () => {
    // this.props.firebase.logout();
    firebase.auth().signOut();
    // this.setState({ isSignedIn: false, user: {} });
  };
  handleNotes = () => {
    const currentUrl = this.props.match.path;
    const { title, slug } = lessonsArr.find(
      lesson => `/${lesson.slug}` === currentUrl
    );
    this.props.openModal("Notes", {
      title,
      slug
    });
  };

  render() {
    const { finishedPages, auth, profile } = this.props;
    const currentUrl = this.props.match.path;
    const authenticated = auth.isLoaded && !auth.isEmpty && !auth.isAnonymous;

    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Image
              size="tiny"
              src={twelveScales}
              style={{ margin: "-9px 1.5em" }}
            />
          </Menu.Item>
          <Dropdown item simple text="Chapters">
            <Dropdown.Menu>
              {Object.keys(chapters).map(key => {
                const lessons = chapters[key];
                return (
                  <ChapterTitle
                    key={key}
                    to={lessons[0] ? lessons[0].url : "/"}
                    displayText={key}
                    disabled={false}
                    lessons={lessons}
                    finishedPages={finishedPages}
                    profile={profile}
                    currentUrl={currentUrl}
                  />
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position="right">
            {authenticated ? (
              <Fragment>
                <Menu.Item onClick={this.handleNotes}>notes</Menu.Item>
                <Menu.Item as={Link} to="/dashboard">
                  {auth.displayName || auth.email}
                </Menu.Item>
                <Menu.Item onClick={this.handleSignOut}>Sign Out</Menu.Item>
              </Fragment>
            ) : (
              <Fragment>
                <Menu.Item onClick={this.handleSignIn}>Sign In</Menu.Item>
                <Menu.Item onClick={this.handleRegister}>
                  Register
                </Menu.Item>{" "}
              </Fragment>
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
const mapStateToProps = state => ({
  finishedPages: state.userScore.finishedPages,
  auth: state.firebase.auth,
  profile: state.firebase.profile
});
const actions = { openModal, signInUserAnon };
export default withRouter(
  withFirestore(
    connect(
      mapStateToProps,
      actions
    )(NavBar)
  )
);
