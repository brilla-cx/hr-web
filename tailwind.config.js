/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lexend)", ...fontFamily.sans],
        display: ["var(--font-lexend-deca)", ...fontFamily.sans],
        stock: [fontFamily.sans],
      },
      colors: {
        midnight: "hsl(224, 71%, 4%)",
        pink: {
          DEFAULT: "#ff00fe",
        },
        aqua: {
          DEFAULT: "#00fffe",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "@global": {
              html: {
                "@apply antialiased": {},
              },
            },
            ".prose p:first-of-type::first-letter": {
              float: "left",
              fontSize: "120px",
              paddingRight: theme("spacing.2"),
              fontWeight: theme("fontWeight.bold"),
              color: "#111827",
              textShadow: theme("textShadow.DEFAULT"),
              verticalAlign: "text-top",
              display: "block",
              marginTop: `calc(-0.4em - ${theme("spacing.2")})`,
              marginBottom: `calc(-0.4em - ${theme("spacing.2")})`,
            },
            ".prose :where(a):not(:where([class~='not-prose'] *))": {
              fontWeight: "900",
              textDecoration: "none",
              transitionProperty: "background-size",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "200ms",
              backgroundImage:
                "linear-gradient(to right, var(--tw-gradient-stops, var(--tw-gradient-from, #ff00fe), var(--tw-gradient-to, #6b21a8)))",
              backgroundSize: "0px 10px",
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
              "&:hover": {
                backgroundSize: "100% 3px",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss"),
  ],
};
