import React from "react";

import {
  ICON_TYPES,
  ICON_COLORS,
} from "../../../../packages/confetti-ds/src/constants";
import { EmailInput as Component } from "../../../../packages/confetti-ds/src/Input";

export default {
  title: "Text Inputs/Email Input",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
    iconColor: {
      control: { type: "select", options: ICON_COLORS },
    },
  },
};

export const EmailInput = (args) => <Component {...args} />;
EmailInput.args = {
  id: "demo-input",
  label: "Demo label",
  onChange: (event) => console.log(event),
};
