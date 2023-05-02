import React from "react";
import { TAG_COLORS } from "../../../../packages/confetti-ds/src/constants";

import {
  TagDropdown as Component,
  SectionTitle,
  TagDropdownItem,
} from "../../../../packages/confetti-ds/src/Dropdown";

export default {
  title: "Tag Dropdown/Tag Dropdown",
  component: Component,
  subcomponents: {
    SectionTitle: SectionTitle,
    TagItem: TagDropdownItem,
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
      <SectionTitle text="Sort by" />

      <TagDropdownItem
        text="A to Z"
        value="title"
        isOutline
        color={args.color}
      />
      <TagDropdownItem
        text="Z to A"
        value="-title"
        isOutline
        color={args.color}
        disabled
      />
      <TagDropdownItem
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
