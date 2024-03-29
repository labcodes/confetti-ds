import React from "react";

import { ICON_TYPES } from "../../../../packages/confetti-ds/src/constants";
import { Banner as Component } from "../../../../packages/confetti-ds/src";

export default {
  title: "System Messages/Banner",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const BannerWithButton = (args) => <Component {...args} />;
BannerWithButton.args = {
  text: "Banner",
  type: "info",
  icon: "wallet",
  buttonProps: {
    text: "Button",
    onClick: () => alert("Button was clicked"),
  },
};
