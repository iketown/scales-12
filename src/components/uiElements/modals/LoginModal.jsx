import React from "react";
import { Modal } from "semantic-ui-react";
import LoginForm from "../../../pages/User/LoginForm.jsx";
const LoginModal = ({ closeModal }) => {
  return (
    <Modal size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Login to 12Scales</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <LoginForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;
