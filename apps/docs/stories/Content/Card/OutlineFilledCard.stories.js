import React from "react";

import {
  OutlineFilledCard as Component,
  CardHeader,
  CardImage,
  CardDivider,
  DoubleAction,
} from "../../../../../packages/confetti-ds/src/Card";
import { outlineFilledCardChoices } from "../../../../../packages/confetti-ds/src/Card/propTypes";

import { DoubleAction as DoubleActionStory } from "./subcomponents/DoubleAction.stories";
import { CardDivider as CardDividerStory } from "./subcomponents/CardDivider.stories";
import { CardImage as CardImageStory } from "./subcomponents/CardImage.stories";
import { CardHeader as CardHeaderStory } from "./subcomponents/CardHeader.stories";

export default {
  title: "Content/Card/Outline Filled Card",
  component: Component,
  subcomponents: { CardImage, CardHeader, CardDivider, DoubleAction },
  argTypes: {
    color: {
      control: { type: "radio", options: outlineFilledCardChoices.color },
    },
    children: {
      control: false,
    },
  },
};

export const OutlineFilledCard = (args) => (
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

OutlineFilledCard.args = {
  color: "mineral",
}
