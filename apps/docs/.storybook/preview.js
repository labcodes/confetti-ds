import "!style-loader!css-loader!sass-loader!../confetti-ds/scss/main.scss";
import "!style-loader!css-loader!sass-loader!./storybook-overrides.scss";

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
