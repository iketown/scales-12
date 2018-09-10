import React, { Component, createContext, Consumer, Fragment } from "react";
import { Link } from "react-router-dom";
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

class Layout extends Component {
  state = {};

  render() {
    const { children, myUrl, hideNav } = this.props;
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
            <Dropdown item simple text="Chapters" />
            <Dropdown item simple text="xx">
              <Dropdown.Menu>
                <ChapterTitle
                  to="/"
                  displayText="Chapter 1"
                  finished
                  lessons={["lesson1", "lesson2", "lesson3"]}
                />
                <ChapterTitle
                  to="/"
                  displayText="Chapter with long name"
                  finished
                />
                <ChapterTitle to="/" displayText="Chapter 1" />
                <ChapterTitle to="/" displayText="Chapter 1" disabled />

                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item disabled>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
        <Container style={{ marginTop: "4rem" }}>
          {children}
          <br />
          {!hideNav && <BottomNavButtons myUrl={myUrl} />}
          <br />
          <br />
        </Container>
      </Fragment>
    );
  }
}

export default Layout;

const NavDiv = styled.div`
  // border: 1px red solid;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
const BottomNavButtons = ({ myUrl }) => {
  const indexes = getPreviousAndNextLessons(myUrl);
  return (
    <NavDiv>
      {indexes.prevLesson && (
        <Button as={Link} to={indexes.prevLesson.url} icon labelPosition="left">
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
        >
          <Icon name="arrow right" />
          {indexes.nextLesson.title}
        </Button>
      )}
    </NavDiv>
  );
};

const MenuItem = ({ to, text }) => {
  return (
    <Menu.Item as={Link} to={to}>
      {text}
    </Menu.Item>
  );
};

const ChapterTitle = props => {
  const { to, displayText, disabled, lessons } = props;
  return (
    <Dropdown.Item as={Link} to={to} disabled={disabled}>
      {/* <Icon name={finished ? "check circle outline" : "circle outline"} /> */}
      <i className="dropdown icon" />

      <span>{displayText}</span>
      {lessons && (
        <Dropdown.Menu>
          {lessons.map(lesson => {
            return <Dropdown.Item>{lesson}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      )}
    </Dropdown.Item>
  );
};
