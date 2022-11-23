import React from "react";

import { NarrowSidebar } from "../../../../../../packages/confetti-ds/src";
const { CollapseButton: Component } = NarrowSidebar;

export default {
  title: "Navigation/Sidebar/Narrow Subcomponents/Collapse Button",
  component: Component,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const CollapseButton = (args) => <Component {...args} />;
CollapseButton.args = {
  onClick: () => {}
}
