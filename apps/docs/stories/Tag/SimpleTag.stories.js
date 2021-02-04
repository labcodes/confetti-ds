import React from "react";

import { TAG_ICONS, TAG_THUMBS, TAG_SKINS, TAG_COLORS } from "./constants";
import { SimpleTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Simple Tag",
  component: Component,
  argTypes: {
    thumbSrc: {
      control: { type: "select", options: TAG_THUMBS },
    },
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

export const SimpleTag = (args) => <Component {...args} />;
SimpleTag.args = {
  text: "demo tag",
};
