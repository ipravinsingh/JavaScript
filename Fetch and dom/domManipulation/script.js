const headingElement = document.getElementsByClassName("heading");
const containerDiv = document.getElementById("container");

// console.log((headingElement[1].innerHTML = "changed"));

const count = 124;
containerDiv.innerHTML = `<h1>${count} This is inside the container</h1> <h4>This is also there</h4>`;

containerDiv.style.border = "2px solid black";
containerDiv.style.padding = "20px";

containerDiv.classList.add("funky");

const img = document.getElementById("dummy-img");
img.src = "https://via.placeholder.com/200";
console.log(img);

const newElement = document.createElement("h1");

newElement.innerHTML = "This is new H1";

containerDiv.appendChild(newElement);
