const sketches = [
  {
    name: "random walks",
    description: "",
    path: "./src/sketches/2-random-walker",
  },
  {
    name: "mouse attracts balls",
    description: "move your mouse around",
    path: "./src/sketches/3-move-with-vectors",
  },
];

export default class SketchManager {
  constructor() {
    // Current Sketch
    this.currentSketch = null;
    this.setupEvents();
  }

  setupEvents() {
    /**
     * Start Sketch Event
     */
    window.addEventListener("startSketch", (e) => {
      console.log("Start Sketch", e);
      // this.currentSketch = createSketch();
    });

    /**
     * Stop Sketch Event
     */
    window.addEventListener("stopSketch", (e) => {
      this.currentSketch.stop();
      this.currentSketch = null;
      document.querySelector("canvas").remove();
    });
  }
}
