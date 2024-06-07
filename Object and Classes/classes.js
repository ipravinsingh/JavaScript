const student = {
  name: "Praveen",
  marks: 25,
  talk: function () {
    console.log(`my marks are ${this.marks}`);
  },
};
student.talk();

class Vehicle {
  constructor(model) {
    this.model = model;
    this.wheels = 4;
  }
  start() {
    console.log("vehicle starting");
  }
}

const obj1 = new Vehicle("Sedan");
const obj2 = new Vehicle("Hatchback");

console.log(obj1);
console.log(obj2);
console.log(typeof obj1);

obj1.start();
