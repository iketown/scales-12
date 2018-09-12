import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import firebase from "./utils/firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false
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
