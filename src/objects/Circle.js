/**
 * Basic Circle Object
 */
export default class Circle {
  constructor(sk, x, y) {
    this.sk = sk;
    this.x = x;
    this.y = y;
  }

  update() {}

  draw() {
    this.sk.ellipse(this.x, this.y, 64);
  }
}
