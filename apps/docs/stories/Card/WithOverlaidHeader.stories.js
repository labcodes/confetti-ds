import React from "react";

import {
  OutlineCard as Component,
  CardHeader,
  CardImage,
  CardDivider,
  DoubleAction,
} from "../../confetti-ds/src/Card";

import { DoubleAction as DoubleActionStory } from "./subcomponents/DoubleAction.stories";
import { CardDivider as CardDividerStory } from "./subcomponents/CardDivider.stories";
import { CardImage as CardImageStory } from "./subcomponents/CardImage.stories";
import { CardHeader as CardHeaderStory } from "./subcomponents/CardHeader.stories";

export default {
  title: "Card/With Overlaid Header",
  component: Component,
  subcomponents: { CardImage, CardHeader, CardDivider, DoubleAction },
};

export const WithOverlaidHeader = (args) => (
  <div className="ignore-this-div" style={{ width: "400px", margin: "0 auto" }}>
    {/* for overlaid headers, card should not be horizontal */}
    <Component {...args} isHorizontal={false}>
      <CardImageStory {...CardImageStory.args} isOverflowed={true} />
      <CardHeaderStory {...CardHeaderStory.args} isOverlay={true} />

      <p>This HTML is inside the card body, below the image and header.</p>
      <p>We'd recommend for it to not be too long.</p>

      <CardDividerStory {...CardDividerStory.args} />
      <DoubleAction {...DoubleActionStory.args} />
    </Component>
  </div>
);

WithOverlaidHeader.args = {
  color: "mineral",
  skin: "pale"
}
