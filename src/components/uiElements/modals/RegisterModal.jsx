import React from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { openModal } from "./modalActions.jsx";
import RegisterForm from "../../../pages/User/RegisterForm.jsx";

const actions = { openModal };

const RegisterModal = ({ closeModal }) => {
  return (
    <Modal size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Sign Up for 12Scales!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            Signing in allows you to keep track of which lessons you've
            finished.
          </p>
          <RegisterForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default connect(
  null,
  actions
)(RegisterModal);
