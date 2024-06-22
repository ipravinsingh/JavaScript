function orderPizza(myFunction) {
  getCheese((cheese) => {
    makeDough(cheese, (dough) => {
      bakePizza(dough, (pizza) => {
        myFunction(pizza);
      });
    });
  });
}

function getCheese(next) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log(`Sending the ${cheese}`);
    next(cheese);
  });
}

function makeDough(cheese, next) {
  setTimeout(() => {
    const dough = cheese + "🍩";
    console.log(`Sending the ${dough}`);
    next(dough);
  });
}

function bakePizza(dough, next) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    console.log(`Sending the ${pizza}`);
    next(pizza);
  });
}

function notifyMeOnSuccess(pizza) {
  console.log("here is my notification for", pizza);
}

// orderPizza((pizza) => {
//   console.log("here is my", pizza);
// });

orderPizza(notifyMeOnSuccess);

console.log("visited nani");

console.log("rest");
