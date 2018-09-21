import { db } from "../utils/firebase";
import { closeModal } from "../components/uiElements/modals/modalActions.jsx";
export const takeNotes = values => (dispatch, getState, { getFirebase }) => {
  console.log("values from action", values);
  const firebase = getFirebase();
  const uid = firebase.auth().currentUser.uid;
  const userProfile = db.collection("users").doc(uid);
  userProfile
    .update({
      [`notes.${values.slug}.text`]: values.notes,
      [`notes.${values.slug}.sendToAdmin`]: values.sendToAdmin || false
    })
    .then(() => {
      dispatch(closeModal());
    })
    .catch(err => console.error(err));
};
