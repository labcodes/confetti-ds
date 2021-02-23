import "!style-loader!css-loader!sass-loader!../confetti-ds/scss/main.scss";
import "!style-loader!css-loader!sass-loader!./storybook-overrides.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
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
        'Data Inputs', [
          'Checkbox',
          'Radio',
          'Search', [
            'Inline Search',
            'Standard Search',
          ],
          'Text Input', [
            'Text Input',
            'Email Input',
            'Password Input',
          ]
        ],
        'Navigation', [
          'Sidebar', [
            'Narrow',
            'Narrow With Footer Avatar',
            'Narrow Subcomponents', [
              'Body',
              'Collapse Button',
              'Footer',
              'Footer Button',
              'Header',
              'Item',
              'Logotype',
              'User Avatar',
            ],
          ],
        ],
        'Messaging', [
          'Dialog', [
            'Standard',
            'Message',
          ],
          'System Messages', [
            'Alert With Button',
            'Alert Without Button',
            'Banner With Button',
            'Banner Without Button',
          ],
        ],
      ],
    },
  },
}
