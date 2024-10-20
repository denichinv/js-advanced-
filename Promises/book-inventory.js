const bookInventory = {
  "To Kill a Mockingbird": 12,
  "The Great Gatsby": 10,
  "The Lord of the Rings": 6,
  "Don Quixote": 8,
  "War and Peace": 21,
};

function processPayment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Payment processed successfully!");
    }, 2000);
  });
}

function placingOrder(orders) {
  return new Promise((resolve, reject) => {
    let unavailableBooks = [];

    orders.forEach(({ bookTitle, qty }) => {
      if (!bookInventory[bookTitle] || bookInventory[bookTitle] < qty) {
        unavailableBooks.push(bookTitle);
      }
    });

    if (unavailableBooks.length > 0) {
      reject(
        `The following books are not available or have insufficient stock: ${unavailableBooks.join(
          ", "
        )}`
      );
    } else {
      orders.forEach(({ bookTitle, qty }) => {
        bookInventory[bookTitle] -= qty;
      });
      resolve("Order placed successfully for all books!");
    }
  });
}

function shippingOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order is on its way!");
    }, 3000);
  });
}

async function orderProcess(orders) {
  try {
    const paymentStatus = await processPayment();
    console.log(paymentStatus);

    const orderPlaced = await placingOrder(orders);
    console.log(orderPlaced);

    const orderShipped = await shippingOrder();
    console.log(orderShipped);
  } catch (error) {
    console.error("Sorry for the inconvenience!", error);
  }
}

orderProcess([
  { bookTitle: "Don Quixote", qty: 2 },
  { bookTitle: "The Great Gatsby", qty: 3 },
  { bookTitle: "War and Peace", qty: 1 },
]);
