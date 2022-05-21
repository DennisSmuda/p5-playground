import { sketches } from "../sketches";
import setTitle from "./setTitle";

export default class UI {
  constructor() {
    this.nav = document.getElementById("nav");
    this.backButton = document.getElementById("back-button");
    this.playButtonsContainer = document.getElementById("playButtons");
    this.playButtons = [];

    this.nav.style.visibility = "visible";
    this.setupButtons();
    this.openMenu();

    this.resetTitle();
  }

  setupButtons() {
    // Create Playbuttons
    sketches.forEach((sketch) => {
      const newButton = document.createElement("button");
      newButton.classList = "play-button";
      newButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>${sketch.name}</span>
      `;
      this.playButtonsContainer.appendChild(newButton);
      console.log("playbutton", this.playButtonsContainer);
      // this.playButtons.append(newButton)
      newButton.addEventListener("click", () => {
        console.log("Play Button", sketch);
        setTitle(sketch.name, sketch.description);
        window.dispatchEvent(
          new CustomEvent("startSketch", { detail: { sketch } })
        );
        this.closeMenu();
      });
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
    this.playButtonsContainer.style.display = "grid";
  }

  closeMenu() {
    this.backButton.style.display = "flex";
    this.playButtonsContainer.style.display = "none";
  }

  resetTitle() {
    setTitle("menu", "choose a sketch");
  }
}
