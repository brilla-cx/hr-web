module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: false,
  bracketSameLine: true,
  tabWidth: 2,
  useTabs: false,
  tailwindFunctions: ["cx"],
  tailwindConfig: "./tailwind.config.js",
  plugins: [require("prettier-plugin-tailwindcss")],
};
