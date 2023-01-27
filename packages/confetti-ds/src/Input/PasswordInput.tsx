import React, { useState, SyntheticEvent } from "react";

import AbstractTextInput from "./AbstractTextInput";

interface PasswordInputProps {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id?: string;
  /** The Input's text label. */
  label?: string;
  /** Disables the text input. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: boolean;
  /** Disables the text input. Won't be read by screen readers. */
  disabled: boolean;
  /** Defines a default value for the Input initialization. */
  defaultValue: string;
  /** Value that will be rendered inside the Input field. */
  value: string;
  /** Defines if the Input is required. */
  required: boolean;
  /** Text that will be displayed as a help message below the input. */
  helpMessage: string;
  /** Text that will be displayed at the left portion of the Input. */
  prefix: string;
  /** Text that will be displayed at the end of the Input. */
  suffix: string;
  /** Text that will be displayed at the right portion of the Input. */
  isValid: boolean;
  /** Custom error message displayed below the Input when the value is not valid. */
  customErrorMsg: string;
  /** Callback action to be executed when the Input default value changes. */
  onChange: (event?: SyntheticEvent) => any;
}

const PasswordInput = ({
  id,
  label,
  defaultValue,
  value,
  helpMessage,
  prefix,
  suffix,
  isValid,
  customErrorMsg,
  disabled = false,
  ariaDisabled = false,
  required = false,
  onChange = () => {},
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleTrailingIcon = () => {
    setShowPassword((showPassowrd) => !showPassword);
  };

  return (
    <AbstractTextInput
      type={showPassword ? "text" : "password"}
      icon={showPassword ? "eye-opened" : "eye-closed"}
      onIconClick={toggleTrailingIcon}
      id={id}
      label={label}
      defaultValue={defaultValue}
      value={value}
      required={required}
      helpMessage={helpMessage}
      prefix={prefix}
      suffix={suffix}
      isValid={isValid}
      customErrorMsg={customErrorMsg}
      onChange={onChange}
      disabled={(!ariaDisabled && disabled) || undefined}
      ariaDisabled={ariaDisabled || undefined}
    />
  );
};

export default PasswordInput;
