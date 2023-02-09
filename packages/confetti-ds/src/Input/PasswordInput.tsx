import React, { useState, SyntheticEvent } from "react";

import AbstractTextInput from "./AbstractTextInput";
import { BaseTextInputProps } from "./types";

interface PasswordInputProps extends BaseTextInputProps {
  /** Text that will be displayed at the right portion of the Input. */
  isValid?: boolean;
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
