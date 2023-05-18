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
        pink: {
          DEFAULT: "#ff00fe",
        },
        green: {
          DEFAULT: "#00fffe",
        },
      },
      letterSpacing: {
        tight: "-0.025em", // Customize the tight letter spacing value inside prose
      },
      lineHeight: {
        tight: 1.2, // Customize the tight line height value inside prose
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ".prose-post-body p:first-of-type::first-letter": {
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
              //paddingTop: theme("spacing.2"),
            },
            ".prose-post-body h2, .prose h2": {
              fontSize: theme("fontSize.4xl"),
              fontWeight: theme("fontWeight.bold"),
              fontFamily: theme("fontFamily.display"),
              letterSpacing: theme("letterSpacing.tight"),
              lineHeight: theme("lineHeight.tight"),
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.8"),
            },
            ".prose-post-body h3, .prose h3": {
              fontSize: theme("fontSize.4xl"),
              fontWeight: theme("fontWeight.bold"),
              fontFamily: theme("fontFamily.display"),
              letterSpacing: theme("letterSpacing.tight"),
              lineHeight: theme("lineHeight.tight"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.5"),
            },
            ".prose-post-body h4, .prose h4": {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.bold"),
              fontFamily: theme("fontFamily.display"),
              letterSpacing: theme("letterSpacing.tight"),
              lineHeight: theme("lineHeight.tight"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.5"),
            },
            ".prose :where(a):not(:where([class~='not-prose'] *))": {
              fontWeight: "900",
              textDecoration: "none",
              transitionProperty: "background-size",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "200ms",
              backgroundImage:
                "linear-gradient(to right, var(--tw-gradient-stops, var(--tw-gradient-from, #ff7da5), var(--tw-gradient-to, #ff9ac5)))",
              backgroundSize: "0px 10px",
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
              "&:hover": {
                backgroundSize: "100% 3px",
              },
            },
            ".prose-post-body :where(a):not(:where([class~='not-prose'] *))": {
              fontWeight: "900",
              textDecoration: "none",
              transitionProperty: "background-size",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "200ms",
              backgroundImage:
                "linear-gradient(to right, var(--tw-gradient-stops, var(--tw-gradient-from, #ff7da5), var(--tw-gradient-to, #ff9ac5)))",
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
