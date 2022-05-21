const setTitle = (title, subtitle = "", instructions = "") => {
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = `
    <div class="hero-title">
      <h1>${title}</h1>
      <p>
        ${subtitle}
      </p>
      <span>
        ${instructions}
      </span>
    </div>
  `;
};

export default setTitle;
