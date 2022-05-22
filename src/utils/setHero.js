const setHero = (
  title,
  subtitle = "",
  instructions = "",
  modifierClass = "home"
) => {
  const appContainer = document.querySelector("#app");
  appContainer.classList = modifierClass;
  appContainer.innerHTML = `
    <div class="hero-title hero-title--${modifierClass}">
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

export default setHero;
