import React from "react";

import { ICON_TYPES } from "../../../../../packages/confetti-ds/src/constants";
import { IconButton as Component } from "../../../../../packages/confetti-ds/src/";

export default {
  title: "Buttons/Icon Button",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const IconButton = (args) => <Component {...args} />;
IconButton.args = {
  icon: "Dismiss",
  onClick: () => alert("Icon Button was clicked"),
};
