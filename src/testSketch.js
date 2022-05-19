import * as p5 from "p5";

let s = (sk) => {
  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
    sk.background(40);
  };

  sk.draw = () => {
    sk.ellipse(50, 50, 80, 80);
    // ellipse(50, 50, 80, 80);
    // console.log("draw");
    sk.rect(10, 12, 32, 32);
    // sk.fill(80);
    // sk.stroke(200);
    sk.ellipse(sk.mouseX, sk.mouseY, 80, 80);
  };
};

const createSketch = () => new p5(s);

export { createSketch };
