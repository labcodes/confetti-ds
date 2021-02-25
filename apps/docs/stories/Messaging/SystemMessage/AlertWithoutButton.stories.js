import React from "react";

import { ICON_TYPES } from "../../../confetti-ds/src/constants";
import { Alert as Component } from "../../../confetti-ds/src";

export default {
  title: "Messaging/System Messages/Alert",
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

export const AlertWithoutButton = (args) => <Component {...args} />;
AlertWithoutButton.args = {
  text: "Alert",
  type: "info",
  icon: "wallet",
}
