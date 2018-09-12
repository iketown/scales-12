import { closeModal } from "../components/uiElements/modals/modalActions.jsx";
import { SubmissionError } from "redux-form";
export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export const signInUser = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    // dispatch({ type: LOGIN_USER, payload: { creds } });
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
    } catch (error) {
      console.log("login error", error);
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

export const signOutUser = () => {
  return { type: SIGN_OUT_USER };
};
