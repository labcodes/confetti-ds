import React from "react";

import { LinkAction as Component } from "../../../../../../packages/confetti-ds/src/Card";

export default {
  title: "Cards/Card/Card Subcomponents/Link Action",
  component: Component,
};

export const LinkAction = (args) => <Component {...args} />;
LinkAction.args = { text: "Link Action" };
