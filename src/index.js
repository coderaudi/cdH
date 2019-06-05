import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";

//import reducers from "./reducers/index";
import App from "./container/App";

import store from "./store/index";

// const store = createStore(
//reducers
// compose(
//   applyMiddleware(middleware, Thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )
// );

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  rootElement
);
