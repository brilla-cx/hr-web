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
      "always",
      ["app", "server", "client", "database", "docs", "tests", "lint"],
    ],
    "subject-case": [2, "always", "sentence-case"],
    "body-max-line-length": [2, "always", 72],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "signed-off-by": [2, "always"],
  },
};
