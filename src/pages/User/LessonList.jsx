import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import styled from "styled-components";
import { List, Icon } from "semantic-ui-react";
import { chapters } from "../../utils/chapterIndex";
class UserDashboard extends Component {
  render() {
    const { auth, finishedLessons } = this.props;
    const visitedLessons =
      finishedLessons &&
      finishedLessons.reduce((obj, les) => {
        if (obj[les.slug]) {
          // see if this one is later
          if (obj[les.slug] < les.timestamp.seconds) {
            obj[les.slug] = les.timestamp.seconds;
          }
          return obj;
        } else {
          return { ...obj, [les.slug]: les.timestamp.seconds };
        }
      }, {});

    return (
      <List celled>
        {Object.keys(chapters).map(chapter => (
          <List.Item>
            {chapter}
            <List.Item as="ol">
              {chapters[chapter].map(lesson => {
                return (
                  <List.Item>
                    <List.Content>
                      <List.Header as={Link} to={"/" + lesson.slug}>
                        <h4>
                          {lesson.title}
                          {visitedLessons &&
                            visitedLessons[lesson.slug] && (
                              <LastVisitedSpan>
                                <Icon name="check circle outline" />
                                <Moment fromNow unix>
                                  {visitedLessons[lesson.slug]}
                                </Moment>
                              </LastVisitedSpan>
                            )}
                        </h4>
                      </List.Header>
                      <List.Description />
                    </List.Content>
                  </List.Item>
                );
              })}
            </List.Item>
          </List.Item>
        ))}
      </List>
    );
  }
}

const LastVisitedSpan = styled.span`
  font-size: 10px;
  font-weight: lighter;
  color: grey;
  margin-left: 0.5rem;
`;

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  finishedLessons: state.firebase.profile.finishedLessons
});
const actions = {};

export default connect(
  mapStateToProps,
  actions
)(UserDashboard);
