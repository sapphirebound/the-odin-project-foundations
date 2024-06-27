const content = document.querySelector(".content");

//create header div for user input
const header = document.createElement("div");
header.className = "header";

//create input field
const inputBox = document.createElement("input");
inputBox.type = "number";
inputBox.max = 100;
inputBox.min = 0;
const inputButton = document.createElement("button");
inputButton.textContent = 'submit';

header.appendChild(inputBox);
header.appendChild(inputButton);

//Create grid div for etch-a-sketch
const grid = document.createElement("div");
grid.className = "grid";

let gridSize = 16;


content.appendChild(header);
content.appendChild(grid);

let count = 0;


function drawGrid(gridSize) {
    grid.innerHTML = '';
    let boxWidth = (100 / gridSize) + '%';
    for (i of Array(gridSize ** 2)) {
        console.log(gridSize);
        let box = document.createElement("div");
        box.className = "box";
        box.id = count;
        box.style.width = boxWidth;
        grid.appendChild(box);
        count += 1;
    }
}

drawGrid(16);

content.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className === "box") {
        target.style.backgroundColor = "red";
    }
}
);

// Get input for grid creator
inputButton.addEventListener("click", () => {
    let input = Number(inputBox.value);
    if (input <= 100) {
        gridSize = input;
        inputBox.value = 16;
        drawGrid(gridSize);
    }
}
);
