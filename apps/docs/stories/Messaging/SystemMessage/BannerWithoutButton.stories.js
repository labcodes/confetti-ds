import React from "react";

import { ICON_TYPES } from "../../../confetti-ds/src/constants";
import { Banner as Component } from "../../../confetti-ds/src";

export default {
  title: "Messaging/System Messages/Banner",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
    buttonProps: {
      table: {
        disable: true,
      },
    },
  }
}

export const BannerWithoutButton = (args) => <Component {...args} />;
BannerWithoutButton.args = {
  text: "Banner",
  type: "info",
  icon: "wallet",
}
