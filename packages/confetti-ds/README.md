# Confetti

## Installing

Install the latest version of `@labcodes/confetti-ds` via npm:

```
npm install @labcodes/confetti-ds
```

## Importing styles

Add this to your main `scss` file:

```javascript
@import '~@labcodes/confetti-ds/scss/main';
``` 
>To be able to use our styles, your react project needs to support `scss` and `svg` files.

## Importing the fonts

Add the following code to the head tag of your project:

```html
<link href="https://use.typekit.net/boj8rad.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,500;0,600;1,500;1,600&amp;display=swap" rel="stylesheet">
```

**Keep in mind that the license for the fonts is only for Labcodes' projects, and that the fonts won't work for other codebases.** If you wish to use our fonts, acquire your license to use them, or try changing the font to one with a broader license.

Our styles already reference the fonts, so after importing them, everything should be good to go.

## Changing the theme for the components

Our design system accepts theming via scss variables. To change a theme for a component, you'll just need to override the corresponding theme variable.

To do that, take a look at which are the default themes in our [_settings.scss](https://github.com/labcodes/confetti-ds/blob/main/scss/variables/_settings.scss) file, and which themes are available for the components in the [_colors.scss](https://github.com/labcodes/confetti-ds/blob/main/scss/variables/_colors.scss) file.

To change the themes, you may need to import our variables files before overwriting. To properly overwrite the Button theme, for example, you may need to do something like this:

```scss
// first, import the variables file
@import "~@labcodes/confetti-ds/scss/variables/_all";
// then, overwrite the variable
$button-theme: $purple-palette;
// finally, import the rest of the styles
@import "~@labcodes/confetti-ds/scss/main";`
```

## Using Confetti components

To use any of our components, you just need to import them directly from `@labcodes/confetti-ds`.

Example for `Alert` component:

```javascript
import Alert from '@labcodes/confetti-ds'

function App() {
  return <Component />
}
```

For example, if you render the Alert with `<Alert text="Testing alerts!" icon="eye-opened" />` in the Welcome page from our [Django boilerplate](https://github.com/labcodes/django-react-webpack/), you'll probably be looking at something like this:

<div style="max-width: 80%; margin: 1rem auto;">

![Example of an Alert being rendered with our Django boilerplate](../.storybook/static/docs/getting-started/alerts-on-outside-project.jpg)

</div>

### Where do I get more information on components?

To know where to import the components from, explore our [folder structure for components](https://github.com/labcodes/confetti-ds/tree/main/src). The compressed package's `dist` folder uses the same structure as the `src` folder from our source code, so if you, for example, want to import the `Button` component, you'll import it with `import { Button } from "@labcodes/confetti-ds";` or `import Button from "@labcodes/confetti-ds/dist/Button/Button";`, because the source code for the `Button` component is inside the `src/Button` folder.

For information on props and their types, just check the prop tabels inside each component's docs.
