import { walkerSketch } from "./2-random-walker";
import { moverSketch } from "./3-move-with-vectors";
import { circleSketch } from "./4-scaling-circles";
import { wavingCircleSketch } from "./5-waving-circles";

/**
 * Sketch Definitions
 */
const sketches = [
  {
    name: "random walks",
    description: "noise-based pseudo-randomness",
    instructions: "click/tap to clear",
    sketch: walkerSketch,
  },
  {
    name: "mouse attracts balls",
    description: "moving with vectors",
    instructions: "move/tap",
    sketch: moverSketch,
  },
  {
    name: "scaling circles",
    description: "dynamic dot grid",
    instructions: "move your mouse",
    sketch: circleSketch,
  },
  {
    name: "waving circles",
    description: "on a sine wave",
    instructions: "enjoy",
    sketch: wavingCircleSketch,
  },
];

export { sketches };
