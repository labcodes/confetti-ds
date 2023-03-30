import React, { SyntheticEvent } from "react";

import AbstractTextInput from "./AbstractTextInput";
import { BaseTextInputProps } from "./types";

import { IconTypes, IconColorTypes } from "../constants";

export interface TextInputProps extends BaseTextInputProps {
  /** Defines if the Input is valid. */
  isValid?: boolean;
  /** Defines which symbol to show. */
  icon?: IconTypes;
  /** Defines the color of the displayed icon. */
  iconColor?: IconColorTypes;
  /** Callback action to be executed when the Input default value changes. */
  onChange?: (event?: SyntheticEvent) => any;
  /** Callback action to be executed when the Input's Icon is clicked.  */
  onIconClick?: (event?: SyntheticEvent) => any;
}

export default function TextInput({
  id,
  isValid,
  icon,
  iconColor = "mineral-70",
  onChange = () => {},
  onIconClick = () => {},
  disabled = false,
  ariaDisabled = false,
  defaultValue,
  value,
  required = false,
  helpMessage,
  prefix,
  suffix,
  customErrorMsg,
  label,
}: TextInputProps) {
  return (
    <AbstractTextInput
      type="text"
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
      isValid={isValid}
      customErrorMsg={customErrorMsg}
      onChange={onChange}
      onIconClick={onIconClick}
      disabled={(!ariaDisabled && disabled) || undefined}
      ariaDisabled={ariaDisabled || undefined}
    />
  );
}
