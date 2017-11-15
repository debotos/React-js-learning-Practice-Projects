import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { videoReducer } from "../reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    videoReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
