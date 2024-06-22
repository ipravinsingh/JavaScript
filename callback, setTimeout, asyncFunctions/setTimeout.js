// const a = 23;
// const b = 12;

// console.log("ordering burger");
// for (let i = 0; i < 50000000; i++) {
//   let n = i * 78788787;
// }
// console.log("Burger eaten")

const d = 12;

function greet(name) {
  console.log("hello world", name);
}

console.log("before greet");
// setTimeout(greet, 2000, "Hello");

//setTimeout

const greetTimeoutId = setTimeout(() => {
  greet({
    name: "Praveen",
  });
}, 2000);

const goodNightTimeoutId = setTimeout(() => {
  console.log("good night");
}, 4000);

// clearTimeout(timeoutId);

console.log("this is written after greet");

//setInterval

const intervalId = setInterval(increaseCount, 1000);

// let count = 0;
// function increaseCount() {
//   count++;
//   console.log(count);
//   if (count == 5) {
//     clearInterval(intervalId);
//   }
// }

let count = 0;
function increaseCount() {
  count++;
  const date = new Date().toTimeString();
  console.log(date);
  if (count == 5) {
    clearInterval(intervalId);
  }
}
