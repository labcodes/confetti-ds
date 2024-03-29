import React from "react";

import { NarrowSidebar as Component } from "../../../../packages/confetti-ds/src";

import { CollapseButton as CollapseButtonStory } from "./subcomponents/CollapseButton.stories";
import { FooterButton as FooterButtonStory } from "./subcomponents/FooterButton.stories";
import { Header as HeaderStory } from "./subcomponents/Header.stories";
import { Item as ItemStory } from "./subcomponents/Item.stories";
import { Logotype as LogotypeStory } from "./subcomponents/Logotype.stories";
import { UserAvatar as UserAvatarStory } from "./subcomponents/UserAvatar.stories";

export default {
  title: "Sidebar/Narrow Sidebar With Footer Avatar",
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
    Logotype: Component.Logotype,
    UserAvatar: Component.UserAvatar,
  },
};

export const NarrowWithFooterAvatar = (args) => (
  <Component {...args} isOpenOnMobile>
    <Component.Header {...HeaderStory.args}>
      <Component.Logotype {...LogotypeStory.args} />
      <Component.CollapseButton {...CollapseButtonStory.args} />
    </Component.Header>

    <Component.Body>
      <Component.Item {...ItemStory.args} isActive />
      <Component.Item {...ItemStory.args} label="With Long Ellipsed Label" />
      <Component.Item {...ItemStory.args} label="With Icon" icon="Star" />
    </Component.Body>

    <Component.Footer>
      <Component.UserAvatar {...UserAvatarStory.args} />
      <Component.FooterButton
        {...FooterButtonStory.args}
        label="Password"
        icon="Key"
      />
    </Component.Footer>
  </Component>
);
