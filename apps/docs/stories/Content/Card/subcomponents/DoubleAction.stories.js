import React from "react";

import { DoubleAction as Component } from "../../../../confetti-ds/src/Card";
import { CardContext } from "../../../../confetti-ds/src/Card/contexts";

export default {
  title: "Content/Card/Card Subcomponents/Double Action",
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
      text: "Action 1",
      onClick: (e) => console.log("Action 1 clicked", e),
      icon: "plus",
    },
    {
      text: "Action 2",
      onClick: (e) => console.log("Action 2 clicked", e),
      icon: "minus",
    },
  ],
};
