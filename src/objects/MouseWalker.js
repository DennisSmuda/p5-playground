export default class Walker {
  constructor(sk, x, y) {
    this.sk = sk;
    this.x = x;
    this.y = y;
    console.log("Make Walker", this.x);
  }

  update() {
    const chance = this.sk.random();
    let stepX = Math.floor(this.sk.random(3) - 1);
    let stepY = Math.floor(this.sk.random(3) - 1);

    const { mouseX, mouseY } = this.sk;
    const mouseStepX = this.x - mouseX;
    const mouseStepY = this.y - mouseY;

    if (chance < 0.5) {
      this.x += stepX;
      this.y += stepY;
    } else {
      if (mouseStepX < 0) {
        this.x += 1;
      } else if (mouseStepX > 0) {
        this.x -= 1;
      }

      if (mouseStepY < 0) {
        this.y += 1;
      } else if (mouseStepY > 0) {
        this.y -= 1;
      }
    }
    // console.log("Update", mouseStepX, mouseStepY);
  }

  draw() {
    // console.log("Draw Circle");
    this.sk.stroke("white");
    this.sk.strokeWeight(2);

    this.sk.point(this.x, this.y);
    // this.sk.ellipse(this.x, this.y, 64);
  }
}
