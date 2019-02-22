import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./styles/styles.css";
import "./styles/bootstrap.min.css";

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
