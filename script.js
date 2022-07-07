const DomElement = function (
  selector = null,
  height = null,
  width = null,
  bg = null,
  fontSize = null
) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};
DomElement.prototype.createElement = function () {
  console.log(this);
};

const domEl = new DomElement(".test");
domEl.createElement();
