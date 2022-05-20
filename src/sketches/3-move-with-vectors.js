import * as p5 from "p5";
import Mover from "../objects/Mover";

const demoSketch = (sk) => {
  const objects = [];
  const { innerWidth: width, innerHeight: height } = window;
  sk.setup = () => {
    sk.createCanvas(width, height);
    sk.background(40);
    objects.push(new Mover(sk, width / 2, height / 2));
    // objects.push(new Mover(sk, width / 2, height / 2));
  };

  sk.draw = () => {
    sk.background(40);
    objects.forEach((obj) => {
      obj.update();
      obj.draw();
    });
  };
};

const createSketch = () => new p5(demoSketch);

export { createSketch };
