import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import {
  reactReduxFirebase,
  getFirebase,
  firebaseReducer
} from "react-redux-firebase";
import {
  reduxFirestore,
  getFirestore,
  firestoreReducer
} from "redux-firestore";
import thunk from "redux-thunk";

import firebase from "./utils/firebase";
import { firebaseConfig } from "./utils/firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { createLogger } from "redux-logger";
import { userScoreReducer } from "./reducers/userScoreReducer";

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
}; // optional redux-firestore config opts

export const configureStore = preloadedState => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(
    ...storeEnhancers,
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );
  const store = createStore(rootReducer, preloadedState, composedEnhancer);
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept(rootReducer, () => {
        const newRootReducer = require(rootReducer).default;
        store.replaceReducer(newRootReducer);
      });
    }
  }
  return store;
};

// // add redux firestore store enhancer
// const createStoreWithFirebase = compose(
//   reduxFirestore(firebase, rfConfig) // rfConfig is optional
// )(createStore);

export const rootReducer = combineReducers({
  userScore: userScoreReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

// const initalState = {};

// const logger = createLogger({
//   collapsed: true,
//   diff: true
// });

// const store = createStoreWithFirebase(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

// export default store;
