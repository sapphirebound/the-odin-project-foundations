const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";

const child = document.createElement("div");
child.style.backgroundColor = "pink";
child.style.borderColor = "black";

const childHeader = document.createElement("h1");
childHeader.textContent = "I'm in a div";

const childParagraph = document.createElement("p");
childParagraph.textContent = "ME TOO!";

function alertFunction() {
    alert("YAY! dsfdsfs DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 3
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header3);
child.appendChild(childHeader);
child.appendChild(childParagraph);
container.appendChild(child);