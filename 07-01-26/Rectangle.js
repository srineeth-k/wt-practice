//Design a 'Rectangle' class with getters for area and perimeter, and setters for width and height validation.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(w) {
    if (w > 0) this._width = w;
  }
  set height(h) {
    if (h > 0) this._height = h;
  }
  get area() {
    return this._width * this._height;
  }
  get perimeter() {
    return 2 * (this._width + this._height);
  }
}

let rect=new Rectangle(5,10);
console.log("Permimeter :",rect.perimeter);
console.log("Area :",rect.area);
