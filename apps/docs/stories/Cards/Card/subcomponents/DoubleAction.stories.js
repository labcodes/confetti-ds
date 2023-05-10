import React from "react";

import { DoubleAction as Component } from "../../../../../../packages/confetti-ds/src/Card";
import { CardContext } from "../../../../../../packages/confetti-ds/src/Card/contexts";

export default {
  title: "Cards/Card/Card Subcomponents/Double Action",
  component: Component,
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const DoubleAction = (args) => (
  <CardContext.Provider value={{}}>
    <Component {...args} />
  </CardContext.Provider>
);

DoubleAction.args = {
  actionsProps: [
    {
      label: "Action 1",
      onClick: (e) => alert("Action 1 clicked", e),
      icon: "AddCircle",
    },
    {
      label: "Action 2",
      onClick: (e) => alert("Action 2 clicked", e),
      icon: "SubtractCircle",
    },
  ],
};
