import React from "react";

import { NarrowSidebar } from "../../../../../packages/confetti-ds/src";
import logo from "./logo.png";
const { Logotype: Component } = NarrowSidebar;

export default {
  title: "Sidebar/Narrow Subcomponents/Logotype",
  component: Component,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Logotype = (args) => <Component {...args} />;
Logotype.args = {
  logoSrc: logo,
  altText: "Labcodes' logo",
};
