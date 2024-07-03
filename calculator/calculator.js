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

//operator section
const numberPadOperator = document.createElement("div");
numberPadOperator.className = 'numpad-right';

//left section
const numberPadLeft = document.createElement("div");
numberPadLeft.className = 'numpad-left';

//bottom-left section
const numberPadLeftBottom = document.createElement("div");
numberPadLeftBottom.className = 'numpad-left bottom';

//top-left section
const numberPadLeftTop = document.createElement("div");
numberPadLeftTop.className = 'numpad-left top';

const calculatorButtons = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ['+', '-', '*', '/'],
    equals: '='
};

for (let operator of calculatorButtons.operators) {
    const numberKey = document.createElement("button");
    numberKey.className = `numpad-right operator`;
    numberKey.id, numberKey.textContent = operator;
    numberPadOperator.appendChild(numberKey);
}

let numberKey = document.createElement("button");
numberKey.className = 'numpad-right operator equals';
numberKey.id, numberKey.textContent = calculatorButtons.equals;
numberPadOperator.appendChild(numberKey);

for (let num of calculatorButtons.numbers.reverse()) {
    const numberKey = document.createElement("button");
    numberKey.className = 'numbers';
    numberKey.id, numberKey.textContent = num;
    (num == 0) ? numberPadLeftBottom.appendChild(numberKey) : numberPadLeftTop.appendChild(numberKey);
}

numberKey = document.createElement("button");
numberKey.className = 'numpad-left numbers period';
numberKey.id, numberKey.textContent = '.';
numberPadLeftBottom.appendChild(numberKey);

numberPadLeft.appendChild(numberPadLeftTop);
numberPadLeft.appendChild(numberPadLeftBottom);
numberPad.appendChild(numberPadLeft);
numberPad.appendChild(numberPadOperator);

//result screen
const displayScreen = document.createElement("p");
displayScreen.className = 'display-screen';
displayScreen.style.backgroundColor = '#D9EEE1';
displayScreen.style.display = 'flex';
displayScreen.textContent = display;

document.querySelector(".main").appendChild(displayScreen);
document.querySelector(".main").appendChild(numberPad);

//calculator function
const buttons = document.querySelectorAll("button");

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
            case 'numbers':
                displayScreen.textContent = calculate(button.textContent);
                break;
            case 'numpad-right operator equals':
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