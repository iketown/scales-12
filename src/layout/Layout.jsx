import React, { Component, createContext, Consumer, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
  state = {};
  componentDidMount() {
    const { finishedPages } = this.props;
    const finished = finishedPages.find(page => page.chapter === "Shapes");

    console.log("finished Pages", finishedPages);
    console.log("finishedbool?", finished);
  }
  handleNextClicked = () => {
    const { myUrl } = this.props;
    const { chapter } = getPreviousAndNextLessons(myUrl).thisLesson;
    this.props.dispatch(finishPage({ pageUrl: myUrl, chapter }));
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
              <Dropdown.Item as={Link} to={lesson.url}>
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
