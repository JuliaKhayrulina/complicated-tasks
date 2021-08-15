'use strict';

document.querySelector('button').addEventListener('click', () => {
  let str = '';
  for (let i = 0; i < 7; i++) {
    let num = Math.ceil(Math.random() * (9 - 1) + 1);
    str += num;
  }
  let toNumber = +str;
  let color = toNumber.toString(16);
  document.querySelector('p').textContent = color;
  document.body.style.backgroundColor = `#${color}`;
});
