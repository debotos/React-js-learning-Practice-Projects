import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import './styles/styles.css'
import configureStore from "./store/configureStore";
import { getVideos } from "./actions/index";

const store = configureStore();
store.subscribe(() => console.log("Main store", store.getState()));

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
store.dispatch(getVideos("react js")).then(res => {
  ReactDOM.render(jsx, document.getElementById("root"));
});
registerServiceWorker();
