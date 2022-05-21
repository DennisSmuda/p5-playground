import { flashBackground, getRandomColor } from "../utils/colors";

const forceSketch = (sk) => {
  const color = sk.color(sk.random(255));
  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
    flashBackground(sk);
  };

  sk.draw = () => {
    flashBackground(sk);
    sk.noStroke();
    sk.fill(color);
    sk.ellipse(sk.mouseX, sk.mouseY, 80, 80);
  };

  sk.stop = () => {
    sk.noLoop();
    sk.mousePressed = null;
  };
};

export { forceSketch };
