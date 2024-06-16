const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"],
        russonOne: ["Russon One"],
      },
      colors: {
        royalBlue: "#4169e1",
        dark: "#0d1117"
      },
    },
    backgroundImage: {
      wrapperBg: "url(assets/wrapperBackground.svg)",
      wrapperDark: "url(assets/wrapperDark.svg)",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
});
