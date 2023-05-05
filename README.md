# Hey Rebekah Composable Content Cloud ☁️

## Intro 📚

Hey Rebekah is a free daily newsletter for freelancers. It's like Morning Brew without all the readers. 

## Purpose
Our mission is to centralize our publishing workflow, empowering writers to focus on their craft while technology handles the distribution to various platforms where readers want to consume content.

## Technologies Used 🛠️

### Development Stack

- [PNPM](https://pnpm.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Sanity.io v3](https://www.sanity.io/)
- [Next JS 13](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/) as component library

### Frameworks & Libraries

- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms) required by TailwindUI
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) required by TailwindCSS
- [Tailwind HeadlessUI](https://github.com/tailwindlabs/headlessui) required by TailwindUI
- [Stablo Pro Blog by Web3Templates](https://web3templates.com/preview/stablo) as the Next JS 13 and Sanity Starter
- [Web3 Forms](https://web3forms.com/) to handle the post submission processing of forms creating users in all systems

### Deployment

- [Vercel](https://vercel.com/)

### Other Integrations & Tools

- [Checkly](https://www.checklyhq.com/) - Monitoring and testing for web applications
  - API Documentation: [Checkly API Docs](https://www.checklyhq.com/docs/api)
- [Slack](https://slack.com/) integration
  - API Documentation: [Slack API Docs](https://api.slack.com/)
- [Height App](https://height.app/) is where we manage our work
  - API Documentation: [Height API Docs](https://developer.height.app/docs)
- [Iterable.com](https://iterable.com/) is the primary email platform we use
  - API Documentation: [Iterable API Docs](https://developer.iterable.com/docs)
- [Recombee](https://www.recombee.com/) for machine learning and content recommendations
  - API Documentation: [Recombee API Docs](https://docs.recombee.com/)
- [Ayrshare](https://www.ayrshare.com/) for social publishing
  - API Documentation: [Ayrshare API Docs](https://docs.ayrshare.com/)

## Getting Started 🚀

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you get started with the project, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [PNPM](https://pnpm.io/)
- [Next.js](https://nextjs.org/)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli)

### Installing

1. Clone the repository:

```
git clone https://github.com/brilla-cx/hr-web
```

2. Change to the project directory:

```
cd hr-web
```

3. Install the dependencies using PNPM:

```
pnpm install
```

### Testing

To run the tests:

```
pnpm test
```

## Linting & Committs 🙈
We will be using the following tools to handle semantic versioning, conventional commits, linting, and changelogs:
1. **Commitizen** - for conventional commits
2. **Husky** with **@commitlint/cli** - to lint your commit messages
3. **Standard Version** - to handle semantic versioning

### 🎯 Getting Started with Commitizen
Commitizen offers an easy-to-use interface to help you structure your conventional commits. No more writing by hand!

1. Install Commitizen globally:
   ```
   npm install -g commitizen
   ```
2. Initialize your project with a Commitizen adapter:
   ```
   commitizen init cz-conventional-changelog --save-dev --save-exact
   ```
3. Start using the interface by running:
   ```
   git cz
   ```
4. (Optional) Install the [VS Code Commitizen extension](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen) for an even smoother experience.

### 🧹 Linting Your Commits with Husky and @commitlint/cli
Linting helps catch mistakes before they throw off your semantic versioning. Set up Husky and @commitlint/cli to lint your messages before a commit is made:

1. Install the necessary packages:
   ```
   npm install --save-dev husky @commitlint/{config-conventional,cli}
   ```
2. Initialize Husky's Git hooks:
   ```
   npx husky install
   ```
3. Add the Commitlint hook:
   ```
   npx husky add .husky/commit-msg 'npx --no --commitlint --edit "$1"'
   ```
4. Create a configuration file:
   ```
   echo "module.exports = {extends: ['@commitlint/config-conventional']};"
   > commitlint.config.js
   ```
5. Add the following rules to your `commitlint.config.js` file:

```
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
      "always",
      ["app", "server", "client", "database", "docs", "tests", "lint"],
    ],
    "subject-case": [2, "always", "sentence-case"],
    "body-max-line-length": [2, "always", Infinity],
    "body-leading-blank": [2, "always"],
    "height-task-number": [2, "always"],
    "footer-leading-blank": [2, "always"],
  },
};
```

### 🚀 Versioning and Changelogs with Standard Version
Standard Version ties everything together, making versioning and changelogs a breeze:

1. Install the `standard-version` dependency:
   ```
   npm install --save-dev standard-version
   ```
2. Add a script to your `package.json`:
   ```json
   {
     "scripts": {
       "release": "standard-version"
     }
   }
   ```
3. Run the script to bump the version number and generate a changelog:
   ```
   npm run release
   ```
4. (Optional) Preview changes without committing by using the dry-run mode:
   ```
   npm run release -- --dry-run
   ```

That's it! You've now incorporated conventional commits, linting, versioning, and changelogs into your project in a fun and easy way. Enjoy your streamlined workflow! 🎉

## Deployment

To deploy the application, follow these steps:

1. Sign up for a [Vercel account](https://vercel.com/signup) if you haven't already.
2. Install the [Vercel CLI](https://vercel.com/cli) and log in with your account.
3. Run the following command from the project directory:

```
vercel
```

4. Follow the prompts to deploy your application.

## Built With 🏗️

- [Sanity.io](https://www.sanity.io/) - Backend and content management
- [Next.js](https://nextjs.org/) - Frontend framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Tailwind UI](https://tailwindui.com/) - UI component library
- [Vercel](https://vercel.com/) - Deployment and hosting

## Contributing 🤝

We're always looking for contributors to help improve the project! If you're interested in contributing, please follow the steps below:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push your branch to your fork (`git push origin feature/YourFeatureName`)
5. Open a pull request

## Versioning 📊

We use [SemVer](https://semver.org/) for versioning. For the available versions, see the [tags on this repository](https://github.com/brilla-cx/hr-web/tags).

## Authors ✍️

- **Surjith the Great** - *Web3 Template Creator* - [surjithctly](https://github.com/surjithctly)
- **Sam the Grumpy** - *Cat herder* - [srizvi](https://github.com/srizi)

See also the list of [contributors](https://github.com/brilla-cx/hr-web/graphs/contributors) who participated in this project.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙏

- Hat tip to anyone whose code was used
- Inspiration for the project
- Any other acknowledgements

## Deploy on Vercel

You can easily deploy this project on Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/brilla-cx/hr-web)