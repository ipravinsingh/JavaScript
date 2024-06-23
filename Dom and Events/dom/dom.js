const box2 = document.getElementById("box-2");
const divs = document.getElementsByTagName("div");
const container = document.getElementsByClassName("container");
const box3 = document.querySelectorAll(".container #box-3");
const boxMultiple = document.querySelectorAll(".container div");

for (let i = 0; i < 10; i++) {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");

  container[0].append(boxElement);
}

// box2.innerHTML = "<h1>This is Box 2</h1>";
// box2.style.borderRadius = "50%";
// box2.style.backgroundColor = "brown";

// box2.classList.add("fancy");
// box2.classList.remove("fancy");
// box2.classList.toggle("box");
// document.getElementById("my-Img").src = "https://via.placeholder.com/100";
// document.getElementById("my-Img").alt = "this is the dummy image";
