import React from "react";
import { Modal } from "semantic-ui-react";
import NotesForm from "./NotesForm.jsx";
const NotesModal = ({ closeModal, title, slug }) => {
  return (
    <Modal size="large" open={true} onClose={closeModal}>
      <Modal.Header>{title}</Modal.Header>

      <Modal.Content>
        <Modal.Description>
          <NotesForm slug={slug} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default NotesModal;
