import React, { SyntheticEvent } from "react";

import AbstractTextInput from "./AbstractTextInput";
import { BaseTextInputProps } from "./types";

import {
  IconTypes,
  ICON_TYPES,
  IconColorTypes,
  ICON_COLORS,
} from "../constants";

export interface EmailInputProps extends BaseTextInputProps {
  /** Defines if the Input is valid. */
  isValid?: boolean;
  /** Defines an icon type to display inside the input. */
  icon?: IconTypes;
  /** Defines the Icon color. */
  iconColor?: IconColorTypes;
  /** Callback action to be executed when the Input's Icon is clicked.  */
  onIconClick?: (event?: SyntheticEvent) => any;
}

export default function EmailInput({
  id,
  label,
  disabled = false,
  ariaDisabled = false,
  defaultValue,
  value,
  icon,
  iconColor = "mineral-70",
  required = false,
  helpMessage,
  prefix,
  suffix,
  customErrorMsg,
  onChange = () => {},
  onIconClick = () => {},
}: EmailInputProps) {
  return (
    <AbstractTextInput
      type="email"
      id={id}
      label={label}
      defaultValue={defaultValue}
      value={value}
      icon={icon}
      iconColor={iconColor}
      required={required}
      helpMessage={helpMessage}
      prefix={prefix}
      suffix={suffix}
      customErrorMsg={customErrorMsg}
      onChange={onChange}
      onIconClick={onIconClick}
      disabled={(!ariaDisabled && disabled) || undefined}
      ariaDisabled={ariaDisabled || undefined}
    />
  );
}
