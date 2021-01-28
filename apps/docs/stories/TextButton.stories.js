import React from "react";

import { ICON_TYPES } from "../confetti-ds/src/constants";
import { TextButton as Component } from "../confetti-ds/src/Button";

export default {
  title: "Button/TextButton",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const TextButton = (args) => <Component {...args} />;
TextButton.args = {
  text: "Text Button",
  onClick: () => alert("TextButton was clicked"),
};
TextButton.storyName = "TextButton";
