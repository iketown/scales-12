import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import keyboardReducer from "./reducers/keyboardReducer";

const logger = createLogger({
  collapsed: true,
  diff: true
});

export const rootReducer = combineReducers({
  keys: keyboardReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
