import React from "react";

import { ICON_TYPES, TAG_COLORS } from "../../confetti-ds/src/constants";
import { SimpleTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Simple Tag",
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
    thumbSrc: {
      control: false,
    },
  },
};

export const SimpleTag = (args) => {
  return (
    <React.Fragment>
      <Component {...args} />
    </React.Fragment>
  )
};

SimpleTag.args = {
  text: "demo tag",
};
