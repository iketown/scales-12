import { closeModal } from "../components/uiElements/modals/modalActions.jsx";
import { SubmissionError } from "redux-form";
import { push } from "connected-react-router";
import { finishPage, completeChapterQuiz } from "./userScoreActions";

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

export const signInUserAnon = finishedPageObject => {
  console.log("finished page obj", finishedPageObject);
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged(user => console.log("user", user));
    try {
      await firebase
        .auth()
        .signInAnonymously()
        .then(res => {
          console.log("response from sign in anon", res);
          dispatch(finishPage(finishedPageObject));
        });
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
  const { email, password, displayName, city, quizId } = user;
  let finishedLessons = [];
  if (state.firebase.profile && state.firebase.profile.finishedLessons) {
    finishedLessons = [...state.firebase.profile.finishedLessons];
  }
  console.log("finished lessons", finishedLessons);
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
    let newUser = {
      displayName,
      email,
      city,
      createdAt: firestore.FieldValue.serverTimestamp(),
      finishedLessons
    };
    await firestore.set(`users/${currentUser.uid}`, { ...newUser });
    dispatch(closeModal());
    dispatch(completeChapterQuiz({ quizId, displayName, city }));
  } catch (error) {
    console.log("error registering", error);
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

export const changeUserInfo = values => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const uid = firebase.auth().currentUser.uid;

  const updateObj = {};
  Object.keys(values).forEach(key => {
    if (values[key]) updateObj[key] = values[key];
  });
  console.log("update obj", updateObj);
  return firestore
    .collection("users")
    .doc(uid)
    .update(updateObj)
    .then(res => {
      console.log("response", res);
      return;
      // return new Promise((resolve, reject) => resolve("qwuzzup"));
    })
    .catch(err => console.log("error changing display name", err));
};
