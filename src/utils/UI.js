import setTitle from "./setTitle";

export default class UI {
  constructor() {
    this.nav = document.getElementById("nav");
    this.backButton = document.getElementById("back-button");
    this.playButton = document.getElementById("play-button");

    this.nav.style.visibility = "visible";
    this.setupEvents();
    this.openMenu();

    this.resetTitle();
  }

  setupEvents() {
    // Start Button
    this.playButton.addEventListener("click", () => {
      window.dispatchEvent(
        new CustomEvent("startSketch", { detail: { sketchName: "demo-123" } })
      );
      this.closeMenu();
    });

    // Back Button
    this.backButton.addEventListener("click", () => {
      this.openMenu();
      window.dispatchEvent(new CustomEvent("stopSketch"));
      this.resetTitle();
    });
  }

  openMenu() {
    this.backButton.style.display = "none";
    this.playButton.style.display = "flex";
  }

  closeMenu() {
    this.backButton.style.display = "flex";
    this.playButton.style.display = "none";
  }

  resetTitle() {
    setTitle("Select a Demo");
  }
}
