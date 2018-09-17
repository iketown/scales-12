import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { configureStore, history } from "./store";
import { AppContainer } from "react-hot-loader";

import "./index.css";
import App from "./App";

let render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore({})}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
render();
