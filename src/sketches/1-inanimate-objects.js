import Circle from "../objects/MouseScaleCircle";

let inanimateObjectsSketch = (sk) => {
  const objects = [];
  const { innerWidth: width, innerHeight: height } = window;

  sk.setup = () => {
    sk.createCanvas(width, height);
    sk.background(40);

    objects.push(new Circle(sk, width / 2, height / 2));
  };

  sk.draw = () => {
    objects.forEach((obj) => {
      obj.update();
      obj.draw();
    });
  };
};

export { inanimateObjectsSketch };
