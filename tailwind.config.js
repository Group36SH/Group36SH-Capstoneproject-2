const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': [ 'Fraunces', 'serif' ],
        'poppins': [ 'Poppins', 'sans-serif' ],
      },
      backgroundImage: {
        'hero-section': "url('./images/desktop/image-header.jpg')",
        'transform': "url('./images/desktop/image-transform.jpg')",
        'stand-out': "url('./images/desktop/image-stand-out.jpg')",
        'graphic-design': "url('./images/desktop/image-graphic-design.jpg')",
        'photography': "url('./images/desktop/image-photography.jpg')",
        'milkbottles': "url('./images/desktop/image-gallery-milkbottles.jpg')",
        'orange': "url('./images/desktop/image-gallery-orange.jpg')",
        'cone': "url('./images/desktop/image-gallery-cone.jpg')",
        'sugarcubes': "url('./images/desktop/image-gallery-sugarcubes.jpg')",

      },
      colors: {
        // primary colors
        Soft_red: "#fe7867",
        bright_yellow: "	#fad400",
        bright_blue: "#6ec9fe",
        bright_bg: "#3ebfff",
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
    extend: {
      variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active', 'before'],
      },
    },
  },
  plugins: [],
};
