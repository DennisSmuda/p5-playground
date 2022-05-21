import { Vector } from "p5";
import { getRandomColor } from "../utils/colors";

export default class BasicMover {
  constructor(sk, x, y) {
    this.sk = sk;
    this.location = sk.createVector(x, y);
    this.accelleration = sk.createVector(0, 0);
    this.velocity = sk.createVector(0, 0);
    this.color = getRandomColor(sk);
    this.mass = sk.random(4, 16);
    this.maxSpeed = this.mass;

    const { innerWidth: width, innerHeight: height } = window;
    this.width = width;
    this.height = height;
  }

  applyForce(force) {
    const f = Vector.div(force, this.mass);
    this.accelleration.add(f);
  }

  draw() {
    this.sk.noStroke();
    this.sk.fill(this.color);
    this.sk.ellipse(this.location.x, this.location.y, this.mass);
  }

  wrapAroundScreen() {
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

  bounceEdges() {
    if (this.location.x > this.width) {
      this.location.x = this.width;
      this.velocity.x *= -1;
    } else if (this.location.x < 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    }

    if (this.location.y > this.height) {
      // console.log("Bounce", this.location.y, this.height);
      this.location.y = this.height;
      this.accelleration.y *= -1;
    }
  }
}
