const content = document.querySelector(".content");

const horizontalAxis = 16;
const verticalAxis = 16;
let count = 0;

for (i of Array(horizontalAxis * verticalAxis)) {
    let box = document.createElement("div");
    box.className = "box";
    box.id = count;
    content.appendChild(box);
    count += 1;
}