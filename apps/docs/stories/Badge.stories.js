import React from "react";

import { Badge as Component } from "../confetti-ds/src";

export default {
  title: "System Messages/Badge",
  component: Component,
};

export const Badge = (args) => <Component {...args} />;
Badge.args = {
  type: "floating-add",
};
