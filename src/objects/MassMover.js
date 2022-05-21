import BasicMover from "./BasicMover";

export default class MassMover extends BasicMover {
  constructor(sk, x, y) {
    super(sk, x, y);
  }

  update() {
    // this.accelleration = this.dir;
    // console.log("Update Mass mover ", this.accelleration);
    this.velocity.add(this.accelleration).limit(this.maxSpeed);
    this.location.add(this.velocity);
    this.bounceEdges();
    // this.accelleration.mult(0.5);
  }
}
