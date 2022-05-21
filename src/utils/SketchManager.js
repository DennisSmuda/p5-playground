import p5Min from "p5";
// import p5 from "p5";

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
    window.addEventListener("startSketch", async (e) => {
      // console.log("Start Sketch", e.detail.sketch);
      // this.currentSketch = createSketch();
      // const sketch = await import(`../sketches/${e.detail.sketch.path}`);
      // this.currentSketch = e.detail.sketch.create();
      this.currentSketch = new p5Min(e.detail.sketch.sketch);
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
