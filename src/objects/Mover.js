export default class Mover {
  constructor(sk, x, y) {
    this.sk = sk;
    this.location = sk.createVector(x, y);
    this.velocity = sk.createVector(
      this.sk.random(-2, 2),
      this.sk.random(-2, 2)
    );

    const { innerWidth: width, innerHeight: height } = window;
    this.width = width;
    this.height = height;
  }

  update() {
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
