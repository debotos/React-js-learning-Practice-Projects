import axios from "axios";
import converter from "google-currency";

export const FETCH_SPECIFIC_RATE = "FETCH_SPECIFIC_RATE";
export const FETCH_ALL_RATE = "FETCH_ALL_RATE";

// const BASE_URL = "https://free.currencyconverterapi.com/api/v4/convert?q=";

export const fetchSpecificRate = (from, to, amount) => {
  // const query = `${from}_${to}`;
  // const url = `${BASE_URL}${query}&compact=ultra`;
  // let request = axios.get(url);
  const options = {
    from,
    to,
    amount
  };
  console.log('From action...', amount);
  const request = converter(options);
  return {
    type: FETCH_SPECIFIC_RATE,
    payload: request
  };
};

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = () => {
  const BASE_COUNTRIES_URL =
    "https://free.currencyconverterapi.com/api/v4/currencies";
  const request = axios.get(BASE_COUNTRIES_URL);
  return {
    type: GET_COUNTRIES,
    payload: request
  };
};
