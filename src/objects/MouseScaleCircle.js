import { Vector } from "p5";
import { getRandomColor } from "../utils/colors";

/**
 * Basic Circle Object
 */
export default class Circle {
  constructor(sk, x, y) {
    this.sk = sk;
    this.scale = 0;
    this.location = this.sk.createVector(x, y);
    this.color = getRandomColor(sk);
  }

  update() {
    const { mouseX, mouseY } = this.sk;
    const mouse = this.sk.createVector(mouseX, mouseY);
    const distance = Vector.sub(mouse, this.location);
    let targetScale = 300 / distance.mag() + 0.001;
    if (targetScale > 32) {
      targetScale = 32;
    }

    this.scale = this.sk.lerp(this.scale, targetScale, 0.1);
  }

  draw() {
    this.sk.noStroke();
    this.sk.fill(this.color);
    this.sk.ellipse(this.location.x, this.location.y, 4 + this.scale);
  }
}
