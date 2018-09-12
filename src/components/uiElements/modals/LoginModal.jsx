import React from "react";
import { Modal } from "semantic-ui-react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase/app";
import { uiConfig } from "../../../utils/firebase";
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
  // return (
  //   <Modal closeIcon="close" open={true} onClose={closeModal}>
  //     <Modal.Header>Sign In to 12Scales</Modal.Header>
  //     <Modal.Content>
  //       <StyledFirebaseAuth
  //         uiConfig={uiConfig}
  //         firebaseAuth={firebase.auth()}
  //       />
  //     </Modal.Content>
  //   </Modal>
  // );
};

export default LoginModal;
