const age = 19;

if (age > 19) {
  console.log("You can drive");
} else {
  console.log("You can not drive");
}

const day = 40;
console.log("Calculating");

if (day == 1) {
  console.log("Sunday");
} else if (day == 2) {
  console.log("Monday");
} else if (day == 3) {
  console.log("Tuesday");
} else if (day == 4) {
  console.log("Wednesday");
} else if (day == 5) {
  console.log("Thursday");
} else if (day == 6) {
  console.log("Friday");
} else if (day == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid Day");
}

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}

// logical operators

const driveAge = 19;
const isSkilled = true;

if (driveAge > 19 && driveAge < 40) {
  console.log("You can drive");
} else {
  console.log("you cannot drive");
}

if ((driveAge > 19 && driveAge < 40) || isSkilled) {
  console.log("You can drive");
} else {
  console.log("you cannot drive");
}

if (!(age > 19)) {
  console.log("You can drive");
} else {
  console.log("you cannot drive");
}
