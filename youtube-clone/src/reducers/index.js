import { RECEIVE_VIDEOS } from '../actions/index'

const videoReducerDefaultState = []
export const videoReducer = (videoReducerdefaultState, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return  action.videos
    default:
      return videoReducerDefaultState
  }
}
