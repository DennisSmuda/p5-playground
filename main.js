import SketchManager from "./src/utils/SketchManager";
import UI from "./src/utils/UI";

/**
 * Init Sketch Manager
 */
new SketchManager();
/**
 * Init UI
 */
new UI();

/**
 * Warn user before leaving the page -> because no client-routing!
 *
 * https://stackoverflow.com/questions/12381563/how-can-i-stop-the-browser-back-button-using-javascript
 */
window.onbeforeunload = function () {
  return "You will leave this page!";
};
