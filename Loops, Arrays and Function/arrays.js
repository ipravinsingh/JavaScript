const words = ["Ram-Ram", "Namaste", "Hello", "hi", 23, true];
const words1 = new Array(4, 1, 6, "hi", 3);
const sorting = ["zisha", "yanish", "Manisha", "Anjali"];
const spliceFn = ["Delete1", "Delete2", "Delete3", "Delete4", "Delete5"];
const sortList = [10, 4, 23];
words[4] = "added new in array";
// words[7] = "HariOm";

console.log(words);
console.log(words1);
console.log(words.length);
console.log(words[2]);

// Push
words.push("Added new Array using push");
console.log(words);

// Pop
words.pop();
console.log(words);

// Normal for loop
for (let i = 0; i < words.length; i++) {
  console.log("Normal for loop", words[i]);
}

//for in Loop
for (let name in words) {
  console.log("forEach loop", words[name]);
}

// Sort
sorting.sort();
console.log("Sorting", sorting);

// includes
const isPresent = words.includes("Hello");
const isPresentNot = words.includes("Hello1");
console.log(isPresent, isPresentNot);

//index
const index = words.indexOf("hi");
const index1 = words.indexOf("bye");
console.log(index, index1);

//splice
spliceFn.splice(1, 2);
console.log(spliceFn);

//splice removing and adding new element
spliceFn.splice(0, 1, "Add new element using Splice");
console.log(spliceFn);

// splice adding new element in middle
spliceFn.splice(2, 0, "Shivam added whitout dleat");
console.log(spliceFn);

//sort
sortList.sort();
console.log(sortList);
