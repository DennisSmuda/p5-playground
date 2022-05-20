const setTitle = (title, subtitle = "") => {
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = `
    <h1>${title}</h1>
    <p>
      ${subtitle}
    </p>
  `;
};

export default setTitle;
