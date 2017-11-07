import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';

const recipes = (state = [], action) => {
  switch(action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}

const favoriteRecipes = (state = [], action) => {
  switch (action.type) {
    case FAVORITE_RECIPE:
      return [...state, action.recipe];
    default:
      return state;
  }
}

export {recipes, favoriteRecipes};