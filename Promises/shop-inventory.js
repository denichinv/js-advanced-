const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

function orderSunglasses() {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

orderPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

