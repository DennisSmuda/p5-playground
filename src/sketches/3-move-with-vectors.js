import MouseMover from "../objects/MouseMover";
import { flashBackground } from "../utils/colors";

const moverSketch = (sk) => {
  const objects = [];
  const { innerWidth: width, innerHeight: height } = window;
  sk.setup = () => {
    sk.createCanvas(width, height);
    flashBackground(sk);

    objects.push(new MouseMover(sk, width / 3, height / 2));
    objects.push(new MouseMover(sk, width / 2, height / 2));
    objects.push(new MouseMover(sk, width / 2, height / 4));
    objects.push(new MouseMover(sk, width / 2, height / 3));
    objects.push(new MouseMover(sk, width / 2, height / 3));
    objects.push(new MouseMover(sk, width, height));
    objects.push(new MouseMover(sk, width - width / 4, height / 3));
  };

  sk.draw = () => {
    flashBackground(sk);

    objects.forEach((obj) => {
      obj.update();
      obj.draw();
    });
  };

  sk.stop = () => {
    sk.noLoop();
  };
};

export { moverSketch };
