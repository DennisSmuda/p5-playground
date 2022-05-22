import { Vector } from "p5";
import { getRandomColor } from "../utils/colors";

/**
 * Basic Circle Object
 */
export default class Circle {
  constructor(sk, x, y) {
    this.sk = sk;
    this.scale = 1;
    this.location = this.sk.createVector(x, y);
    this.color = getRandomColor(sk);
  }

  update() {
    const { mouseX, mouseY } = this.sk;
    const mouse = this.sk.createVector(mouseX, mouseY);
    const distance = Vector.sub(mouse, this.location);
    const targetScale = 500 / distance.mag();

    this.scale = this.sk.lerp(this.scale, targetScale, 0.1);
    if (this.scale > 32) this.scale = 32;
  }

  draw() {
    this.sk.noStroke();
    this.sk.fill(this.color);
    this.sk.ellipse(this.location.x, this.location.y, 4 + this.scale);
  }
}
