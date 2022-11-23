import React from "react";

import { NarrowSidebar } from "../../../../../../packages/confetti-ds/src";
import { ICON_TYPES } from "../../../../../../packages/confetti-ds/src/constants";
const { FooterButton: Component } = NarrowSidebar;

export default {
  title: "Navigation/Sidebar/Narrow Subcomponents/Footer Button",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const FooterButton = (args) => <Component {...args} />;
FooterButton.args = {
  onClick: () => alert("Footer Button clicked"),
  label: "Footer Button",
}
