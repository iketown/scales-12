import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "./uiElements/modals/modalActions.jsx";
export const Protected = ({ children, auth, openModal }) => {
  const authenticated = auth.isLoaded && !auth.isEmpty && !auth.isAnonymous;
  // if (!authenticated) {
  //   openModal("LoginModal");
  // } else {
  //   closeModal();
  // }
  return authenticated && children;
};

const mapState = state => ({
  auth: state.firebase.auth
});
const actions = { openModal, closeModal };

export default connect(
  mapState,
  actions
)(Protected);
