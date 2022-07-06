const DomElement = function (selector = null, height = null, width) {
  this.selector = null;
  this.height = null;
  this.width = null;
  this.bg = null;
  this.fontSize = null;
};
DomElement.prototype.createElement = function () {};

const domEl = new DomElement();
