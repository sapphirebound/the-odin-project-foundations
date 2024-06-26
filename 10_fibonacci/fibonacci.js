const fibonacci = function (number) {
    number = parseInt(number);

    //for loop to go through each number
    //and add the number before it;
    if (number == 1 || number == 2) return 1; // check if input is string or number
    if (number == 0) return 0;
    if (number < 0) return "OOPS"; //if number, check for negative number

    numberArray = Array(number);
    numberArray[0] = 1;
    numberArray[1] = 1;
    numberArray.splice(0, 0, 1);
    let previousTwoSum = 0;
    for (i = 2; i < numberArray.length; i++) {
        previousTwoSum = numberArray[i - 2]
            + numberArray[i - 1];
        numberArray[i] = previousTwoSum;
    }
    console.log(numberArray);
    return numberArray[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
