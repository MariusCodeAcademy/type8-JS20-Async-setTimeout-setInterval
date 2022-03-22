const h1El = document.querySelector('h1');
function changeH1(newTitle) {
  h1El.textContent = newTitle;
}

// changeH1('whaaaat');

// setTimeout(kokia fn vygdysim, uz kiek laiko ms, arg1, arg2, ,,,,)
// setTimeout(() => changeH1('Hello'), 3000);
setTimeout(changeH1, 3000, 'Hello');
