const a = [1, 2, 3, 4, 5, 6];

function filterNumbers(conditionFunction) {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    if (conditionFunction(a[i])) {
      b.push(a[i]);
    }
  }
  return b;
}

function isEven(num) {
  return num % 2 == 0;
}
function idOdd(num) {
  return num % 2 != 0;
}

const evenNumbers = filterNumbers(isEven);
const oddNumbers = filterNumbers(idOdd);
const threeDivFn = filterNumbers((num) => {
  return num % 3 == 0;
});

console.log(evenNumbers);
console.log(oddNumbers);
console.log(threeDivFn);
