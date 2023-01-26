import React from "react";

import AbstractButton, { AbstractButtonProps } from "./AbstractButton";

export default function Button({
  text,
  skin = "",
  icon = undefined,
  type = "button",
  size = "normal",
  disabled = false,
  ariaDisabled = false,
  onClick = () => {},
  fullWidth = false,
  tabIndex = undefined,
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
