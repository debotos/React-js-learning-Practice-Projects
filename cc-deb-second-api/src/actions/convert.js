import axios from 'axios';

import { KEY } from '../secrets/secrets';

const BASE_URL = `https://v3.exchangerate-api.com/bulk/${KEY}/`;

export const convert = (from, to, amount) => {

  console.log('from, to, amount :', from, to, amount);

  const FINAL_URL = `${BASE_URL}${from}`;

  return axios
    .get(FINAL_URL)
    .then(response => {
      console.log('First Response: ',response)
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
      return (rate*parseFloat(amount)).toFixed(3);
    })
    .catch(error => {
      console.log("Something Bad happened inside the convert() function!");
    });
};