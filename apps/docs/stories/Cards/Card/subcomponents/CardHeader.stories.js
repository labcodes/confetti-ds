import React from "react";

import { CardHeader as Component } from "../../../../../../packages/confetti-ds/src/Card";
import { ICON_TYPES } from "../../../../../../packages/confetti-ds/src/constants";

export default {
  title: "Cards/Card/Card Subcomponents/Card Header",
  component: Component,
  argTypes: {
    categoryIcon: {
      control: { type: "select", options: ICON_TYPES },
    },
  },
};

export const CardHeader = (args) => <Component {...args} />;
CardHeader.args = {
  title: "Title text",
  subtitle: "Subtitle text is a little longer than the title",
  categoryText: "Category",
};
