import React from "react";

import {
  OutlineCard as Component,
  CardHeader,
  CardImage,
  CardDivider,
  DoubleAction,
} from "../../../../../packages/confetti-ds/src/Card";

import { DoubleAction as DoubleActionStory } from "./subcomponents/DoubleAction.stories";
import { CardDivider as CardDividerStory } from "./subcomponents/CardDivider.stories";
import { CardImage as CardImageStory } from "./subcomponents/CardImage.stories";
import { CardHeader as CardHeaderStory } from "./subcomponents/CardHeader.stories";

export default {
  title: "Cards/Card/Outline Card",
  component: Component,
  subcomponents: { CardImage, CardHeader, CardDivider, DoubleAction },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const OutlineCard = (args) => (
  <div className="ignore-this-div" style={{ width: "400px", margin: "0 auto" }}>
    <Component {...args}>
      <CardHeaderStory {...CardHeaderStory.args} />

      <p>This HTML is inside the card body, below the image and header.</p>
      <p>We'd recommend for it to not be too long.</p>

      <CardImageStory {...CardImageStory.args} />
      <CardDividerStory {...CardDividerStory.args} />
      <DoubleAction {...DoubleActionStory.args} />
    </Component>
  </div>
);

OutlineCard.args = {
  color: "mineral",
  skin: "pale",
};
