/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  theme: {
    colors: {
      transparent: "transparent",
      black: "#0b1215",
      white: "#fbf4eb",
      msh: "#8a1332",
      "msh-hover": "#be1a45",
      accent: "#b3192b",
      "accent-hover": "#d51e33",
    },
    extend: {
      fontFamily: {
        display: ["Outfit", ...defaultTheme.fontFamily.sans],
        body: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `utils/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `Error.{js,ts,vue}`,
    `error.{js,ts,vue}`,
    `app.config.{js,ts}`,
  ],
};
