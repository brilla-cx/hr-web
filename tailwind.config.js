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
        sans: ["var(--font-biryani)", ...fontFamily.sans],
        serif: ["var(--font-ptserif)", ...fontFamily.serif],
        display: ["var(--font-chivo)", ...fontFamily.sans],
        stock: [fontFamily.sans],
      },
      colors: {
        pink: {
          DEFAULT: "#ff00fe",
        },
        green: {
          DEFAULT: "#1aefc4",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ".prose-post-body p:first-of-type::first-letter": {
              float: "left",
              fontSize: "120px",
              paddingRight: theme("spacing.2"),
              fontWeight: theme("fontWeight.bold"),
              color: theme("colors.midnight-blue"),
              textShadow: theme("textShadow.DEFAULT"),
              verticalAlign: "text-top",
              display: "block",
              marginTop: `calc(-0.4em - ${theme("spacing.2")})`,
              marginBottom: `calc(-0.4em - ${theme("spacing.2")})`,
              //paddingTop: theme("spacing.2"),
            },
            h2: {
              fontSize: theme("fontSize.4xl"), // matches text-4xl in typography.js looks like crap with lg              fontFamily: theme("fontFamily.display"), // matches font-display in typography.js looks like crap with lg
              letterSpacing: "-0.025em",
            },
            h3: {
              fontSize: theme("fontSize.3xl"), // matches text-3xl in typography.js looks like crap with lg
              fontFamily: theme("fontFamily.display"), // matches font-display in typography.js looks like crap with lg
              letterSpacing: "-0.025em",
            },
            h4: {
              fontSize: theme("fontSize.2xl"), // matches text-2xl in typography.js looks like crap with lg
              fontFamily: theme("fontFamily.display"), // matches font-display in typography.js looks like crap with lg
              letterSpacing: "-0.025em",
            },
            ".prose :where(a):not(:where([class~='not-prose'] *))": {
              color: "#374151",
              textDecoration: "underline",
              fontWeight: "900",
              textDecorationLine: "underline",
              textDecorationColor: "#374151",
              textDecorationThickness: "2.5px",
              textUnderlineOffset: "4px",
              transitionProperty:
                "color, textDecorationColor, textDecorationThickness, textDecorationLine, textDecorationOffset",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "200ms",
              "&:hover": {
                textDecorationColor: theme("colors.pink.DEFAULT"),
                textDecorationThickness: "2.5px",
                textDecorationLine: "underline",
                textDecorationOffset: "4px",
              },
            },
            ".prose-post-body :where(a):not(:where([class~='not-prose'] *))": {
              color: "#374151",
              textDecoration: "underline",
              fontWeight: "900",
              textDecorationLine: "underline",
              textDecorationColor: theme("colors.pink.DEFAULT"),
              textDecorationThickness: "2.5px",
              textUnderlineOffset: "4px",
              transitionProperty:
                "color, textDecorationColor, textDecorationThickness, textDecorationLine, textDecorationOffset",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "200ms",
              "&:hover": {
                color: theme("colors.pink.DEFAULT"),
                textDecorationColor: "#374151",
                textDecorationThickness: "2.5px",
                textDecorationLine: "underline",
                textDecorationOffset: "4px",
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
