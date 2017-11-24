import { GET_COUNTRIES } from "../actions/index";

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload.data.results;
    default:
      return state;
  }
};

export default countryReducer;