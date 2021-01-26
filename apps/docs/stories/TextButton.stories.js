import React from "react";

import { ICON_TYPES } from "../confetti-ds/src/constants";
import { TextButton as Component } from "../confetti-ds/src/Button";

export default {
  title: "Components/Button/TextButton",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const TextButton = Template.bind({});
TextButton.args = {
  text: "Text Button",
  onClick: () => alert("TextButton was clicked"),
};
TextButton.storyName = "TextButton";
