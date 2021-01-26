import React from "react";

import { ICON_TYPES } from "../confetti-ds/src/constants";
import { Button as Component } from "../confetti-ds/src/Button";

export default {
  title: "Components/Button/Button",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Button = Template.bind({});
Button.args = {
  text: "Button",
  onClick: () => alert("Button was clicked"),
};
