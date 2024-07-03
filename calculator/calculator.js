//calculator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//initialise variables
let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let display = 0;
console.log(firstNumber, operator, secondNumber);

//function to reset variables

const reset = () => {
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    display = 0;
};

//function for math operation
const operate = function (firstNumber, op, secondNumber) {
    switch (op) {
        case '+':
            return add(firstNumber, secondNumber);
            break;
        case '-':
            return subtract(firstNumber, secondNumber);
            break;
        case '*':
            return multiply(firstNumber, secondNumber);
            break;
        case '/':
            return divide(firstNumber, secondNumber);
            break;
    };
    reset();
};

//numpad component
const numberPad = document.createElement("div");
numberPad.className = 'numpad';

const calculatorButtons = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ['+', '-', '*', '/'],
    equals: '='
};

for (let operator of calculatorButtons.operators) {
    const numberKey = document.createElement("btn");
    numberKey.className = `numpad operator`;
    numberKey.id, numberKey.textContent = operator;
    numberPad.appendChild(numberKey);
}

for (let num of calculatorButtons.numbers) {
    const numberKey = document.createElement("btn");
    numberKey.className = 'numpad numbers';
    numberKey.id, numberKey.textContent = num;
    numberPad.appendChild(numberKey);
}

const numberKey = document.createElement("btn");
numberKey.className = 'numpad equals';
numberKey.id, numberKey.textContent = calculatorButtons.equals;
numberPad.appendChild(numberKey);


//result screen
const displayScreen = document.createElement("p");
displayScreen.className = 'display-screen';
displayScreen.style.backgroundColor = '#D9EEE1';
displayScreen.style.display = 'flex';
displayScreen.textContent = display;

document.querySelector(".main").appendChild(displayScreen);
document.querySelector(".main").appendChild(numberPad);

//calculator function
const buttons = document.querySelectorAll("btn");

//function to check if input is number

const calculate = (input) => {
    if (input in calculatorButtons.numbers) {
        display = String(display) + String(input);
        display = display.replace("0", "");
        display = Number(display);
        (operator == '') ? firstNumber = display : secondNumber = display;
        return display;
    } else {
        operator = input;
        display = '';
        console.log(`operator pressed ${operator}`);
        return operator;
    };
};


//add click listener
buttons.forEach((button) =>
    button.addEventListener("click", () => {
        switch (button.className) {
            case 'numpad numbers':
                displayScreen.textContent = calculate(button.textContent);
                break;
            case 'numpad equals':
                displayScreen.textContent = operate(firstNumber, operator, secondNumber);
                reset();
                break;
            default:
                console.log('operator pressed');
                displayScreen.textContent = calculate(button.textContent);
                break;
        }
        console.log(firstNumber, operator, secondNumber);
    }
    )
);