function greeting() {
  console.log("Hi");
  console.log("Namaste");
  console.log("Wassup");
}

greeting();

function greeting1(name) {
  console.log("Hi", name);
  console.log("Namaste", name);
  console.log("Wassup", name);
}

greeting1("Name is passed");

function addion(a, b) {
  console.log(a + b);
}

addion(3, 6);

let result = addition(5, 6);

function addition(a, b) {
  console.log("Starting the operation");
  return a + b;
}

console.log(result);

const myAdditionFunction = function (c, d) {
  console.log("New way of function");
  return c + d;
};

console.log(myAdditionFunction(4, 8));
console.log(typeof myAdditionFunction);

let myAddfn = (e, f) => {
  console.log("arrow function");
  return e + f;
};

console.log(myAddfn(10, 20))
