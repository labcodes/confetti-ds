import React from "react";

import { NarrowSidebar } from "../../../../../packages/confetti-ds/src";
import mrgeraldo from "./MrGeraldo.png";
const { UserAvatar: Component } = NarrowSidebar;

export default {
  title: "Sidebar/Narrow Subcomponents/User Avatar",
  component: Component,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const UserAvatar = (args) => <Component {...args} />;
UserAvatar.args = {
  avatarSrc: mrgeraldo,
  altText: "Mr. Geraldo",
  caption: "Bot and Administrator",
};
