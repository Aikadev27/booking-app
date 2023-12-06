import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        doodle:
          "url('https://wallpapers.com/images/hd/doodle-glowing-artwork-vhu5ts3hs8bxyq5a.jpg')",
      },
      // fontFamily: {
      //   Poppins: ["Space Mono", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        custom1: ["Space Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
});
export default config;
