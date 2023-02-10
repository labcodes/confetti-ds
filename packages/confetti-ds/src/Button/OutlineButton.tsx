import React from "react";

import AbstractButton from "./AbstractButton";
import { BaseButtonProps } from "./types";

export interface OutlineButtonProps extends BaseButtonProps {
  skin?: "" | "light" | "dark";
}

export default function OutlineButton({
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
}: OutlineButtonProps) {
  return (
    <AbstractButton
      variant="outline"
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
