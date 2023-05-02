import React from "react";

import { NarrowSidebar } from "../../../../../packages/confetti-ds/src";
const { Footer: Component } = NarrowSidebar;

export default {
  title: "Sidebar/Narrow Subcomponents/Footer",
  component: Component,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Footer = (args) => <Component {...args} />;
