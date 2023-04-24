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

### Deployment

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