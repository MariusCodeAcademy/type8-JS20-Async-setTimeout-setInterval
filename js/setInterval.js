// pradedam intervalu cikla
const int1 = setInterval(printL, 1000);
// sustabdom intervalu cikla
// clearInterval(int1);
function printL() {
  console.log('hello');
}
setTimeout(clearInterval, 5000, int1);

const h2El = document.querySelector('h2');
function getTime() {
  const now = new Date();
  const time = now.toLocaleTimeString('lt');
  h2El.textContent = time;
}

setInterval(getTime, 1000);
