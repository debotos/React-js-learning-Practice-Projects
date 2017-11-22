import { combineReducers } from 'redux';

import { weatherReducer } from './weather-reducer'

const RootReducer = combineReducers({
  weather: weatherReducer
});

export default RootReducer;