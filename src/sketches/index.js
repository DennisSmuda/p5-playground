import { createSketch as createWalker } from "./2-random-walker";
import { createSketch as createBalls } from "./3-move-with-vectors";

const sketches = [
  {
    name: "random walks",
    description: "noise-based pseudo-randomness",
    instructions: "click to clear background",
    create: createWalker,
  },
  {
    name: "mouse attracts balls",
    description: "moving with vectors",
    instructions: "move your mouse around",
    path: "3-move-with-vectors",
    create: createBalls,
  },
];

export { sketches };
