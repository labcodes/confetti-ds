import React from "react";

import { ICON_TYPES, TAG_COLORS } from "../../confetti-ds/src/constants";
import { SimpleTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Simple Tag With Thumb",
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

export const SimpleTagWithThumb = (args) => {
  return (
    <React.Fragment>
      <Component {...args} />
    </React.Fragment>
  )
};

SimpleTagWithThumb.args = {
  text: "demo tag",
  thumbSrc: "http://avatars3.githubusercontent.com/u/1887591",
};
