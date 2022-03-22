const things = ['red', 'green', 'blue'];
const ulEl = document.getElementById('ul');
let readyColors = [];

function getThings(callback) {
  setTimeout(() => {
    readyColors = things;
    callback();
  }, 2000);
}

function drawThings() {
  const stringEls = readyColors
    .map((col) => {
      return `<li>${col}</li>`;
    })
    .join('');
  ulEl.innerHTML = stringEls;
}

getThings(drawThings);
// drawThings();
console.log('readyColors ===', readyColors);
