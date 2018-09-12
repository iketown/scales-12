import React from "react";
import { connect } from "react-redux";
import TestModal from "./TestModal.jsx";
import { closeModal } from "./modalActions.jsx";
import LoginModal from "./LoginModal";

const modalLookup = {
  LoginModal: LoginModal
};

const ModalManager = ({ currentModal, closeModal }) => {
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} closeModal={closeModal} />;
  }
  return <span>{renderedModal}</span>;
};

const mapStateToProps = state => ({
  currentModal: state.modal
});

const actions = { closeModal };

export default connect(
  mapStateToProps,
  actions
)(ModalManager);
