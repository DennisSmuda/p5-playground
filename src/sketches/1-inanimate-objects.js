import * as p5 from "p5";

import Circle from "../objects/Circle";

let inanimateObjectsSketch = (sk) => {
  const objects = [];
  const { innerWidth: width, innerHeight: height } = window;

  sk.setup = () => {
    sk.createCanvas(width, height);
    sk.background(40);

    objects.push(new Circle(sk, width / 2, height / 2));

    // console.log("sk", sk);
  };

  sk.draw = () => {
    objects.forEach((obj) => {
      obj.update();
      obj.draw();
    });
  };
};

const createSketch = () => new p5(inanimateObjectsSketch);

export { createSketch };
