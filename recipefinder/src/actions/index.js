export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export const setRecipes = (items) => {
  return {
    type: SET_RECIPES,
    items
  }
}

export const favoriteRecipe = (recipe) => {
  return {
    type: FAVORITE_RECIPE,
    recipe
  }
}