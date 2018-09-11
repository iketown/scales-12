import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { firebaseReducer } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { userScoreReducer } from "./reducers/userScoreReducer";

const firebaseConfig = {
  apiKey: "AIzaSyAAeERyKaIH58i3HokvmIEFQNT6DTroQ40",
  authDomain: "scales-4bb3e.firebaseapp.com",
  databaseURL: "https://scales-4bb3e.firebaseio.com",
  projectId: "scales-4bb3e",
  storageBucket: "scales-4bb3e.appspot.com",
  messagingSenderId: "534107413294"
};

// react-redux-firebase config
// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true
// };
const rfConfig = {};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const createStoreWithFirebase = compose(reduxFirestore(firebase, rfConfig))(
  createStore
);

const logger = createLogger({
  collapsed: true,
  diff: true
});

export const rootReducer = combineReducers({
  userScore: userScoreReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const store = createStoreWithFirebase(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
