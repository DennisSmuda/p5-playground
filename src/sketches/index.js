import { walkerSketch } from "./2-random-walker";
import { moverSketch } from "./3-move-with-vectors";
import { circleSketch } from "./4-scaling-circles";

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
    name: "scaling circles",
    description: "dynamic dot grid",
    instructions: "move your mouse around",
    sketch: circleSketch,
  },
];

export { sketches };
