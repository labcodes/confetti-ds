# confetti-storybook

This project is the Storybook code for our [Confetti design system](https://github.com/labcodes/confetti-ds).

## Setup

First, clone this project. We use git submodules to have the confetti-ds' source code in a separate repo, so you'll need to pass the `--recursive` flag.

```sh
git clone --recursive git@github.com:labcodes/confetti-storybook.git
```

After that, you'll need to install this project's dependencies, as well as the confetti-ds' own dependencies.

```sh
# installs the storybook's dependencies
npm i
cd confetti-ds
# installs the design system's dependencies
npm i
```

Finally, go back to the root folder and start the development server.

```sh
cd ..
npm start
```
