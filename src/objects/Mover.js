import * as p5 from "p5";

/**
 * Mover Class
 */
export default class Mover {
  constructor(sk, x, y) {
    this.sk = sk;
    this.location = sk.createVector(x, y);
    this.accelleration = sk.createVector(0, 0);
    this.velocity = sk.createVector(0, 0);
    this.maxSpeed = 10;

    const { innerWidth: width, innerHeight: height } = window;
    this.width = width;
    this.height = height;
  }

  update() {
    this.accelleration = p5.Vector.random2D().limit(0.1); // this.sk.P5.Vector.random2d();
    this.velocity.add(this.accelleration).limit(this.maxSpeed);
    this.location.add(this.velocity);
    this.checkEdges();
  }

  draw() {
    this.sk.ellipse(this.location.x, this.location.y, 16);
  }

  checkEdges() {
    if (this.location.x > this.width) {
      this.location.x = 1;
    } else if (this.location.x < 0) {
      this.location.x = this.width;
    }

    if (this.location.y > this.height) {
      this.location.y = 1;
    } else if (this.location.y < 0) {
      this.location.y = this.height;
    }
  }
}
