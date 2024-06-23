function orderPizza() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const isAvailable = false;
      if (isAvailable) {
        const pizza = "🍕";
        resolve(pizza);
      } else {
        reject("we don't have pizza");
      }
    }, 2000);
  });
}

const pizzaPromise = orderPizza();

pizzaPromise
  .then((pizza, error) => {
    console.log("My pizza", pizza);
  })
  .catch((error) => {
    console.log("error occurred ", error);
  });

//railway ticket
//select seats
//enter name
//payments

bookRailwayTicket();

function bookRailwayTicket() {
  const seat = "A3";
  const name = "Praveen";
  const payment = "1000";
  selectSeats(seat)
    .then((seat) => {
      enterDetails(name, seat);
    })
    .then(() => {
      submitPayment(name, seat, payment);
    });
}

function selectSeats(seat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("seats confirmed", seat);
      resolve(`confirmed" ${seat}`);
    }, 2000);
  });
}

function enterDetails(name, seat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("name ", name, "with", seat);
      resolve(`confirmed ${name} ${seat} `);
    }, 2000);
  });
}

function submitPayment(name, seat, payment) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("name ", name, "with", seat, "with", payment);
      resolve(`confirmed ${name} ${seat} ${payment} `);
    }, 2000);
  });
}
