import p5 from "p5";

/**
 * Sketch Manager
 * @description Listens to UI Events and starts/stops sketches accordingly
 */
export default class SketchManager {
  constructor() {
    this.currentSketch = null;

    this.setupEvents();
  }

  setupEvents() {
    /**
     * Start Sketch Event
     * @event startSketch
     * @description Starts a sketch by creating a new p5 instance.
     */
    window.addEventListener("startSketch", async (e) => {
      this.currentSketch = new p5(e.detail.sketch.sketch);
    });

    /**
     * Stop Sketch Event
     * @event stopSketch
     * @description Stops a sketch and removes the canvas element
     */
    window.addEventListener("stopSketch", (e) => {
      this.currentSketch.stop();
      this.currentSketch = null;
      document.querySelector("canvas").remove();
    });
  }
}
