document.addEventListener("DOMContentLoaded", function () {
  class DomElement {
    constructor(height = 100, width = 100, bg = "red", fontSize = null) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.figure = document.createElement("div");
      this.figure.classList.add("test");
      this.figure.classList.add(this.selector);
      this.figure.style.position = "absolute";
      this.figure.style.height = `${this.height}px`;
      this.figure.style.width = `${this.width}px`;
      this.figure.style.background = this.bg;
      this.figure.style.top = "100px";
      this.figure.style.left = "100px";
      document.body.append(this.figure);
    }
    goUp() {
      this.figure.style.top = `${parseInt(this.figure.style.top) - 10}px`;
    }
    goDown() {
      this.figure.style.top = `${parseInt(this.figure.style.top) + 10}px`;
    }
    goLeft() {
      this.figure.style.left = `${parseInt(this.figure.style.left) - 10}px`;
    }
    goRight() {
      this.figure.style.left = `${parseInt(this.figure.style.left) + 10}px`;
    }
  }
  const square = new DomElement();
  document.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "ArrowUp":
        square.goUp();
        break;
      case "ArrowDown":
        square.goDown();
        break;
      case "ArrowLeft":
        square.goLeft();
        break;
      case "ArrowRight":
        square.goRight();
        break;
    }
  });
});
