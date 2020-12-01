import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  rootElement
);
