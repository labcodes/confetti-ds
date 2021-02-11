import React from "react";

import { NarrowSidebar } from "../../../confetti-ds/src";
const { Body: Component } = NarrowSidebar;

export default {
  title: "Sidebar/Subcomponents/Body",
  component: Component,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Body = (args) => <Component {...args} />;
