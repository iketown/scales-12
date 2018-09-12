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

export const registerUser = user => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const { email, password, displayName } = user;
  try {
    // create user in auth
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log("created user", createdUser);
    // update the fireBASE auth profile
    const currentUser = firebase.auth().currentUser;
    console.log("current user", currentUser);
    await currentUser.updateProfile({
      displayName
    });
    // create a new profile in fireSTORE
    let newUser = {
      displayName,
      email,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${currentUser.uid}`, { ...newUser });
    dispatch(closeModal());
  } catch (error) {
    console.log("signup error", error);
    throw new SubmissionError({ _error: error.message });
  }
};

export const signOutUser = () => {
  return { type: SIGN_OUT_USER };
};

export const socialLogin = selectedProvider => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    dispatch(closeModal());
    let user = await firebase.login({
      provider: selectedProvider,
      type: "popup"
    });
    if (user.additionalUserInfo.isNewUser) {
      await firestore.set(`users/${user.user.uid}`, {
        displayName: user.profile.displayName,
        photoURL: user.profile.avatarUrl,
        createdAt: firestore.FieldValue.serverTimestamp()
      });
    }
    console.log("user is", user);
  } catch (error) {
    console.log("social login error", error);
  }
};
