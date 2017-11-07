import { combineReducers, createStore } from 'redux';
import { recipes, favoriteRecipes } from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      recipes,
      favoriteRecipes
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}