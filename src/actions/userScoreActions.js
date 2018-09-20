import { db } from "../utils/firebase";

export const COMPLETE_CHAPTER_QUIZ = "COMPLETE_CHAPTER_QUIZ";
export const completeChapterQuiz = chapterId => ({
  type: COMPLETE_CHAPTER_QUIZ,
  chapterId
});

export const START_CHAPTER_QUIZ = "START_CHAPTER_QUIZ";
export const startChapterQuiz = chapterId => ({
  type: START_CHAPTER_QUIZ,
  chapterId
});

export const COMPLETE_KEYBOARD_CHALLENGE = "COMPLETE_KEYBOARD_CHALLENGE";
export const completeKeyboardChallenge = keyboardId => ({
  type: COMPLETE_KEYBOARD_CHALLENGE,
  keyboardId
});

export const FINISH_PAGE = "FINISH_PAGE";
export const finishPage = ({ pageUrl, chapter, slug }) => async (
  dispatch,
  getStore,
  { getFirestore, getFirebase }
) => {
  const firestore = getFirestore();
  const firebase = getFirebase();

  const timestamp = firestore.Timestamp.now();
  const action = {
    type: FINISH_PAGE,
    pageUrl,
    chapter,
    timestamp,
    slug
  };
  if (firebase.auth().currentUser) {
    console.log("firebase.auth.currentuser", firebase.auth().currentUser);
    const userId = firebase.auth().currentUser.uid;
    firestore
      .collection("users")
      .doc(userId)
      .set(
        {
          finishedLessons: firestore.FieldValue.arrayUnion({ slug, timestamp })
        },
        { merge: true }
      )
      .then(res => console.log("response from fs", res))
      .catch(err => console.log("update error", err));
  }

  dispatch(action);
};

export const firebaseThunk = userId => dispatch => {
  console.log("trying to get user with id:", userId);
  db.collection("users")
    .doc(userId)
    .get()
    .then(user => console.log("user data", user.data()));
};
