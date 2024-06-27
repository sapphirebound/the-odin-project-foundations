const content = document.querySelector(".content");

//create header div for user input
const header = document.createElement("div");
header.className = "header";
content.appendChild(header);

//create input button
const inputButton = document.createElement("button");
inputButton.textContent = 'Choose Grid Size';
header.appendChild(inputButton);


//function to draw grid
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
        box.style.opacity = 0;
        grid.appendChild(box);
        count += 1;
    }
}

//Create grid div for etch-a-sketch
const grid = document.createElement("div");
grid.className = "grid";
content.appendChild(grid);

//draw default 16x16 grid
drawGrid(16);

//random color function
function rand(min, max) {
    return min + Math.random() * (max - min);
}

function getRandomColor() {
    let h = rand(1, 360);
    let s = rand(0, 100);
    let l = rand(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

//function to add opacity to target div
function addOpacity(target) {
    let opacity = Number(target.style.opacity);
    if (opacity < 1) {
        console.log('true');
        opacity += 0.1;
    } else { opacity = 1; };
    return opacity;
}

//mouseover event to change color of box
content.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className === "box") {
        target.style.opacity = addOpacity(target); //add 0.1 opacity
        if (target.style.opacity == 1) {
            target.style.backgroundColor = "black"; //color black if full opacity
        } else target.style.backgroundColor = getRandomColor();

    }
}
);

//prompt user and get input for grid creator
inputButton.addEventListener("click", () => {
    let input = prompt("Choose Grid Size", 16);
    if (input <= 100) {
        gridSize = input;
    } else gridSize = 100;
    inputBox.value = 16;
    drawGrid(gridSize);
}
);
