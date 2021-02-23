import React from "react";

import { TAG_COLORS } from "../../../../confetti-ds/src/constants";
import { DropdownTag as Component  } from "../../../../confetti-ds/src";

export default {
  title: "Content/Tag/Dropdown Tag/Dropdown Tag",
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
