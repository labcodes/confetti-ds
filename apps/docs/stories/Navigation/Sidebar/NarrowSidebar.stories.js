import React from "react";

import { NarrowSidebar as Component } from "../../../../../packages/confetti-ds/src";

import { CollapseButton as CollapseButtonStory } from "./subcomponents/CollapseButton.stories";
import { FooterButton as FooterButtonStory } from "./subcomponents/FooterButton.stories";
import { Header as HeaderStory } from "./subcomponents/Header.stories";
import { Item as ItemStory } from "./subcomponents/Item.stories";
import { UserAvatar as UserAvatarStory } from "./subcomponents/UserAvatar.stories";

export default {
  title: "Navigation/Sidebar/Narrow",
  component: Component,
  argTypes: {
    children: {
      control: false,
    },
  },
  subcomponents: {
    Body: Component.Body,
    CollapseButton: Component.CollapseButton,
    Footer: Component.Footer,
    FooterButton: Component.FooterButton,
    Header: Component.Header,
    Item: Component.Item,
    UserAvatar: Component.UserAvatar,
  },
};

export const Narrow = (args) => (
  <Component {...args} isOpenOnMobile>
    <Component.Header {...HeaderStory.args}>
      <Component.UserAvatar {...UserAvatarStory.args} />
      <Component.CollapseButton {...CollapseButtonStory.args} />
    </Component.Header>

    <Component.Body>
      <Component.Item {...ItemStory.args} isActive />
      <Component.Item {...ItemStory.args} label="With Long Ellipsed Label" />
      <Component.Item {...ItemStory.args} label="With Icon" icon="star" />
    </Component.Body>

    <Component.Footer>
      <Component.FooterButton {...FooterButtonStory.args} label="Password" icon="key" />
    </Component.Footer>
  </Component>
);
