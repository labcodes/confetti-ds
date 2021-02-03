import React from "react";

import { Badge as Component } from "../confetti-ds/src";

export default {
  title: "Icons & Badges/Badge",
  component: Component,
};

export const Badge = (args) => <Component {...args} />;
Badge.args = {
  type: "floating-add",
};
