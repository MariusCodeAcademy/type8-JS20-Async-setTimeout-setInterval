function fn1() {
  console.log('Number One 1');
}
function fn2(cb) {
  setTimeout(() => {
    console.log('Number Two 2');
    cb();
  }, 1500);
}
function fn3() {
  console.log('Number Three 3');
}
// debugger;
fn1();
fn2(fn3);
// fn3();
