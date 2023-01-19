import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";
import { ICON_TYPES, ICON_COLORS } from "../constants";

/**
 *
 * @param id {string} Text that will serve as unique identifier. It's also an important accessibility tool.
 * @param label {string} The Input's text label.
 * @param defaultValue {string} Text that will be rendered inside the Input field.
 * @param value {string} Text that will be rendered inside the Input field.
 * @param icon {string} Defines which symbol to show.
 * @param iconColor {string} Defines the color of the displayed icon.
 * @param required {boolean} Defines if the Input is required.
 * @param helpMessage {string} Text that will be displayed as a help message below the input.
 * @param prefix {string} Text that will be displayed at the left portion of the Input.
 * @param suffix {string} Text that will be displayed at the right portion of the Input.
 * @param isValid {boolean} Defines if the Input is valid.
 * @param customErrorMsg {string} Custom error message displayed below the Input when the value is not valid.
 * @param onChange {callback} Callback action to be executed when the Input default value changes.
 * @param onIconClick {callback} Callback action to be executed when the Input's Icon is clicked.
 * @param disabled {boolean} Disables the text input. Won't be read by screen readers.
 * @param ariaDisabled {boolean} Disables the text input. Will be read by screen readers. When true, will override `disabled`.
 * @returns {JSX.Element} Returns a React component
 * @constructor
 */

export default function TextInput({
  id,
  label,
  defaultValue,
  value,
  icon,
  iconColor,
  required,
  helpMessage,
  prefix,
  suffix,
  isValid,
  customErrorMsg,
  onChange,
  onIconClick,
  disabled,
  ariaDisabled,
}) {
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

TextInput.propTypes = {
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
  /** Text that will be rendered inside the Input field. */
  value: PropTypes.string,
  /** Defines which symbol to show. */
  icon: PropTypes.oneOf(ICON_TYPES),
  /** Defines the color of the displayed icon. */
  iconColor: PropTypes.oneOf(ICON_COLORS),
  /** Defines if the Input is required. */
  required: PropTypes.bool,
  /** Text that will be displayed as a help message below the input. */
  helpMessage: PropTypes.string,
  /** Text that will be displayed at the left portion of the Input. */
  prefix: PropTypes.string,
  /** Text that will be displayed at the right portion of the Input. */
  suffix: PropTypes.string,
  /** Defines if the Input is valid. */
  isValid: PropTypes.bool,
  /** Custom error message displayed below the Input when the value is not valid. */
  customErrorMsg: PropTypes.string,
  /** Callback action to be executed when the Input default value changes. */
  onChange: PropTypes.func,
  /** Callback action to be executed when the Input's Icon is clicked.  */
  onIconClick: PropTypes.func,
};

TextInput.defaultProps = {
  disabled: false,
  ariaDisabled: false,
  defaultValue: undefined,
  value: undefined,
  icon: undefined,
  iconColor: "mineral-70",
  required: false,
  helpMessage: undefined,
  prefix: undefined,
  suffix: undefined,
  isValid: undefined,
  customErrorMsg: undefined,
  onChange: () => {},
  onIconClick: () => {},
};
