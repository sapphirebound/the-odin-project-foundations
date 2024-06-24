let result = 0;

const convertToCelsius = function (num) {
  result = (num - 32) * 5 / 9;
  result = Number(result.toFixed(1));
  return result;
};

const convertToFahrenheit = function (num) {
  result = (num * 9 / 5) + 32;
  result = Number(result.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
