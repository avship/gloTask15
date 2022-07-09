document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "hidden";

  const DomElement = function (
    selector = "#test",
    height = 100,
    width = 100,
    bg = "red",
    fontSize = "18"
  ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.item = null;
    this.moveId = null;
  };
  DomElement.prototype.createElement = function () {
    let text = "";
    this.item = null;
    if (this.selector.slice(0, 1) === ".") {
      this.item = document.createElement("div");
      this.item.classList.add(this.selector);
      text = "div test";
    } else if (this.selector.slice(0, 1) === "#") {
      this.item = document.createElement("p");
      this.item.setAttribute(
        "id",
        this.selector.slice(1, this.selector.length)
      );
      text = "p element";
    }
    this.item.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; position: absolute; top: 100px; left: 100px; line-height: 2.5; text-align: center;`;
    this.item.textContent = text;
    document.body.append(this.item);
  };
  DomElement.prototype.moveLeft = function () {
    if (parseInt(this.item.style.left) - 10 <= 0) {
      this.item.style.left = `${
        document.body.clientWidth + parseInt(this.item.style.width)
      }px`;
    }
    this.item.style.left = `${parseInt(this.item.style.left) - 10}px`;
  };
  DomElement.prototype.moveRight = function () {
    if (parseInt(this.item.style.left) + 10 > document.body.clientWidth) {
      this.item.style.left = `${-parseInt(this.item.style.width)}px`;
    }
    this.item.style.left = `${parseInt(this.item.style.left) + 10}px`;
  };
  DomElement.prototype.moveUp = function () {
    if (parseInt(this.item.style.top) + parseInt(this.item.style.height) < 0) {
      this.item.style.top = `${
        document.documentElement.clientHeight + parseInt(this.item.style.height)
      }px`;
    }
    this.item.style.top = `${parseInt(this.item.style.top) - 10}px`;
  };
  DomElement.prototype.moveDown = function () {
    if (parseInt(this.item.style.top) > document.documentElement.clientHeight) {
      this.item.style.top = `${-parseInt(this.item.style.height)}px`;
    }
    this.item.style.top = `${parseInt(this.item.style.top) + 10}px`;
  };
  const domEl = new DomElement();
  domEl.createElement();
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowUp":
        domEl.moveUp();
        break;
      case "ArrowDown":
        domEl.moveDown();
        break;
      case "ArrowLeft":
        domEl.moveLeft();
        break;
      case "ArrowRight":
        domEl.moveRight();
        break;
    }
  });
});
