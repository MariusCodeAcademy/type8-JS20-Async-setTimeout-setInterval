// perkam lektuvo bilietus internetu

// new Promise((resove, reject) => {})
// Promise status gali buti, Pending, Resolve, Reject

function buyFlyTickets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;

      if (error) {
        // klaida yra ir nepavyko (reject)
        reject('Sorry payment declined');
      } else {
        // klaidos nera sekme (resove)
        resolve('Thank you, have a nice trip');
      }
    }, 3000);
  });
}
// const promise = buyFlyTickets();
// promise.then((successMsg) => console.log(successMsg));
// promise.catch((errMsg) => console.log(errMsg));
// console.log('promise ===', promise);
// successMsg ==='Thank you, have a nice trip'

buyFlyTickets()
  .then((successMsg) => console.log(successMsg))
  .catch((errMsg) => console.log(errMsg));
