import { db } from "../utils/firebase";

export const takeNotes = values => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const uid = firebase.auth().currentUser.uid;
  console.log("taking notes from action", values);
  console.log("uid is", uid);
  const userProfile = db.collection("users").doc(uid);
  console.log("userProfil", userProfile);
  userProfile
    .update({
      [`notes.${values.slug}`]: values.notes
    })
    .then(response => console.log("response from upload note", response));
  dispatch({ type: "TAKE_NOTES" });
};
