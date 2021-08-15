'use strict';

class DomElement {
  constructor(selector, height, width, bg, fontSize, text, objCss) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
    this.objCss = objCss;
  }
  createElement() {
    this.selector = this.selector.trim();
    let element;

    if (this.selector[0] === '.') {
      element = document.createElement('div');
      element.classList.add(`${this.selector}`);
      element.textContent = this.text;
      document.body.append(element);
      this.createStyles(element);
    }
    if (this.selector[0] === '#') {
      element = document.createElement('p');
      element.id = `${this.selector}`;
      element.textContent = this.text;
      document.body.append(element);
      this.createStyles(element);
    }
  }
  createStyles(element) {
    if (this.objCss) {
      for (let key in this.objCss) {
        element.style.cssText += `${key}: ${this.objCss[key]}`;
      }
    }
    element.style.cssText += `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;
  `;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const text = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quibusdam.'];
  const objCss = {
    position: 'absolute',
    top: '0px',
    left: '0px',
  };
  const square = new DomElement('.square', 100, 100, '#bbe46a', 30, '', objCss);

  square.createElement();

  document.addEventListener('keydown', function (e) {
    listener(e.key);
  });

  function listener(key) {
    let elem = document.getElementsByClassName(`${square.selector}`)[0];

    switch (key) {
      case 'ArrowUp':
        elem.style.top = parseInt(elem.style.top) - 10 + 'px';
        break;
      case 'ArrowDown':
        elem.style.top = parseInt(elem.style.top) + 10 + 'px';
        break;
      case 'ArrowLeft':
        elem.style.left = parseInt(elem.style.left) - 10 + 'px';
        break;
      case 'ArrowRight':
        elem.style.left = parseInt(elem.style.left) + 10 + 'px';
        break;
    }
  }
});
