import React from "react";
import ReactDOM from "react-dom";

import AuthContextProvider from "./context/AuthContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
