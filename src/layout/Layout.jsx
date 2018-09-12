import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase/app";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Button,
  Icon
} from "semantic-ui-react";
import styled from "styled-components";

import { chapters, getPreviousAndNextLessons } from "../utils/chapterIndex";
import { finishPage } from "../actions/userScoreActions";

class Layout extends Component {
  state = {
    isSignedIn: false,
    user: {}
  };
  componentDidMount() {
    const { finishedPages } = this.props;
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      const { uid, displayName, photoURL, email } = user;
      this.setState({
        isSignedIn: true,
        user: { uid, displayName, photoURL, email }
      });
    });
  }
  componentWillUnmount() {}
  signOut = () => {
    firebase.auth().signOut();
    this.setState({ isSignedIn: false, user: {} });
  };
  handleNextClicked = () => {
    const { myUrl, firebase } = this.props;
    const { chapter } = getPreviousAndNextLessons(myUrl).thisLesson;
    const finishedPageObject = { pageUrl: myUrl, chapter };
    this.props.dispatch(finishPage(finishedPageObject));
    console.log("firebase", firebase);
    // firebase.push("finishedPages", finishedPageObject);
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
    const { children, myUrl, hideNav, finishedPages } = this.props;
    return (
      <Fragment>
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
            <MenuItem to="/sup" text="wuzzup" />
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
              {this.state.isSignedIn ? (
                <Fragment>
                  <Menu.Item>{this.state.user.displayName}</Menu.Item>
                  <Menu.Item onClick={this.signOut}>Sign Out</Menu.Item>
                </Fragment>
              ) : (
                <Menu.Item as={Link} to="/auth">
                  Sign In
                </Menu.Item>
              )}
            </Menu.Menu>
          </Container>
        </Menu>
        <Container style={{ marginTop: "4rem" }}>
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

const MenuItem = ({ to, text }) => {
  return (
    <Menu.Item as={Link} to={to}>
      {text}
    </Menu.Item>
  );
};

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

const mapStateToProps = state => ({
  finishedPages: state.userScore.finishedPages
});
export default connect(mapStateToProps)(Layout);
