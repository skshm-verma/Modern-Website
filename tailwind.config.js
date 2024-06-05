const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        petitForma: "Petit Formal Script",
        inter: "Inter",
        russo: "Russo One",
        roboto: "Roboto"
      },
      colors: {
        royalBlue: "#4169e1",
        dark: "#0d1117",
      }
    },

    backgroundImage: {
          wrapperBg: 'url(assets/wrapperBackground.svg)'
    },

    container: {
      screens: {
        sm: '640px',
        md: '767px',
        lg: '1140px',
        xl: '1440px',
        "2xl": '1800px'
      }
    }
  },
  plugins: [],
});