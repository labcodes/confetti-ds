import React from "react";

import AbstractButton from "./AbstractButton";
import { BaseButtonProps } from "./types";
export interface ButtonProps extends BaseButtonProps {
  /** Button style variation. */
  variant?: "default" | "outline" | "text";
  /** Sets the icon related to the button label. Default state: no icon. */
  skin?:
    | ""
    | "light"
    | "dark"
    | "warning"
    | "destructive"
    | "warning-invert"
    | "destructive-invert"
    | "confirmation-invert";
}

export default function Button({
  text,
  type = "button" as const,
  icon,
  size = "normal",
  ariaDisabled = false,
  disabled = false,
  onClick = (event) => {},
  fullWidth = false,
  tabIndex,
  variant = "default",
  skin = "",
}: ButtonProps) {
  return (
    <AbstractButton
      variant="default"
      text={text}
      type={type}
      skin={skin}
      icon={icon}
      size={size}
      disabled={disabled}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
      fullWidth={fullWidth}
      tabIndex={tabIndex}
    />
  );
}
