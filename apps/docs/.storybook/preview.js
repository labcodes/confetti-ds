import "!style-loader!css-loader!sass-loader!../../../packages/confetti-ds/scss/main.scss";
import "!style-loader!css-loader!sass-loader!./storybook-overrides.scss";
/packages/confetti-ds/scss/main.scss
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  options: {
    storySort: {
      order: [
        'Elements',
        'Actions',
        'Content',
        'Data Inputs', [
          'Checkbox',
          'Radio',
        ],
        'Navigation',
        'Messaging',
      ],
    },
  },
}
