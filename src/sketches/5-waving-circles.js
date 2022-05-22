import { flashBackground } from "../utils/colors";
import Circle from "../objects/MouseScaleCircle";

const wavingCircleSketch = (sk) => {
  const circles = [];
  let count = 0;
  const { innerWidth: width, innerHeight: height } = window;
  const amplitude = 80;

  sk.setup = () => {
    sk.createCanvas(width, height);
    flashBackground(sk);

    for (let x = 0; x <= width + 32; x += 16) {
      circles.push(new Circle(sk, x, height / 2));
    }
    for (let x = 0; x <= width + 32; x += 16) {
      circles.push(new Circle(sk, x, height / 2));
    }
    for (let x = 0; x <= width + 32; x += 16) {
      circles.push(new Circle(sk, x, height / 2));
    }
    // circles.push(new Circle(sk, width / 2, height / 2));
  };

  sk.draw = () => {
    flashBackground(sk);

    circles.forEach((circle, i) => {
      circle.update();
      circle.location.y = height / 2 + amplitude * sk.sin(count + i / 2);
      circle.draw();
    });

    count += 0.01;
  };

  sk.stop = () => {
    sk.noLoop();
    sk.draw = null;
    sk.mousePressed = null;
  };
};

export { wavingCircleSketch };
