'use strict';

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let interval;
let count = 0;

function oneDown() {
  interval = requestAnimationFrame(oneDown);
  count++;

  if (count < 450) {
    one.style.top = count + 'px';
    two.style.left = count * 2 + 'px';
  } else {
    cancelAnimationFrame(interval);
  }
  console.log(count);
}

let animate = false;
document.addEventListener('click', () => {
  if (animate) {
    interval = requestAnimationFrame(oneDown);
    let animate = false;
  } else {
    animate = true;
  }
});
