import "!style-loader!css-loader!sass-loader!./storybook-overrides.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  options: {
    storySort: {
      order: [
        "Buttons",
        "Cards",
        "Checkbox",
        "Dialog",
        "Icons",
        "Radio",
        "Search Input",
        "Sidebar",
        ["Narrow Subcomponents"],
        "System Messages",
        "Tags",
        "Tag Dropdown",
        "Text Inputs",
        "Toggle",
        "Tooltip",
      ],
    },
  },
};
