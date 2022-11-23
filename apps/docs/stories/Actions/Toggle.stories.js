import React from "react";

import { Toggle as Component  } from "../../../../packages/confetti-ds/src";

export default {
  title: "Actions/Toggle",
  component: Component,
};

export const Toggle = (args) => <Component {...args} />;
Toggle.args = {
  id: "demo-toggle",
  name: "demo-toggle",
};
