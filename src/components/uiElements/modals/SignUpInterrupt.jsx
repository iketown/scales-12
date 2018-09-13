import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal, openModal } from "./modalActions.jsx";
import RegisterForm from "../../../pages/User/RegisterForm.jsx";
class SignUpInterrupt extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };
  render() {
    return (
      <Modal dimmer="blurring" open>
        <Modal.Header>Let's do this!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ maxWidth: "20rem", float: "right" }}>
              <RegisterForm />
            </div>
            <p>There is plenty of good stuff ahead in this course</p>
            <p>
              Please, take a second and make an account so you can keep track of
              your progress. (So you can start back up where you left off)
            </p>
            <p>
              already have an account?{" "}
              <Button onClick={this.handleSignIn}>Sign In</Button>
            </p>
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
