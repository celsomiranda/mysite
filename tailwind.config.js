const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    fontFamily: {
      mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
