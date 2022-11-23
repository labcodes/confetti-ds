import React from "react";

import { NarrowSidebar } from "../../../../../../packages/confetti-ds/src";
const { Body: Component } = NarrowSidebar;

export default {
  title: "Navigation/Sidebar/Narrow Subcomponents/Body",
  component: Component,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Body = (args) => <Component {...args} />;
