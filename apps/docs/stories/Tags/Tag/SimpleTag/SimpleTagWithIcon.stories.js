import React from "react";

import {
  ICON_TYPES,
  TAG_COLORS,
} from "../../../../../../packages/confetti-ds/src/constants";
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
      control: { type: "select", options: ICON_TYPES },
    },
    thumbSrc: {
      control: false,
    },
  },
};

export const SimpleTagWithIcon = (args) => {
  return (
    <React.Fragment>
      <Component {...args} />
    </React.Fragment>
  );
};

SimpleTagWithIcon.args = {
  text: "demo tag",
  icon: "coin",
};
