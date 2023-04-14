import React from "react";

import {
  ICON_TYPES,
  TAG_COLORS,
} from "../../../../../../packages/confetti-ds/src/constants";
import { DropdownTag as Component } from "../../../../../../packages/confetti-ds/src";

export default {
  title: "Tags/Tag/Dropdown Tag",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    skin: {
      control: { type: "inline-radio" },
    },
  },
};

export const DropdownTagWithIcon = (args) => <Component {...args} />;

DropdownTagWithIcon.args = {
  text: "demo tag",
  icon: "coin",
};
