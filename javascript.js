const content = document.querySelector(".content");

//create header div for user input
const header = document.createElement("div");
header.className = "header";

//
const grid = document.createElement("div");
grid.className = "grid";

const horizontalAxis = 16;
const verticalAxis = 16;
let count = 0;

content.appendChild(header);
content.appendChild(grid);

for (i of Array(horizontalAxis * verticalAxis)) {
    let box = document.createElement("div");
    box.className = "box";
    box.id = count;
    grid.appendChild(box);
    count += 1;
}

content.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className === "box") {
        target.style.backgroundColor = "red";
    }
}
);