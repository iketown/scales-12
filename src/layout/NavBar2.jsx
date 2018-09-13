import React, { Component, Fragment } from "react";
import { chapters } from "../utils/chapterIndex";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { openModal } from "../components/uiElements/modals/modalActions.jsx";

const ChapterTitle = props => {
  const { displayText, lessons, profile } = props;
  let chapterIsFinished = false;
  if (profile && profile.finishedLessons) {
    const theseFinishedLessons = lessons.filter(les =>
      profile.finishedLessons.find(
        profileLesson => profileLesson.slug === les.slug
      )
    );
    chapterIsFinished = theseFinishedLessons.length === lessons.length;
  }
  return (
    <Dropdown.Item>
      <i className="dropdown icon" />
      <span style={chapterIsFinished ? { color: "#dadada" } : {}}>
        {displayText}
      </span>
      {lessons && (
        <Dropdown.Menu>
          {lessons.map(lesson => {
            const finished =
              profile &&
              profile.finishedLessons &&
              profile.finishedLessons.find(les => les.slug === lesson.slug);
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
  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };
  handleSignOut = () => {
    this.props.firebase.logout();
    // this.setState({ isSignedIn: false, user: {} });
  };
  componentDidUpdate(prevProps) {
    console.log("prev props", prevProps);
    console.log("now props", this.props);
  }
  render() {
    const { finishedPages, auth, profile } = this.props;
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
                    profile={profile}
                  />
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position="right">
            {authenticated ? (
              <Fragment>
                <Menu.Item>
                  {/* <Image
                    src={auth.photoURL}
                    size="mini"
                    circular
                    spaced="right"
                  /> */}
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
const actions = { openModal };
export default withFirestore(
  connect(
    mapStateToProps,
    actions
  )(NavBar)
);
