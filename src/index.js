import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";

import "./index.css";
import App from "./App";

let render = () => {
  ReactDOM.render(
    <Provider store={configureStore({})}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}
render();
