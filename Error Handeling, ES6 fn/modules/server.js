import { addition } from "./utility.js";
import { subtraction } from "./utility.js";
import { addition as addfn, divide } from "./utility.js";
import multiply from "./utility.js";

const add = addition(10, 20);
const sub = subtraction(30, 20);
const mult = multiply(10, 20);
const div = divide(30 , 3);

const addAnotherWay = addfn(20, 30);

console.log(
  "result of add ",
  add,
  "result of sub",
  sub,
  "result of multiply",
  mult,
  "result of divide",
  div
);
console.log("add another way", addAnotherWay);
