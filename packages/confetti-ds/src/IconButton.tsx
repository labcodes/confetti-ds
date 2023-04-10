import React from "react";

import Icon from "./Icon";
import { IconTypes } from "./constants";

export interface IconButtonProps {
  /** Icon Button theme variation. */
  theme?: "teal" | "purple" | "light" | "dark";
  /** Sets the icon related to the button label. Default state: no icon. */
  icon?: IconTypes;
  /** Disables the Icon Button. Won't be read by screen readers. */
  disabled?: boolean;
}
