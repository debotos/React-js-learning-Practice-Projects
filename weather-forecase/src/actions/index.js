import axios from "axios";

import { WEATHER_API_KEY } from "../secrets/secrets";
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&q=`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = city => {
  const url = `${BASE_URL}${city}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
