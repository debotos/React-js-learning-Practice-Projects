import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";

import RootReducer from "../reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(promiseMiddleware))
  );
  return store;
};
