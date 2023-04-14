import React from "react";

import { TAG_COLORS } from "../../../../../../packages/confetti-ds/src/constants";
import { SimpleTag as Component } from "../../../../../../packages/confetti-ds/src";

export default {
  title: "Tags/Tag/Simple Tag",
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
  );
};

SimpleTagWithThumb.args = {
  text: "demo tag",
  thumbSrc: "http://avatars3.githubusercontent.com/u/1887591",
};
