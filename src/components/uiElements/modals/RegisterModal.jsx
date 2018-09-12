import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "./modalActions.jsx";
import RegisterForm from "../../../pages/User/RegisterForm.jsx";

const actions = { closeModal };

class RegisterModal extends Component {
  render() {
    return (
      <Modal size="mini" open={true} onClose={this.props.closeModal}>
        <Modal.Header>Sign Up for 12Scales!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
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
