const dogWalked = true;
const houseCleaned = true;
const trashTakenOut = true;

// walk the dog

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dogWalked) {
        resolve("You walked the dog!");
      } else {
        reject("You did not walk the dog!");
      }
    }, 1000);
  });
}

// clean the house
function cleanTheHouse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (houseCleaned) {
        resolve("You have cleaned the house!");
      } else {
        reject("You did not cleaned the house!");
      }
    }, 1500);
  });
}

// take out the trash

function TakeOutTheTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (trashTakenOut) {
        resolve("You took out the trash!");
      } else {
        reject("You did not taken out the trash!");
      }
    }, 1000);
  });
}

// Promise chaining

walkTheDog()
  .then((succeed) => {
    console.log(succeed);
    return cleanTheHouse();
  })
  .then((succeed) => {
    console.log(succeed);
    return TakeOutTheTrash();
  })
  .then((succeed) => {
    console.log(succeed);
    console.log("You have finished the chores!");
  })
  .catch((failed) => {
    console.error(failed);
  });
