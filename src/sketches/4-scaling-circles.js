import { flashBackground } from "../utils/colors";
import Circle from "../objects/MouseScaleCircle";

const circleSketch = (sk) => {
  const circles = [];
  const { innerWidth: width, innerHeight: height } = window;

  sk.setup = () => {
    sk.createCanvas(width, height);
    flashBackground(sk);

    for (let x = 0; x <= width + 32; x += 32) {
      for (let y = 0; y <= height + 32; y += 32) {
        circles.push(new Circle(sk, x, y));
      }
    }
  };

  sk.draw = () => {
    flashBackground(sk);

    circles.forEach((circle) => {
      circle.update();
      circle.draw();
    });
  };

  sk.stop = () => {
    sk.noLoop();
    sk.draw = null;
    sk.mousePressed = null;
  };
};

export { circleSketch };
