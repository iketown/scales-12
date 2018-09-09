import React, { Component, createContext } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { chapters, getPreviousAndNextLessons } from "../utils/chapterIndex";

export const LessonContext = createContext();

class Layout extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <LessonContext.Provider value={{ chapters, getPreviousAndNextLessons }}>
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
          {children} <br />
          <br />
          <br />
          <br />
          {/* <LessonContext.Consumer>
            {val => {
              const myUrl = this.props.match.path;
              const indexes = val.getPreviousAndNextLessons(myUrl);
              return (
                <div>
                  <p>my url is {myUrl}</p>
                  <p>my lesson index is {indexes.myIndex}</p>
                </div>
              );
            }}
          </LessonContext.Consumer> */}
        </Container>
      </LessonContext.Provider>
    );
  }
}

export default Layout;

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
