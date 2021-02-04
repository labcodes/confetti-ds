import React from "react";

import { TAG_ICONS, TAG_SKINS, TAG_COLORS } from "./constants";
import { DropdownTag as Component  } from "../../confetti-ds/src";

export default {
  title: "Tag/Dropdown Tag",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: TAG_ICONS },
    },
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    skin: {
      control: { type: "select", options: TAG_SKINS },
    },
  },
};

export const DropdownTag = (args) => <Component {...args} />;
DropdownTag.args = {
  text: "demo tag",
};
