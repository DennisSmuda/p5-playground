import * as p5 from "p5";

import Walker from "../objects/Walker";
import MouseWalker from "../objects/MouseWalker";

let randomWalker = (sk) => {
  const objects = [];
  const { innerWidth: width, innerHeight: height } = window;

  sk.setup = () => {
    sk.frameRate(24);
    sk.createCanvas(width, height);
    sk.background(30);

    objects.push(new Walker(sk, width / 2, height / 2));
    objects.push(new Walker(sk, width / 2, height / 2));
    objects.push(new Walker(sk, width / 2, height / 2));
    objects.push(new Walker(sk, width / 4, height / 4));
    // objects.push(new MouseWalker(sk, width / 3, height / 3));
  };

  sk.draw = () => {
    // sk.background(40);

    objects.forEach((obj) => {
      obj.update();
      obj.draw();
    });
  };
};

const createSketch = () => new p5(randomWalker);

export { createSketch };
