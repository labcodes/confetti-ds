import React from "react";

import { ICON_TYPES } from "../../../../packages/confetti-ds/src/constants";
import { Alert as Component } from "../../../../packages/confetti-ds/src";

export default {
  title: "System Messages/Alert",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const AlertWithButton = (args) => <Component {...args} />;
AlertWithButton.args = {
  text: "Alert",
  type: "info",
  icon: "wallet",
  buttonProps: {
    text: "Button",
    onClick: () => alert("Button was clicked"),
  },
};
