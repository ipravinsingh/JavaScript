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

const found = a.find((element) => element % 5 == 0);

console.log(a);
console.log(found);

const students = [
  {
    name: "Praveen",
    marks: 99,
  },
  {
    name: "Karan",
    marks: 98,
  },
  {
    name: "Arjun",
    marks: 49,
  },
  {
    name: "Priyanshu",
    marks: 98,
  },
];

const findfn = students.find((element) => {
  return element.marks > 50;
});
console.log(findfn);

const mapfn = students.map((element) => {
  if (element.marks < 50) {
    element.isPassed = false;
  } else {
    element.isPassed = true;
  }
  return element;
});

const filterfn = students.filter((element) => {
  return element.marks > 50;
});

console.log(mapfn);
console.log(filterfn);

// spread operator

function greet(...a) {
  console.log("hello", a);
  console.log(a[0]);
}
greet("Praveen", "Karan", 12);

const arr1 = [1, 2, 3];
const arr2 = [4, ...a, 5, 6];

console.log(arr2);

const animals = {
  name: "Simba",
  age: 23,
};

const fullinformation = {
  ...animals,
  address: "pahaad",
  legs: 4,
};

console.log(fullinformation);
