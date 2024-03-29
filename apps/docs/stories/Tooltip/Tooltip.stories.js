import React from "react";

import {
  Tooltip as Component,
  Button,
} from "../../../../packages/confetti-ds/src";

export default {
  title: "Tooltip/Tooltip",
  component: Component,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Tooltip = (args) => (
  <div
    style={{
      padding: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Component {...args}>
      <Button label="Hover me" />
    </Component>
  </div>
);

Tooltip.args = {
  id: "demo-tooltip",
  text: "This is the tooltip's text",
};
