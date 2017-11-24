import { FETCH_SPECIFIC_RATE } from "../actions/index";

const rateReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SPECIFIC_RATE:
      return action.payload;
    default:
      return state;
  }
};

export default rateReducer;
