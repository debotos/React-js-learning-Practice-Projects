import { combineReducers } from "redux";

import countryReducer from "./countryReducer";
import rateReducer from "./rateReducer";

const RootReducer = combineReducers({
  rate: rateReducer,
  countries: countryReducer
});

export default RootReducer;
