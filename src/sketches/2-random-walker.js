import p5 from "p5";

import Walker from "../objects/Walker";

let randomWalker = (sk) => {
  const objects = [];
  const { innerWidth: width, innerHeight: height } = window;

  sk.setup = () => {
    sk.createCanvas(width, height);
    sk.background(200, 100, 50, 1);
    sk.colorMode("hsl");

    objects.push(new Walker(sk, width / 2, height / 2));
    objects.push(new Walker(sk, width / 2, height / 2));
    objects.push(new Walker(sk, width / 2, height / 2));
    objects.push(new Walker(sk, width / 4, height / 4));
    objects.push(new Walker(sk, width, height));
    objects.push(new Walker(sk, 0, 0));
  };

  sk.draw = () => {
    objects.forEach((obj) => {
      obj.update();
      obj.draw();
    });

    sk.mousePressed = () => {
      // console.log("jo");
      sk.background(256, 22, 10, 1);
    };
  };

  sk.stop = () => {
    sk.noLoop();
    sk.mousePressed = null;
  };
};

const createSketch = () => new p5(randomWalker);

export { createSketch };
