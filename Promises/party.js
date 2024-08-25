function sendInvitations() {
  const invitationsSent = true;
  const randomTime = Math.floor(Math.random() * 3) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (invitationsSent) {
        resolve("Invitations sent!");
      } else {
        reject("Failed to send invitations!");
      }
    }, randomTime);
  });
}
function prepareVenue() {
  const venuePrepared = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (venuePrepared) {
        resolve("Venue prepared!");
      } else {
        reject("Failed to prepare venue!");
      }
    }, 2000);
  });
}
function orderCatering() {
  const cateringOrdered = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cateringOrdered) {
        resolve("Catering ordered!");
      } else {
        reject("Failed to order catering!");
      }
    }, 1500);
  });
}

async function readyForParty() {
  try {
    const invitations = await sendInvitations();
    console.log(invitations);
    const venue = await prepareVenue();
    console.log(venue);
    const catering = await orderCatering();
    console.log(catering);

    console.log("Ready for party!");
  } catch (error) {
    console.error(error);
  }
}
readyForParty();
