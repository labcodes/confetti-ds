import React from "react";

import { ICON_TYPES } from "../../confetti-ds/src/constants";
import { EmailInput as Component } from "../../confetti-ds/src/Input";

export default {
  title: "Text Input/Email Input",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const EmailInput = (args) => <Component {...args} />;
EmailInput.args = {
  id: "demo-input",
  label: "Demo label",
  onChange: (event) => console.log(event),
};
