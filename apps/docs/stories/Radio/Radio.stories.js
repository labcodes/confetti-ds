import React from "react";

import { Radio as Component } from "../../../../packages/confetti-ds/src";

export default {
  title: "Radio/Radio",
  component: Component,
  argTypes: {
    id: {
      control: false,
    },
    name: {
      control: false,
    },
    label: {
      control: false,
    },
    value: {
      control: false,
    },
  },
};

export const Radio = (args) => (
  <fieldset>
    <legend>Radio group</legend>
    <Component
      {...args}
      id="demo-radio-1"
      name="demo-radio"
      label="radio 1"
      value="bool"
    />
    <Component
      {...args}
      id="demo-radio-2"
      name="demo-radio"
      label="radio 2"
      value="bool"
    />
    <Component
      {...args}
      id="demo-radio-3"
      name="demo-radio"
      label="radio 3"
      value="bool"
    />
  </fieldset>
);
