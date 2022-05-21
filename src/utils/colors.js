/**
 * Flash Background Color
 *
 * @param {p5Instance} sk
 */
const flashBackground = (sk) => {
  sk.colorMode("hsl");
  sk.background(256, 22, 10, 1);
};

/**
 * Get Random Color
 *
 * @param {p5Instance} sk
 * @returns a bright primary p5-color
 */
const getRandomColor = (sk) => {
  return sk.color(sk.random(255), sk.random(50, 100), 50, 1);
};

export { flashBackground, getRandomColor };
