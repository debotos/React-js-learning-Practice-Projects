const axios = require("axios");

const API_KEY = "";
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;

const fetchWeather = city => {
  const url = `${BASE_URL}${city}`;
  const request = axios.get(url);
  console.log("Request looks like:--->>>\n\n", request);
  request.then(response => {
    console.log("\n\n\nResponse Result-->>\n ", response);
    return response;
  });
};

fetchWeather("khulna");
