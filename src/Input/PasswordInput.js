import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";

export default function PasswordInput({
  id,
  label,
  defaultValue,
  value,
  required,
  helpMessage,
  prefix,
  suffix,
  isValid,
  customErrorMsg,
  onChange,
  disabled,
  ariaDisabled,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleTrailingIcon = () => {
    setShowPassword((prev) => !prev);
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
  // }
}

PasswordInput.defaultProps = {
  disabled: false,
  ariaDisabled: false,
  defaultValue: undefined,
  value: undefined,
  required: false,
  helpMessage: undefined,
  prefix: undefined,
  suffix: undefined,
  isValid: undefined,
  customErrorMsg: undefined,
  onChange: () => {},
};

PasswordInput.propTypes = {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: PropTypes.string.isRequired,
  /** The Input's text label. */
  label: PropTypes.string.isRequired,
  /** Disables the text input. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the text input. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Defines a default value for the Input initialization. */
  defaultValue: PropTypes.string,
  /** Value that will be rendered inside the Input field. */
  value: PropTypes.string,
  /** Defines if the Input is required. */
  required: PropTypes.bool,
  /** Text that will be displayed as a help message below the input. */
  helpMessage: PropTypes.string,
  /** Text that will be displayed at the left portion of the Input. */
  prefix: PropTypes.string,
  /** Text that will be displayed at the end of the Input. */
  suffix: PropTypes.string,
  /** Text that will be displayed at the right portion of the Input. */
  isValid: PropTypes.bool,
  /** Custom error message displayed below the Input when the value is not valid. */
  customErrorMsg: PropTypes.string,
  /** Callback action to be executed when the Input default value changes. */
  onChange: PropTypes.func,
};
