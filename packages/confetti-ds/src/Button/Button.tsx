import React from "react";

import AbstractButton, { AbstractButtonProps } from "./AbstractButton";

export default function Button({
  text,
  type = "button" as const,
  variant = "default",
  skin = "",
  icon,
  size = "normal",
  ariaDisabled = false,
  disabled = false,
  onClick = (event) => {},
  fullWidth = false,
  tabIndex,
}: AbstractButtonProps) {
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
