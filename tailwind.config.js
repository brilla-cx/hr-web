/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lexend)", ...fontFamily.sans],
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
            '.prose:not(:where([class~="no-effects"])) p:first-of-type::first-letter':
              {
                float: "left",
                fontSize: "120px",
                paddingRight: theme("spacing.2"),
                fontWeight: theme("fontWeight.bold"),
                color: theme("colors.midnight"),
                textShadow: theme("textShadow.DEFAULT"),
                verticalAlign: "text-top",
                display: "block",
                marginTop: `calc(-0.4em - ${theme("spacing.2")})`,
                marginBottom: `calc(-0.4em - ${theme("spacing.2")})`,
              },
            ".prose :where(a):not(:where([class~='not-prose'] *))": {
              fontWeight: "700",
              textDecoration: "underline #d1d5db",
              textUnderlineOffset: "4px",
              textDecorationThickness: "2px",
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
                textDecoration: "none",
              },
            },
          },
        },
      }),
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 8s ease-in-out infinite",
        fade: "fadein 6s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss"),
  ],
};
