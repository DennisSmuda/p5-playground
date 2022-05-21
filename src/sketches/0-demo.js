const demoSketch = (sk) => {
  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
    sk.background(40);
  };

  sk.draw = () => {
    sk.background(40);
    sk.ellipse(sk.mouseX, sk.mouseY, 80, 80);
  };

  sk.stop = () => {
    sk.noLoop();
    sk.mousePressed = null;
  };
};

export { demoSketch };
