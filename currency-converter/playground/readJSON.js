// In node js 
// var fs = require("fs");

// const renderCountriesOption = () => {
//   let countries = JSON.parse(
//     fs.readFileSync("../src/data/countries.json", "utf8")
//   );
//   let result = "";
//   countries = countries.results;
//   for (var p in countries) {
//     if (countries.hasOwnProperty(p)) {
//       if (countries[p].hasOwnProperty("currencySymbol")) {
//         const name = countries[p].currencyName;
//         const id = countries[p].id;
//         const symbol = countries[p].currencySymbol;
//         result += `<option value="${id}"> ${name} (code: ${id}; sign: ${
//           symbol
//         })</option>\n`;
//       } else {
//         const name = countries[p].currencyName;
//         const id = countries[p].id;
//         result += `<option value="${id}">${name} (code: ${id})</option>\n`;
//       }
//     }
//   }
//   return result;
// };
// End node js

//-------------------------------------------------------------------------------------

// In React JS 
// import data from "../data/countries.json";
// renderCountriesOption = () => {
//   let result = "";
//   let countries = data.results;
//   for (var p in countries) {
//     if (countries.hasOwnProperty(p)) {
//       if (countries[p].hasOwnProperty("currencySymbol")) {
//         const name = countries[p].currencyName;
//         const id = countries[p].id;
//         const symbol = countries[p].currencySymbol;
//         result += `<option value="${id}"> ${name} (code: ${id}; sign: ${
//           symbol
//         })</option>\n`;
//       } else {
//         const name = countries[p].currencyName;
//         const id = countries[p].id;
//         result += `<option value="${id}">${name} (code: ${id})</option>\n`;
//       }
//     }
//   }
//   return result;
// };
// End React JS

console.log(renderCountriesOption());
