console.log("I am from Objects files");

const y = {
  name: "Praveen",
  age: 25,
  hobby: ["coading", "eating", "cycling"],
  foods: {
    sunday: "Pizza",
    monday: "burger",
    tuesday: {},
  },
};
y.isHuman = true;
console.log(y);
console.log(y.name);
console.log(y.hobby);

y.name = "Deepak";
console.log(y.name);
console.log(y["age"]);

const foodsKey = "foods";
console.log(y[foodsKey]);

const myObj = {
  age: 20,
  isHuman: true,
  hobbies: ["singing", "coding"],
};
console.log(myObj.hobbies[0]);

myObj.skill = "Coading";
console.log(myObj);

for (const key in myObj) {
  console.log(myObj[key]);
}

// this is a function that returens an object, hence called factory funcction
function getVehicle(type) {
  return {
    // type: type,
    type,
    wheels: 4,
  };
}

const myVehicle1 = getVehicle("Car");
const myVehicle2 = getVehicle();

myVehicle2.wheels = 3;
console.log(myVehicle1);
console.log(myVehicle2);

console.log(typeof myVehicle1);
console.log(getVehicle);

// object destruction ES6
const desObj = {
  name: "Praveen",
  age: 25,
  gender: "Male",
  hobby: ["coading", "eating", "cycling"],
  foods: {
    sunday: "Pizza",
    monday: "burger",
  },
};

desObj.walk = function () {
  console.log("person is walking");
};
desObj.walk();
console.log(desObj);

const { name: newName, age: myAge } = desObj;
const { gender } = desObj;
console.log(newName, myAge, gender);

talking(() => {
  console.log("I am shouting");
});

function talking(shouting) {
  console.log("I am talking");
  shouting();
}

// Json data to string
const jsonString = '{"name":"Praveen"}';

// convert Json into String
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

// convert string into json
const backToString = JSON.stringify(jsonObject);
console.log(backToString);
