import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import { memes, myMemes } from '../reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      memes,
      myMemes
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store;
}
