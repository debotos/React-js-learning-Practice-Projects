const axios = require("axios");

BASE_URL = "https://free.currencyconverterapi.com/api/v4/currencies";

const getCountries = () => {
  const response = axios.get(BASE_URL);
  response.then(result => {
    console.log("Result is: \n", result.data.results);
  });
};

getCountries();
