const things = ['red', 'green', 'blue'];

function getThings() {
  setTimeout(() => {
    return things;
  }, 2000);
}

const result = getThings();
console.log('result ===', result);
