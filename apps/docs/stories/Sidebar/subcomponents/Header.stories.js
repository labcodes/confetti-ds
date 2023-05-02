import React from "react";

import { NarrowSidebar } from "../../../../../packages/confetti-ds/src";
const { Header: Component } = NarrowSidebar;

export default {
  title: "Sidebar/Narrow Subcomponents/Header",
  component: Component,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Header = (args) => <Component {...args} />;
