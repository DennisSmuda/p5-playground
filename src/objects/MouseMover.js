import { Vector } from "p5";
import BasicMover from "./BasicMover";

/**
 * Mover Class
 */
export default class MouseMover extends BasicMover {
  constructor(sk, x, y) {
    super(sk, x, y);
    this.mouse = sk.createVector(0, 0);
    this.dir = sk.createVector(0, 0);
  }

  update() {
    this.mouse = this.sk.createVector(this.sk.mouseX, this.sk.mouseY);
    this.dir = Vector.sub(this.mouse, this.location);
    this.dir.normalize();
    this.dir.mult(0.5);
    this.accelleration = this.dir;
    this.velocity.add(this.accelleration).limit(this.maxSpeed);
    this.location.add(this.velocity);
    this.wrapAroundScreen();
  }
}
