import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./fonts/Now-Light.otf";
import "./fonts/now.regular.otf";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
