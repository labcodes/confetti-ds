import React from "react";

import { TAG_ICONS, TAG_THUMBS, TAG_SKINS, TAG_COLORS } from "./constants";
import { RemovableTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Removable Tag",
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

export const RemovableTag = (args) => <Component {...args} />;
RemovableTag.args = {
  text: "demo tag",
};
