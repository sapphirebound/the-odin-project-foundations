const add = function (a, b) {
  let result = 0;
  result = a + b;
  return result;
};

const subtract = function (a, b) {
  let result = 0;
  result = a - b;
  return result;
};

const sum = function (numbers) {
  let result = 0;
  for (num of numbers) result += num;
  return result;
};

const multiply = function (numbers) {
  let result = 0;
  result = numbers[0];
  numbersLength = numbers.length;
  for (let num = 1; num < numbersLength; num++) {
    result = result * numbers[num];
  }
  return result;
};

const power = function (number, power) {
  let result = 0;
  result = number ** power;
  return result;
};

const factorial = function (number) {
  let result = 1;
  let factorialLength = Array(number).length;
  for (i = 1; i <= factorialLength; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
