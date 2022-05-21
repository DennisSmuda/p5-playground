import Mover from "../objects/Mover";

const moverSketch = (sk) => {
  const objects = [];
  const { innerWidth: width, innerHeight: height } = window;
  sk.setup = () => {
    sk.createCanvas(width, height);
    sk.background(200, 100, 50, 1);
    sk.colorMode("hsl");

    objects.push(new Mover(sk, width / 3, height / 2));
    objects.push(new Mover(sk, width / 2, height / 2));
    objects.push(new Mover(sk, width / 2, height / 4));
    objects.push(new Mover(sk, width / 2, height / 3));
    objects.push(new Mover(sk, width - width / 4, height / 3));
  };

  sk.draw = () => {
    sk.background(255, 20, 10, 1);

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
