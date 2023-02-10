import React from "react";

import AbstractButton from "./AbstractButton";
import { BaseButtonProps } from "./types";

export interface TextButtonProps extends BaseButtonProps {
  skin?: "" | "light" | "dark";
}

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
}: TextButtonProps) {
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
