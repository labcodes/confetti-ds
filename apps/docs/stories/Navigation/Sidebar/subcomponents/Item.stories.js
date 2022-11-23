import React from "react";

import { NarrowSidebar } from "../../../../../../packages/confetti-ds/src";
import { ICON_TYPES } from "../../../../../../packages/confetti-ds/src/constants";
const { Item: Component } = NarrowSidebar;

export default {
  title: "Navigation/Sidebar/Narrow Subcomponents/Item",
  component: Component,
  argTypes: {
    icon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const Item = (args) => <Component {...args} />;
Item.args = {
  onClick: () => alert("Item clicked"),
  label: "Sidebar Item",
}
