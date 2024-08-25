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

//   orderPromise.then(
//     (message) => {
//       // onFulfilled handler
//       console.log(message); // Output if promise resolves
//     },
//     (error) => {
//       // onRejected handler
//       console.error(error); // Output if promise rejects
//     }
//   );

// .then(onFulfilled, onRejected): Handles both success and failure in one .then() call. Less flexible in separating handling for success and failure but works for simple cases.
// .then(onFulfilled).catch(onRejected): Handles success with .then() and failure with .catch(). Offers better readability and is more flexible, especially for promise chains where errors might need to be handled at different stages.
// Choosing between these approaches often depends on the complexity of your promise chain and your preference for error handling clarity.
