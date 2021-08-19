function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= t) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
}

let logger = (args) => (document.querySelector('p').textContent = args);
let debouncedLogger = debounce(logger, 300);

function func() {
  let value = document.querySelector('input').value;
  debouncedLogger(value);
}

document.querySelector('input').addEventListener('input', func);
