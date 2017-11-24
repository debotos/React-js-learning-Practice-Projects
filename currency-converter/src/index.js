import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";
import { getCountries } from "./actions/index";
import "./style/style.css";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCountries());

const jsx = (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
