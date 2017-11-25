import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import "./style/style.css";

const jsx = (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
