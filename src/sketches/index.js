import { walkerSketch } from "./2-random-walker";
import { moverSketch } from "./3-move-with-vectors";
import { forceSketch } from "./4-forces";

/**
 * Sketch Definitions
 */
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
    sketch: moverSketch,
  },
  {
    name: "forces",
    description: "moved by forces",
    instructions: "move your mouse around",
    sketch: forceSketch,
  },
];

export { sketches };
