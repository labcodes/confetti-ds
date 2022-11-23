import React from "react";

import { Badge as Component } from "../../../../packages/confetti-ds/src";

export default {
  title: "Elements/Badge",
  component: Component,
};

export const Badge = (args) => <Component {...args} />;
Badge.args = {
  type: "floating-add",
};
