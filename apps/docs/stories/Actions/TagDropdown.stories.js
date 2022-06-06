import React from "react";
import { TAG_COLORS } from "../../confetti-ds/src/constants";

import { TagDropdown as Component } from "../../confetti-ds/src/Dropdown";

export default {
  title: "Actions/Tag Dropdown",
  component: Component,
  subcomponents: {
    SectionTitle: Component.SectionTitle,
    TagItem: Component.TagItem,
  },
  argTypes: {
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
    children: {
      control: false,
    },
  },
};

export const TagDropdown = (args) => (
  <div style={{ height: "200px" }}>
    <Component {...args}>
      <Component.SectionTitle text="Sort by" />

      <Component.TagItem
        text="A to Z"
        value="title"
        isOutline
        color={args.color}
      />
      <Component.TagItem
        text="Z to A"
        value="-title"
        isOutline
        color={args.color}
        disabled
      />
      <Component.TagItem
        text="Avaibility"
        value="Avaibility"
        isOutline
        color={args.color}
      />
    </Component>
  </div>
);

TagDropdown.args = {
  id: "1",
  defaultText: "Sort by",
  color: "mineral",
  onSelect: (event) =>
    console.log("Item selected", event.target.value, event.target.name),
  onClose: () => console.log("Dropdown closed"),
  onOpen: () => console.log("Dropdown opened"),
};
