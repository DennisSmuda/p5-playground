// import "style.css";
// import { createSketch } from "./src/sketches/0-demo";
// import { createSketch } from "./src/sketches/1-inanimate-objects";
// import { createSketch } from "./src/sketches/2-random-walker";
import { createSketch } from "./src/sketches/3-move-with-vectors";
import UI from "./src/utils/UI";

// Current Sketch
let currentSketch = null;

/**
 * Start Sketch Event
 */
window.addEventListener("startSketch", (e) => {
  console.log("Start Sketch", e);
  currentSketch = createSketch();
});

/**
 * Stop Sketch Event
 */
window.addEventListener("stopSketch", (e) => {
  currentSketch.stop();
  currentSketch = null;
  document.querySelector("canvas").remove();
});

/**
 * Init UI
 */
const ui = new UI();
// ui.playButton.click();
