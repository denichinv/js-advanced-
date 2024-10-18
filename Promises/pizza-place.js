const pizzaInventory = {
  margarita: 20,
  pepperoni: 15,
  hawaiian: 12,
  vegetarian: 21,
};

function makeOrder(type, qty) {
  return new Promise((resolve, reject) => {
    if (pizzaInventory[type] >= qty) {
      pizzaInventory[type] -= qty;
      resolve(`"Order Proceed: ${qty} ${type}(s)`);
    } else {
      reject("Sorry! \n We don't have in stock");
    }
  });
}

function orderPending() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Order is on the way!"), 1000);
  });
}

async function orderProcess(type, qty) {
  try {
    const makingOrder = await makeOrder(type, qty);
    console.log(makingOrder);

    const orderStatus = await orderPending();
    console.log(orderStatus);
  } catch {
    console.error("We don't have it in stock. \n Sorry for the inconvenience!");
  }
}

async function processAllOrders() {
  await orderProcess("margarita", 10);
  await orderProcess("margarita", 5);
  await orderProcess("margarita", 5);
  await orderProcess("margarita", 5);
}

processAllOrders();
