/**
 * Basic Circle Object
 */
export default class Circle {
  constructor(sk, x, y) {
    this.sk = sk;
    this.x = x;
    this.y = y;
    console.log("Make Circle");
  }

  update() {
    // this.x += 1;
    // console.log("Update Circle");
  }

  draw() {
    // console.log("Draw Circle");
    this.sk.ellipse(this.x, this.y, 64);
  }
}
