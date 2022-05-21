import { sketches } from "../sketches";
import setTitle from "./setTitle";

export default class UI {
  constructor() {
    this.nav = document.getElementById("nav");
    this.backButton = document.getElementById("back-button");
    this.playButtonsContainer = document.getElementById("playButtons");

    this.setupButtons();
    this.openMenu();
    this.resetTitle();

    // Nav is hidden initially to pervent FOUC
    this.nav.style.visibility = "visible";
  }

  setupButtons() {
    // Create Playbuttons
    sketches.forEach((sketch, i) => {
      this.createButtonForSketch(sketch, i);
    });

    // Back Button
    this.backButton.addEventListener("click", () => {
      this.openMenu();
      window.dispatchEvent(new CustomEvent("stopSketch"));
      this.resetTitle();
    });
  }

  createButtonForSketch(sketch, i) {
    const newButton = document.createElement("button");
    newButton.classList = "play-button";
    newButton.innerHTML = `
        <span class="play-button__name">${++i}&nbsp;${sketch.name}</span>
        <span class="play-button__description">${sketch.description}</span>
      `;
    this.playButtonsContainer.appendChild(newButton);

    // Click Event starts a sketch
    newButton.addEventListener("click", () => {
      setTitle(sketch.name, sketch.description, sketch.instructions);
      window.dispatchEvent(
        new CustomEvent("startSketch", { detail: { sketch } })
      );
      this.closeMenu();
    });
  }

  openMenu() {
    this.backButton.style.display = "none";
    this.playButtonsContainer.style.display = "grid";
  }

  closeMenu() {
    this.backButton.style.display = "flex";
    this.playButtonsContainer.style.display = "none";
  }

  resetTitle() {
    setTitle("welcome", "choose a sketch");
  }
}
