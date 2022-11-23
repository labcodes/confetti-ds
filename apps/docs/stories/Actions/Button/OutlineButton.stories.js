import React from "react";

import { ICON_TYPES } from "../../../../../packages/confetti-ds/src/constants";
import { OutlineButton as Component } from "../../../../../packages/confetti-ds/src/Button";

export default {
  title: "Actions/Button/Outline Button",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const OutlineButton = (args) => <Component {...args} />;
OutlineButton.args = {
  text: "Outline Button",
  onClick: () => alert("OutlineButton was clicked"),
};
