import MassMover from "../objects/MassMover";
import { flashBackground, getRandomColor } from "../utils/colors";

const forceSketch = (sk) => {
  const movers = [];
  const { innerWidth: width, innerHeight: height } = window;
  const wind = sk.createVector(1, 0);
  const gravity = sk.createVector(0, 10);
  const color = getRandomColor(sk);

  sk.setup = () => {
    sk.createCanvas(width, height);
    flashBackground(sk);

    movers.push(new MassMover(sk, width / 2, height / 2));
  };

  sk.draw = () => {
    flashBackground(sk);

    movers.forEach((mover) => {
      mover.update();
      mover.applyForce(gravity);
      mover.draw();
    });
  };

  sk.stop = () => {
    sk.noLoop();
    sk.mousePressed = null;
  };
};

export { forceSketch };
