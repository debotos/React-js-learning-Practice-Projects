const converter = require("google-currency");

const options = {
  from: "BDT",
  to: "BDT",
  amount: 1
};

const result = converter(options);

console.log(result);

result.then(value => {
  console.log(value);
});
