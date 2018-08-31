import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { userScoreReducer } from "./reducers/userScoreReducer";

const logger = createLogger({
  collapsed: true,
  diff: true
});

export const rootReducer = combineReducers({
  userScore: userScoreReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
