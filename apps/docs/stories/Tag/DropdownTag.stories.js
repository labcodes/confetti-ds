import React from "react";

import { ICON_TYPES, TAG_COLORS } from "../../confetti-ds/src/constants";
import { DropdownTag as Component  } from "../../confetti-ds/src";

export default {
  title: "Tag/Dropdown Tag",
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

export const DropdownTag = (args) => <Component {...args} />;

DropdownTag.args = {
  text: "demo tag",
};
