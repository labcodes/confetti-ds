import React from "react";

import { Checkbox as Component  } from "../confetti-ds/src";

export default {
  title: "Checkbox/Checkbox",
  component: Component,
};

export const Checkbox = (args) => (
  <fieldset>
    <legend>Checkbox group</legend>
    <Component
      id="demo-checkbox-1"
      name="demo-checkbox"
      label="checkbox 1"
    />
    <Component
      id="demo-checkbox-2"
      name="demo-checkbox"
      label="checkbox 2"
    />
    <Component
      id="demo-checkbox-3"
      name="demo-checkbox"
      label="checkbox 3"
    />
  </fieldset>
);
