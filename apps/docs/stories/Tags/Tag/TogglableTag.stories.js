import React from "react";

import { TAG_COLORS } from "../../../../../packages/confetti-ds/src/constants";
import { TogglableTag as Component } from "../../../../../packages/confetti-ds/src";

export default {
  title: "Tags/Tag/Togglable Tag",
  component: Component,
  argTypes: {
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
  },
};

export const TogglableTag = (args) => <Component {...args} />;
TogglableTag.args = {
  text: "demo tag",
};
