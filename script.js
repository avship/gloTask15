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
  let text = "";
  let item = null;
  if (this.selector.slice(0, 1) === ".") {
    item = document.createElement("div");
    item.classList.add(this.selector);
    text = "div test";
  } else if (this.selector.slice(0, 1) === "#") {
    item = document.createElement("p");
    item.setAttribute("id", this.selector.slice(1, this.selector.length));
    text = "p element";
  }
  item.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
  item.textContent = text;
  document.body.append(item);
};

const domEl = new DomElement(
  (selector = "#test"),
  (height = 50),
  (width = 300),
  (bg = "red"),
  (fontSize = "18")
);
domEl.createElement();
