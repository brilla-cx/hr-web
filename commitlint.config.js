module.exports = {
  extends: ["@commitlint/config-conventional"],
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
    "subject-case": [2, "always", "lower-case"],
    "body-max-line-length": [2, "always", Infinity],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
  },
};
