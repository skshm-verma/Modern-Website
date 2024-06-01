const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        petitForma : "Petit Formal Script",
        inter : "Inter",
        russo: "Russo One",
        roboto : "Roboto"
      }
    },
  },
  plugins: [],
});