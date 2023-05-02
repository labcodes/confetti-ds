import React from "react";

import AbstractButton from "./AbstractButton";
import { BaseButtonProps } from "./types";

export interface OutlineButtonProps extends BaseButtonProps {
  theme?: "teal" | "purple" | "light" | "dark";
}

export default function OutlineButton({
  label,
  kind = "outline",
  type = "button",
  theme = "teal",
  hasIcon = false,
  icon,
  size = "normal",
  ariaDisabled = false,
  disabled = false,
  onClick = () => {},
  fullWidth = false,
  tabIndex,
}: OutlineButtonProps) {
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
