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
  listener(key) {
    let elem = document.getElementsByClassName(`${this.selector}`)[0];
    let top = parseInt(window.getComputedStyle(elem).top);
    let bottom = parseInt(window.getComputedStyle(elem).bottom);
    let left = parseInt(window.getComputedStyle(elem).left);
    let right = parseInt(window.getComputedStyle(elem).right);

    switch (key) {
      case 'ArrowUp':
        elem.style.top = top + 10 + 'px';
        break;
      case 'ArrowDown':
        elem.style.bottom = bottom + 10 + 'px';
        break;
      case 'ArrowLeft':
        elem.style.left = left + 10 + 'px';
        break;
      case 'ArrowRight':
        elem.style.right = right + 10 + 'px';
        break;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const text = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quibusdam.'];
  const objCss = {
    position: 'absolute',
  };
  const square = new DomElement('.square', 100, 100, '#bbe46a', 30, '', objCss);
  square.createElement();
  document.addEventListener('keydown', function (e) {
    square.listener(e.key);
  });
});
