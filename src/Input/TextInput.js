import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";

export default class TextInput extends React.Component {
  static propTypes = {
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
    icon: PropTypes.string,
    /** Defines the color of the displayed icon. */
    iconColor: PropTypes.string,
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

  static defaultProps = {
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

  render() {
    const {
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
    } = this.props;

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
}
