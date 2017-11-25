const axios = require("axios");
// Import your API KEY First here
const KEY = "1e40576a529b71324d042064";
const BASE_URL = `https://v3.exchangerate-api.com/bulk/${KEY}/`;

const convert = (from, to, amount) => {
  const FINAL_URL = `${BASE_URL}${from}`;
  return axios
    .get(FINAL_URL)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .then(result => {
      return result.rates;
    })
    .then(rates => {
      for (let country in rates) {
        if (country === to) {
          return rates[country];
        }
      }
    })
    .then(rate => {
      return rate*parseFloat(amount);
    })
    .catch(error => {
      console.log("Something Bad happened inside the convert() function!");
    });
};

convert("USD", "BDT", 2).then((output) => {
  console.log("OUTPUT: ", output);
})


