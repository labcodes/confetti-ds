import React from "react";

import AbstractButton from "./AbstractButton";
import { BaseButtonProps } from "./types";
export interface ButtonProps extends BaseButtonProps {
  /** Button style variation. */
  kind?: "default" | "outline" | "text";
  /** Sets the icon related to the button label. Default state: no icon. */
  theme?:
    | "teal"
    | "purple"
    | "light"
    | "dark"
    | "warning"
    | "destructive"
    | "confirmation"
    | "warning-invert"
    | "destructive-invert"
    | "confirmation-invert";
}

export default function Button({
  label,
  type = "button" as const,
  hasIcon = false,
  icon,
  size = "normal",
  ariaDisabled = false,
  disabled = false,
  onClick = (event) => {},
  fullWidth = false,
  tabIndex,
  kind = "default",
  theme = "teal",
}: ButtonProps) {
  return (
    <AbstractButton
      kind={kind}
      label={label}
      type={type}
      theme={theme}
      icon={icon}
      hasIcon={hasIcon}
      size={size}
      disabled={disabled}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
      fullWidth={fullWidth}
      tabIndex={tabIndex}
    />
  );
}
