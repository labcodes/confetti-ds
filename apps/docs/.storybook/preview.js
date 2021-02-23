import "!style-loader!css-loader!sass-loader!../confetti-ds/scss/main.scss";
import "!style-loader!css-loader!sass-loader!./storybook-overrides.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        'Elements', [
          'Icon',
          'Badge',
        ],
        'Actions', [
          'Button', [
            'Button',
            'Outline Button',
            'Text Button',
          ],
          'Toggle',
        ],
        'Content', [
          'Card', [
            'Filled Card',
            'Outline Card',
            'Outline Filled Card',
            'With Double Action',
            'With Link Action',
            'With Overflowed Image',
            'With Overlaid Header',
            'Card Subcomponents', [
              'Card Divider',
              'Card Header',
              'Card Image',
              'Double Action',
              'Link Action',
            ],
          ],
          'Tag', [
            'Simple Tag',
            'Dropdown Tag',
            'Removable Tag',
          ],
        ],
      ],
    },
  },
}
