import React, { Component } from "react";
import Layout from "../../layout/Layout";
import { Grid, GridColumn } from "semantic-ui-react";
import { connect } from "react-redux";
import Protected from "../../components/Protected";
import LessonList from "./LessonList";
import MyInfo from "./MyInfo";
class UserDashboard extends Component {
  render() {
    return (
      <Layout hideNav myUrl={this.props.match.path}>
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
