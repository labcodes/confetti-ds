import "!style-loader!css-loader!sass-loader!./storybook-overrides.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  options: {
    storySort: {
      order: [
        "Alerts",
        "Banners",
        "Buttons",
        "Cards",
        "Checkbox",
        "Dialog",
        "Icons",
        "Inputs",
        "Radio",
        "Search",
        "Sidebar",
        "Tags",
        "TagDropdown",
        "Toggle",
        "Tooltip",
      ],
    },
  },
};
