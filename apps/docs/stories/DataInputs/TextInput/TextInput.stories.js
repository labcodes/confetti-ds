import React from "react";

import { ICON_TYPES, ICON_COLORS } from "../../../confetti-ds/src/constants";
import { TextInput as Component } from "../../../confetti-ds/src/Input";

export default {
  title: "Data Inputs/Text Input/Text Input",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
    iconColor: {
      control: { type: "select", options: ICON_COLORS },
    }
  },
};

export const TextInput = (args) => <Component {...args} />;
TextInput.args = {
  id: "demo-input",
  label: "Demo label",
  onChange: (event) => console.log(event),
};
