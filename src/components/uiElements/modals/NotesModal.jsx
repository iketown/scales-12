import React from "react";
import { Modal, Popup, Icon } from "semantic-ui-react";
import NotesForm from "./NotesForm.jsx";
const NotesModal = ({ closeModal, title, slug }) => {
  return (
    <Modal size="large" open={true} onClose={closeModal}>
      <Modal.Header>
        Feedback{" "}
        <Popup
          trigger={<Icon name="question circle" />}
          header="Feedback"
          content={
            <div>
              <ul>
                <li>Anything on this page unclear or difficult?</li>
                <li>Did you find a typo?</li>
                <li>Anything else you want to say?</li>
              </ul>
              <h4>Please let me know.</h4>
              <p>
                These lessons are a work in progress and your feedback is much
                appreciated.
              </p>
              <p>thanks!</p>
              <p>-Brian</p>
            </div>
          }
          wide
          position="right center"
        />
      </Modal.Header>

      <Modal.Content>
        <Modal.Description>
          Feedback on <strong>{title}</strong>:<NotesForm slug={slug} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default NotesModal;
