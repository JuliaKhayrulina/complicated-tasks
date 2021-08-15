'use strict';

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
  createElement() {
    this.selector = this.selector.trim();
    let element;

    if (this.selector[0] === '.') {
      element = document.createElement('div');
      element.classList.add(`${this.selector}`);
      element.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Ad, dolores nihil dolorum optio eligendi modi commodi facere vero omnis illum.`;
      document.body.append(element);
      this.createStyles(element);
    }
    if (this.selector[0] === '#') {
      element = document.createElement('p');
      element.id = `${this.selector}`;
      element.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Ad, dolores nihil dolorum optio eligendi modi commodi facere vero omnis illum.`;
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

const newElem = new DomElement('        #paragraph', 'auto', 500, '#bbe46a', 30);
const newElem2 = new DomElement('        .block', 'auto', 300, 'rgb(228 106 222 / 50%)', 16);

newElem.createElement();
newElem2.createElement();
