export default class Walker {
  constructor(sk, x, y) {
    this.sk = sk;
    this.x = x;
    this.y = y;
    console.log("Make Walker", sk);
  }

  update() {
    let stepX = Math.floor(this.sk.random(3) - 1);
    let stepY = Math.floor(this.sk.random(3) - 1);

    this.x += stepX;
    this.y += stepY;
    // console.log("Update", dir);
  }

  draw() {
    // console.log("Draw Circle");
    this.sk.stroke("white");
    this.sk.strokeWeight(2);

    this.sk.point(this.x, this.y);
    // this.sk.ellipse(this.x, this.y, 64);
  }
}
