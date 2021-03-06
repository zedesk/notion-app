const defaultConfig = require("tailwindcss/defaultConfig");
const formsPlugin = require("@tailwindcss/forms");

module.exports = {
  mode: "jit",
  purge: ["index.html", "src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", defaultConfig.theme.fontFamily.sans],
    },
  },
  darkMode: "media",
  plugins: [formsPlugin],
};
