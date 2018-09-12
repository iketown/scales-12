import React, { Component, Fragment } from "react";

import { chapters, getPreviousAndNextLessons } from "../utils/chapterIndex";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { openModal } from "../components/uiElements/modals/modalActions.jsx";

const ChapterTitle = props => {
  const { to, displayText, disabled, lessons, finishedPages } = props;
  const finishedLessonLength = finishedPages.filter(
    page => page.chapter === displayText
  ).length;
  const finishedChapter = finishedLessonLength === lessons.length;
  return (
    <Dropdown.Item as={Link} to={to} disabled={disabled}>
      <i className="dropdown icon" />
      <span style={finishedChapter ? { color: "#dadada" } : {}}>
        {displayText}
      </span>
      {lessons && (
        <Dropdown.Menu>
          {lessons.map(lesson => {
            const finished = finishedPages.find(
              page => page.pageUrl === lesson.url
            );
            return (
              <Dropdown.Item key={lesson.url} as={Link} to={lesson.url}>
                <span style={finished ? { color: "#dadada" } : {}}>
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
  handleSignOut = () => {
    this.props.firebase.logout();
    // this.setState({ isSignedIn: false, user: {} });
  };
  render() {
    const { finishedPages, auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;

    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: "1.5em" }}
            />
            12scales
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            Home
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
                  />
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position="right">
            {authenticated ? (
              <Fragment>
                <Menu.Item>{auth.email}</Menu.Item>
                <Menu.Item onClick={this.handleSignOut}>Sign Out</Menu.Item>
              </Fragment>
            ) : (
              <Menu.Item onClick={this.handleSignIn}>Sign In</Menu.Item>
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
const mapStateToProps = state => ({
  finishedPages: state.userScore.finishedPages,
  auth: state.firebase.auth
});
const actions = { openModal };
export default withFirestore(
  connect(
    mapStateToProps,
    actions
  )(NavBar)
);
