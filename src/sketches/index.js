import { walkerSketch } from "./2-random-walker";
import { moverSketch } from "./3-move-with-vectors";

const sketches = [
  {
    name: "random walks",
    description: "noise-based pseudo-randomness",
    instructions: "click to clear background",
    sketch: walkerSketch,
  },
  {
    name: "mouse attracts balls",
    description: "moving with vectors",
    instructions: "move your mouse around",
    path: "3-move-with-vectors",
    sketch: moverSketch,
  },
];

export { sketches };
