'use strict';

class DomElement {
  constructor(selector, height, width, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
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
    element.style.cssText = `
    height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
  `;
  }
}
const text = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quibusdam.'];
const newElem = new DomElement('#paragraph', 'auto', 500, '#bbe46a', 30, text);
const newElem2 = new DomElement('.block', 'auto', 300, 'rgb(228 106 222 / 50%)', 16, text);

newElem.createElement();
newElem2.createElement();
