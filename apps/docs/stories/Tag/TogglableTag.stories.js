import React from "react";

import { TAG_COLORS } from "./constants";
import { TogglableTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Togglable Tag",
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
