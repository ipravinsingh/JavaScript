// const body = document.body;

// const children = (body.children[1].children[0].innerHTML = "changed");

// const list = document.getElementById("list");
// console.log(list.parentElement.children);
// console.log((list.lastElementChild.innerHTML = "changed eight"));

// const numberInput = document.getElementById("number-input");
// numberInput.value = "praveen";

// const submitBtnElement = document.getElementById("submit-btn");
// submitBtnElement.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(numberInput.value);
// });

// console.log(body);

const counterText = document.getElementById("counter");
const posBtnElement = document.getElementById("posbtn");
const negBtnElement = document.getElementById("negbtn");

let count = 0;
updateCount();

posBtnElement.addEventListener("click", () => {
  count++;
  updateCount();
});

negBtnElement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

function updateCount() {
  counterText.innerHTML = count;
}
