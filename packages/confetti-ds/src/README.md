# Confetti' source code

This project is the Storybook code for our [Confetti design system](https://github.com/labcodes/confetti-ds).

## Setup

First, clone this project. We use git monorepo to manage both the React code and the Storybook source.

```sh
git clone git@github.com:labcodes/confetti-ds.git
```

After that, you'll need to install this project's dependencies, as well as the confetti-ds' own dependencies. We use [Turborepo](turborepo.org/) to manage the both inside projects.

Finally, go back to the root folder and start the development server. That will run a development server that runs at http://localhost:8000 and that contains this whole Storybook site.

```sh
# installs at the project's root folder
npm install
# runs Storybook at localhost:8000
npx turbo start
```
