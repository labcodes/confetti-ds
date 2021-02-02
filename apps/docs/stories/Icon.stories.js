import React from "react";

import { ICON_TYPES } from "../confetti-ds/src/constants";
import { Icon as Component } from "../confetti-ds/src";

export default {
  title: "System Messages/Icon",
  component: Component,
  argTypes: {
    type: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const Icon = (args) => <Component {...args} />;
Icon.args = {
  type: "star"
};
