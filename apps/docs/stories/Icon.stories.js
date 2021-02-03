import React from "react";

import { ICON_TYPES, ICON_COLORS } from "../confetti-ds/src/constants";
import { Icon as Component } from "../confetti-ds/src";

export default {
  title: "Icons & Badges/Icon",
  component: Component,
  argTypes: {
    type: {
      control: { type: "select", options: ICON_TYPES },
    },
    color:{
      control: { type: "select", options: ICON_COLORS },
    }
  },
};

export const Icon = (args) => <Component {...args} />;
Icon.args = {
  type: "star"
};
