import { db } from "../utils/firebase";
import { closeModal } from "../components/uiElements/modals/modalActions.jsx";
export const takeNotes = values => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const uid = firebase.auth().currentUser.uid;
  const userProfile = db.collection("users").doc(uid);
  userProfile
    .update({
      [`notes.${values.slug}`]: values.notes
    })
    .then(() => {
      dispatch(closeModal());
    })
    .catch(err => console.error(err));
};
