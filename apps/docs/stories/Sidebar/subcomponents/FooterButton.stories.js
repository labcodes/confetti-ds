import React from "react";

import { NarrowSidebar } from "../../../confetti-ds/src";
import { ICON_TYPES } from "../../../confetti-ds/src/constants";
const { FooterButton: Component } = NarrowSidebar;

export default {
  title: "Sidebar/Subcomponents/Footer Button",
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
