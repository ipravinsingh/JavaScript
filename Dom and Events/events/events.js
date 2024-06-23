// const box = document.getElementById("box");
// const container = document.getElementById("container");

// const coordinates = document.createElement("p");
// document.body.append(coordinates);

// const logMessage = (event) => {
//   //   console.log(event);
//   coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
//   box.style.left = `${event.offsetX}px`;
//   box.style.top = `${event.offsetY}px`;
// };

// // box.addEventListener("click", logMessage);
// box.addEventListener("mousemove", logMessage);

// let count = 0;
// const logMessage = () => {
//   console.log("clicked", count++);
// };
// box.addEventListener("click", logMessage);

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", () => {
  console.log("child clicked");
  child.classList.toggle("round");
});

parent.addEventListener("click", () => {
  console.log("parent clicked");
});

grandparent.addEventListener("click", () => {
  console.log("grandparent clicked");
});
