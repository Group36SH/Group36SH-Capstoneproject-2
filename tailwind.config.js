const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary colors
        Soft_red: "#fe7867",
        bright_yellow: "	#fad400",
        bright_blue: "#6ec9fe",
        // graphic design text
        Dark_desaturated_cyan: "#25564b",
        // photography text
        Dark_blue: "#19536b",
        // footer
        Dark_moderate_cyan: "#458c7e",

        // Neutral
        Very_dark_desaturated_blue: "#23303e",
        Very_dark_grayish_blue: "#5a636c",
        Dark_grayish_blue: "#818498",
        Grayish_blue: "#a7abae",
        White: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
