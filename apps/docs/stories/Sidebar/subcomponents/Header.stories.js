import React from "react";

import { NarrowSidebar } from "../../../confetti-ds/src";
const { Header: Component } = NarrowSidebar;

export default {
  title: "Sidebar/Subcomponents/Header",
  component: Component,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Header = (args) => <Component {...args} />;
