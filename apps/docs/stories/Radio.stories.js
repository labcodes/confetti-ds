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

export const Radio = (args) => <Component {...args} />;
Radio.args = {
  id: "demo-radio",
  name: "Demo radio",
  label: "Demo radio",
  value: "bool",
};
