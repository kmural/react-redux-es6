import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./styles/styles.css";
import "./styles/bootstrap.min.css";

render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById("app")
);
