import React from "react";

import { ICON_TYPES } from "../confetti-ds/src/constants";
import { OutlineButton as Component } from "../confetti-ds/src/Button";

export default {
  title: "Components/Button/OutlineButton",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  text: "Outline Button",
  onClick: () => alert("OutlineButton was clicked"),
};
OutlineButton.storyName = "OutlineButton";
