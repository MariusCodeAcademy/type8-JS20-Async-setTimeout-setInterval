function fn1() {
  console.log('Number One 1');
}
function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Number Two 2');
      resolve();
    }, 1500);
  });
}
function fn3() {
  console.log('Number Three 3');
}
function fn4() {
  console.log('Number Four 4');
}
// debugger;
fn1();
fn2().then(() => {
  fn3();
  fn4();
});
// fn3();
