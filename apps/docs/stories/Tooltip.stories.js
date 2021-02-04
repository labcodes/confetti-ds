import React from "react";

import { Tooltip as Component, Button } from "../confetti-ds/src";

export default {
  title: "Tooltip/Tooltip",
  component: Component,
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
      <Button text="Hover me" />
    </Component>
  </div>
);

Tooltip.args = {
  id: "demo-tooltip",
  text: "This is the tooltip's text",
};
