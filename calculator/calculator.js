const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let display = 0;

const operate = function (firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
};

//numbers component
const numberPad = document.createElement("div");
numberPad.className = 'number-pad';

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let operators = ['+', '-', '*', '/'];

for (operator in operators) {
    const numberKey = document.createElement("btn");
    const operatorKey = operators[operator];
    numberKey.className = 'number-pad key';
    numberKey.id = operatorKey;
    numberKey.textContent = operatorKey;
    numberPad.appendChild(numberKey);
}

for (num in numbers) {
    const numberKey = document.createElement("btn");
    numberKey.className = 'number-pad key';
    numberKey.id = num;
    numberKey.textContent = num;
    numberPad.appendChild(numberKey);
}

//result screen
const displayScreen = document.createElement("div");
displayScreen.className = 'display-screen';
displayScreen.style.backgroundColor = '#D9EEE1';
displayScreen.style.display = 'flex';
displayScreen.textContent = display;

document.querySelector("body").appendChild(displayScreen);
document.querySelector("body").appendChild(numberPad)

