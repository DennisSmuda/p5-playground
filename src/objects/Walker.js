import { getRandomColor } from "../utils/colors";

/**
 * Walker Class
 * -- "Walks across a 2d noise function"
 */
export default class Walker {
  constructor(sk, x, y) {
    this.sk = sk;
    this.x = x;
    this.y = y;
    this.tx = Math.random() * 1000;
    this.ty = Math.random() * 1000;
    this.color = getRandomColor(sk);
  }

  update() {
    let stepX = this.sk.map(this.sk.noise(this.tx), 0, 1, 0, window.innerWidth);
    let stepY = this.sk.map(
      this.sk.noise(this.ty),
      0,
      1,
      0,
      window.innerHeight
    );

    this.x = stepX;
    this.y = stepY;
    // console.log("Update", dir);
    this.tx += 0.005;
    this.ty += 0.005;
  }

  draw() {
    this.sk.stroke(this.color);
    this.sk.strokeWeight(2);

    this.sk.point(this.x, this.y);
  }
}
