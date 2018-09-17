import React, { Component } from "react";
import Layout from "../../layout/Layout";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import styled from "styled-components";
import { GridColumn, Grid, GridRow } from "semantic-ui-react";
import Protected from "../../components/Protected";
import { lessonsArr, chapters } from "../../utils/chapterIndex";
import LessonList from "./LessonList";
import MyInfo from "./MyInfo";
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
      <Layout hideNav>
        <Protected>
          <h1>Dashboard</h1>
          <Grid stackable columns={2}>
            <GridColumn>
              <LessonList />
            </GridColumn>
            <GridColumn>
              <MyInfo />
            </GridColumn>
          </Grid>
        </Protected>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  finishedLessons: state.firebase.profile.finishedLessons
});
const actions = {};

export default connect(
  mapStateToProps,
  actions
)(UserDashboard);
