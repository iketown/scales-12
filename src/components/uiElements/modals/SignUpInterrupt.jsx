import React, { Component } from "react";
import { Modal, Button, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal, openModal } from "./modalActions.jsx";
import RegisterForm from "../../../pages/User/RegisterForm.jsx";
class SignUpInterrupt extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };
  render() {
    const { closeModal } = this.props;
    return (
      <Modal dimmer="blurring" open closeIcon onClose={closeModal}>
        <Modal.Header>Let's do this!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid stackable columns={2}>
              <Grid.Column>
                <p>There is plenty of good stuff ahead in this course</p>
                <p>
                  Please, take a second and make an account so you can keep
                  track of your progress.
                </p>
                <p>
                  already have an account?{" "}
                  <Button onClick={this.handleSignIn}>Sign In</Button>
                </p>
              </Grid.Column>
              <Grid.Column>
                <RegisterForm />
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});
const actions = { closeModal, openModal };
export default connect(
  mapStateToProps,
  actions
)(SignUpInterrupt);
