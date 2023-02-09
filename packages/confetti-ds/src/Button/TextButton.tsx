import React from "react";

import AbstractButton, { AbstractButtonProps } from "./AbstractButton";

export default function TextButton({
  text,
  type = "button",
  skin,
  icon,
  size = "normal",
  ariaDisabled = false,
  disabled = false,
  onClick = () => {},
  fullWidth = false,
  tabIndex,
}: AbstractButtonProps) {
  return (
    <AbstractButton
      variant="text"
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
