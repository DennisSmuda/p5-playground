import * as p5 from "p5";
import Mover from "../objects/Mover";
import setTitle from "../utils/setTitle";

const demoSketch = (sk) => {
  setTitle("Moving Dots", "move your mouse around");
  const objects = [];
  const { innerWidth: width, innerHeight: height } = window;
  sk.setup = () => {
    sk.createCanvas(width, height);
    // sk.frameRate(60);
    sk.background(200, 100, 50, 1);
    sk.colorMode("hsl");
    objects.push(new Mover(sk, width / 3, height / 2));
    objects.push(new Mover(sk, width / 2, height / 2));
    objects.push(new Mover(sk, width / 2, height / 4));
    objects.push(new Mover(sk, width / 2, height / 3));
  };

  sk.draw = () => {
    sk.background(255, 20, 10, 1);

    objects.forEach((obj) => {
      obj.update();
      obj.draw();
    });
  };
};

const createSketch = () => new p5(demoSketch);

export { createSketch };
