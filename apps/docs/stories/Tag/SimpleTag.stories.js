import React from "react";

import { ICON_TYPES, TAG_COLORS } from "../../confetti-ds/src/constants";
import { SimpleTag as Component } from "../../confetti-ds/src";

export default {
  title: "Tag/Simple Tag",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    skin: {
      control: { type: "inline-radio", options: ["pale", "vivid"] },
    },
  },
};

export const SimpleTag = (args) => {
  return (
    <React.Fragment>
      <Component {...args} />
      <p>Use this link for a <strong>thumbSrc</strong> example: <a>http://avatars3.githubusercontent.com/u/1887591</a></p>
    </React.Fragment>
  )
};

SimpleTag.args = {
  text: "demo tag",
};
