export default class Walker {
  constructor(sk, x, y) {
    this.sk = sk;
    this.x = x;
    this.y = y;
    console.log("Make Walker", sk);
    this.tx = Math.random() * 1000;
    this.ty = Math.random() * 1000;
    this.color = this.sk.color(
      this.sk.random(255),
      this.sk.random(100),
      // this.sk.random(50)
      50
    );
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
    // console.log("Draw Circle");
    this.sk.stroke(this.color);
    this.sk.strokeWeight(2);

    this.sk.point(this.x, this.y);
    // this.sk.ellipse(this.x, this.y, 64);
  }
}
