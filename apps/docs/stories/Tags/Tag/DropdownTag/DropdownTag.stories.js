import React from "react";

import { TAG_COLORS } from "../../../../../../packages/confetti-ds/src/constants";
import { DropdownTag as Component } from "../../../../../../packages/confetti-ds/src";

export default {
  title: "Tags/Tag/Dropdown Tag",
  component: Component,
  argTypes: {
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    skin: {
      control: { type: "inline-radio" },
    },
    icon: {
      control: false,
    },
  },
};

export const DropdownTag = (args) => <Component {...args} />;

DropdownTag.args = {
  text: "demo tag",
};
