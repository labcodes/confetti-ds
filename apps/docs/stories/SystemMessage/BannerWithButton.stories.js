import React from "react";

import { ICON_TYPES } from "../../confetti-ds/src/constants";
import { Banner as Component } from "../../confetti-ds/src";

export default {
  title: "System Message/Banner With Button",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    }
  }
}

export const BannerWithButton = (args) => <Component {...args} />;
BannerWithButton.args = {
  text: "Banner",
  type: "info",
  icon: "wallet",
  buttonProps: {
    text: "Button",
    onClick: () => alert("Button was clicked"),
  }
}
