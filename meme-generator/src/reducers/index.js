import { RECEIVE_MEMES, NEW_MEME } from '../actions/index';

export const memes = (state=[], action) => {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes
    default:
      return state
  }
}

export const myMemes = (state=[], action) => {
  switch (action.type) {
    case NEW_MEME:
      return [...state, action.meme]
    default:
      return state
  }
}