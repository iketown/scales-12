import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal, openModal } from "./modalActions.jsx";
import RegisterForm from "../../../pages/User/RegisterForm.jsx";

const actions = { closeModal, openModal };

class RegisterModal extends Component {
  render() {
    return (
      <Modal size="mini" open={true} onClose={this.props.closeModal}>
        <Modal.Header>Sign Up for 12Scales!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>
              Signing in allows you to keep track of which lessons you've
              finished.
            </p>
            {/* <p>
              already signed up?
              <Button
                basic
                floated="right"
                color="blue"
                size="small"
                onClick={() => this.props.openModal("LoginModal")}
              >
                Sign In
              </Button> 
            </p>*/}
            <RegisterForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  null,
  actions
)(RegisterModal);
