import { closeModal } from "../components/uiElements/modals/modalActions.jsx";
import { SubmissionError } from "redux-form";
import { push } from "connected-react-router";

export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const signInUser = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password)
        .then(response => {
          dispatch(push("/dashboard"));
          dispatch(closeModal());
        });
    } catch (error) {
      console.log("login error", error);
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

export const signInUserAnon = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged(user => console.log("user", user));
    try {
      await firebase.auth().signInAnonymously();
    } catch (error) {
      console.log("anon signin error", error);
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
  const state = getState();
  const { email, password, displayName } = user;
  try {
    // create user in auth
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // update the fireBASE auth profile
    console.log("created user", createdUser);
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({
      displayName
    });
    // create a new profile in fireSTORE
    let finishedLessons = [];
    if (state.firebase.profile) {
      finishedLessons = [...state.firebase.profile.finishedLessons];
    }
    let newUser = {
      displayName,
      email,
      createdAt: firestore.FieldValue.serverTimestamp(),
      finishedLessons
    };
    await firestore.set(`users/${currentUser.uid}`, { ...newUser });
    dispatch(closeModal());
  } catch (error) {
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

export const goToLatestLesson = () => (dispatch, getState) => {
  console.log("trying to get latest lesson");
  const state = getState();
  if (state.firebase.profile) {
    const latestLesson = state.firebase.profile.finishedLessons.sort(
      (a, b) => b.timestamp.seconds - a.timestamp.seconds
    )[0];
    console.log("latest lesson", latestLesson);
  }

  dispatch({ type: "NEVERMIND" });
};
