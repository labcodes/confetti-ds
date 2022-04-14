import React from "react";
import { TAG_COLORS } from "../../confetti-ds/src/constants";

import { TagDropdown as Component } from "../../confetti-ds/src/Dropdown";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Actions/TagDropdown",
  component: Component,
  subcomponents: {
    SectionTitle: Component.SectionTitle,
    TagItem: Component.TagItem,
  },
  argTypes: {
    color: {
      control: { type: "select", options: TAG_COLORS },
    },
  },

  docs: { inlineStories: false },
};

//👇 We create a “template” of how args map to rendering

// 👇 Each story then reuses that template

export const TagDropdown = (args) => (
  <div style={{ height: "500px" }}>
    <Component {...args}>
      <Component.SectionTitle text="Sort by" />

      <Component.TagItem text="A to Z" value="a" isOutline color={args.color} />
      <Component.TagItem
        text="Z to A"
        value="-a"
        isOutline
        color={args.color}
      />
      <Component.TagItem
        text="Avaibility"
        value="avaibility"
        isOutline
        color={args.color}
      />
      <Component.TagItem
        text="Disabled"
        value="disa"
        isOutline
        color={args.color}
        disabled
      />
    </Component>
  </div>
);

TagDropdown.args = {
  onSelect: (event) =>
    console.log("Item selected", event.target.value, event.target.name),
  onClose: () => console.log("Dropdown closed"),
  onOpen: () => console.log("Dropdown opened"),
  id: "1",
  color: "mineral",
  defaultText: "Selecionar",
};
