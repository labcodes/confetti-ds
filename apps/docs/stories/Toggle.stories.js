import React from "react";

import { Toggle as Component  } from "../confetti-ds/src";

export default {
  title: "Toggle/Toggle",
  component: Component,
};

export const Toggle = (args) => <Component {...args} />;
Toggle.args = {
  id: "demo-toggle",
  name: "Demo toggle",
};
