// for
for (let count = 0; count < 10; count++) {
  console.log(count, "for");
}

// while loop

let i = 0;
let n = 10;

while (i <= n) {
  console.log(i, "while");
  i++;
}

//do while
let doI = 0;
let doN = 10;

do {
  console.log(doI, "doWhile");
  doI++;
} while (doI < doN);

// break

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log("break", i);
}

// continue
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log("continue1", i);
}

// continue
for (let i = 0; i <= 5; i++) {
  if (i == 3 || i == 1) {
    continue;
  }
  console.log("continue2", i);
}
