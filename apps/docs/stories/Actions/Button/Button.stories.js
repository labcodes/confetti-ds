import React from "react";

import { ICON_TYPES } from "../../../../../packages/confetti-ds/src/constants";
import { Button as Component } from "../../../../../packages/confetti-ds/src/Button";

export default {
  title: "Actions/Button/Button",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const Button = (args) => <Component {...args} />;
Button.args = {
  label: "Button",
  onClick: () => alert("Button was clicked"),
};
