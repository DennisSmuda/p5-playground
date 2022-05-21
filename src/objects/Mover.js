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
    this.mouse = sk.createVector(0, 0);
    this.dir = sk.createVector(0, 0);
    this.maxSpeed = sk.random(9, 11);
    this.color = sk.color(sk.random(255), sk.random(100), 50, 1);

    const { innerWidth: width, innerHeight: height } = window;
    this.width = width;
    this.height = height;
  }

  update() {
    this.mouse = this.sk.createVector(this.sk.mouseX, this.sk.mouseY);
    this.dir = p5.Vector.sub(this.mouse, this.location);
    this.dir.normalize();
    this.dir.mult(0.5);
    this.accelleration = this.dir;
    this.velocity.add(this.accelleration).limit(this.maxSpeed);
    this.location.add(this.velocity);
    this.checkEdges();
  }

  draw() {
    this.sk.noStroke();
    this.sk.fill(this.color);
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
