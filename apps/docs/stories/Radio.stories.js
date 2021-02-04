import React from "react";

import { Radio as Component } from "../confetti-ds/src";

export default {
  title: "Radio/Radio",
  component: Component,
  argTypes: {
    value: {
      control: {
        type: "select",
        options: ["string", "number", "bool"]
      }
    }
  }
};

export const Radio = (args) => (
  <fieldset>
    <Component
      id="demo-radio-1"
      name="demo-radio"
      label="radio 1"
      value="bool"
    />
    <Component
      id="demo-radio-2"
      name="demo-radio"
      label="radio 2"
      value="bool"
    />
    <Component
      id="demo-radio-3"
      name="demo-radio"
      label="radio 3"
      value="bool"
    />
  </fieldset>
);
