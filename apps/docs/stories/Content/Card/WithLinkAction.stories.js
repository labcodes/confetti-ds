import React from "react";

import {
  OutlineCard as Component,
  CardHeader,
  CardImage,
  CardDivider,
  LinkAction,
} from "../../../../../packages/confetti-ds/src/Card";

import { LinkAction as LinkActionStory } from "./subcomponents/LinkAction.stories";
import { CardDivider as CardDividerStory } from "./subcomponents/CardDivider.stories";
import { CardImage as CardImageStory } from "./subcomponents/CardImage.stories";
import { CardHeader as CardHeaderStory } from "./subcomponents/CardHeader.stories";

export default {
  title: "Content/Card/With Link Action",
  component: Component,
  subcomponents: { CardImage, CardHeader, CardDivider, LinkAction },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const WithLinkAction = (args) => (
  <div className="ignore-this-div" style={{ width: "400px", margin: "0 auto" }}>
    <Component {...args}>
      <CardHeaderStory {...CardHeaderStory.args} />

      <p>This HTML is inside the card body, below the image and header.</p>
      <p>We'd recommend for it to not be too long.</p>

      <CardImageStory {...CardImageStory.args} />
      <CardDividerStory {...CardDividerStory.args} />
      <LinkActionStory {...LinkActionStory.args} />
    </Component>
  </div>
);

WithLinkAction.args = {
  color: "mineral",
  skin: "pale"
}

