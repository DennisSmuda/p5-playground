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
