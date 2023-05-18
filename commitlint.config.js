module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "height-task-number": (parsed) => {
          const { header, body, footer } = parsed;
          const regex = /(Close\s|Link\s)?T-\d{1,7}/;
          const isValid =
            regex.test(header) || regex.test(body) || regex.test(footer);

          if (!isValid) {
            return [
              false,
              "Message must include a Height Task number in the format 'T-#######', 'Close T-#######', or 'Link T-#######'",
            ];
          }
          return [true, ""];
        },
      },
    },
  ],
  rules: {
    "header-max-length": [2, "always", 72],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"],
    ],
    "scope-enum": [
      2,
      "never", // Provide optional scope so we can reference filenames using GPTCommit
      ["custom-scope", "*"], // Allows 'custom-scope' and any other string as valid scopes
    ],
    "subject-case": [2, "always", "sentence-case"],
    "body-max-line-length": [2, "always", Infinity],
    "body-leading-blank": [2, "always"],
    "height-task-number": [2, "always"],
    "footer-leading-blank": [2, "always"],
  },
};
