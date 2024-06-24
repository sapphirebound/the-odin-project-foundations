const sumAll = function (num1, num2) {
    let sum = 0;
    let startNumber = 0;
    let endNumber = 0;
    if (num1 < 0 || num2 < 0 ||
        typeof (num1) != 'number' ||
        typeof (num2) != 'number') {
        return "ERROR";
    } else if (num1 <= num2) {
        startNumber = num1;
        endNumber = num2;
    } else {
        startNumber = num2;
        endNumber = num1;
    }

    console.log(`start number ${startNumber}`);
    console.log(`end number ${endNumber}`);
    for (let i = Number(startNumber); i <= Number(endNumber); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
