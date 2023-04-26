import React from "react";

import AbstractButton from "./AbstractButton";
import { BaseButtonProps } from "./types";

export interface TextButtonProps extends BaseButtonProps {
  theme?: "teal" | "purple" | "light" | "dark";
}

export default function TextButton({
  label,
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
}: TextButtonProps) {
  return (
    <AbstractButton
      kind="text"
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
