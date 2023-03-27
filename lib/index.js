import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthContextProvider } from "./contexts/auth-context";
ReactDOM.render( /*#__PURE__*/React.createElement(AuthContextProvider, null, /*#__PURE__*/React.createElement(ContextProvider, null, /*#__PURE__*/React.createElement(App, null))), document.getElementById("root"));