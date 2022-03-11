import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Signin from "./Components/Signin";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import Main from "./Components/Main";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
