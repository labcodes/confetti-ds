import React from "react";

import { PasswordInput as Component } from "../../../../../packages/confetti-ds/src/Input";

export default {
  title: "Data Inputs/Text Input/Password Input",
  component: Component,
};

export const PasswordInput = (args) => <Component {...args} />;
PasswordInput.args = {
  id: "demo-input",
  label: "Demo label",
  onChange: (event) => console.log(event),
};
