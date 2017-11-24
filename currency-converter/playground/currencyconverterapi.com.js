const axios = require("axios");

const FETCH_SPECIFIC_RATE = "FETCH_SPECIFIC_RATE";
const FETCH_ALL_RATE = "FETCH_ALL_RATE";

const BASE_URL = "https://free.currencyconverterapi.com/api/v4/convert?q=";

const fetchSpecificRate = (from, to) => {
  const query = `${from}_${to}`;
  const url = `${BASE_URL}${query}&compact=ultra`;
  let request = axios.get(url);
  request.then(result => {
    console.log("Fetched specific rate :", result.data);
  });
};

fetchSpecificRate("USD", "BDT");
