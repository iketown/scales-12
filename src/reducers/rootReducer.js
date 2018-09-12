import { userScoreReducer } from "./userScoreReducer";
import { modalReducer } from "./modalReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  userScore: userScoreReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  modal: modalReducer,
  form: formReducer
});
