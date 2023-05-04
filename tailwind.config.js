/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        display: ["var(--font-apfel-grotezk)", ...fontFamily.sans],
        stock: [fontFamily.sans],
      },
      colors: {
        black: "#020512",
        "dark-blue": "#040b29",
        blue: {
          DEFAULT: "#041746",
        },
        pink: {
          DEFAULT: "#f34dc3",
        },
        yellow: {
          DEFAULT: "#ffcf33",
        },
        green: {
          DEFAULT: "#1aefc4",
        },
        aqua: "#08b2e3",
        "light-grey": "#e0e0e0",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss"),
  ],
};
