const num = Math.floor(Math.random() * 20);

prom = new Promise((resolve, reject) => {
  if (num <= 10) {
    return resolve("Yay! Number is in range!");
  } else {
    return reject(":( Number is out of range!");
  }
});

prom
  .then((onFulfilled) => {
    console.log(onFulfilled);
    console.log(`Number:${num}`);
  })
  .catch((onRejected) => {
    console.error(onRejected);
    console.log(`Number:${num}`);
  });
