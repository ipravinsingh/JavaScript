const a = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function isEven(num) {
  return num % 2 == 0;
}

function isOdd(num) {
  return num % 2 != 0;
}

const b = a.filter((element, index, arr) => {
  return element % 3 == 0;
});
const c = a.filter(isEven);
console.log(b);
console.log(c);

function square(num) {
  return num * num;
}

function negative(num) {
  return -num;
}

const d = a.map(square);
const e = a.map(negative);
console.log(d);
console.log(e);

const f = a.map((num) => num);
console.log(f);
