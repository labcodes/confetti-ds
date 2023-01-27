import React , {SyntheticEvent} from "react";

import AbstractTextInput from "./AbstractTextInput";
import { IconTypes, ICON_TYPES, IconColorTypes, ICON_COLORS } from "../constants";

interface EmailInputProps {
 /** Text that will serve as unique identifier. It's also an important accessibility tool. */
 id: string;
 /** The Input's text label. */
 label: string;
 /** Disables the text input. Will be read by screen readers. When true, will override `disabled`. */
 ariaDisabled?: boolean;
 /** Disables the text input. Won't be read by screen readers. */
 disabled?: boolean;
 /** Defines a default value for the Input initialization. */
 defaultValue?: string;
 /** Value that will be rendered inside the Input field. */
 value?: string;
 /** Defines an icon type to display inside the input. */
 icon?: IconTypes;
 /** Defines the Icon color. */
 iconColor?: IconColorTypes;
 /** Defines if the Input is required. */
 required?: boolean;
 /** Text that will be displayed as a help message below the input. */
 helpMessage?: string;
 /** Text that will be displayed at the left portion of the Input. */
 prefix?: string;
 /** Text that will be displayed at the right portion of the Input. */
 suffix?: string;
 /** Custom error message displayed below the Input when the value is not valid. */
 customErrorMsg?: string;
 /** Callback action to be executed when the Input default value changes. */
 onChange?: (event?: SyntheticEvent) => any;
 /** Callback action to be executed when the Input's Icon is clicked.  */
 onIconClick?: (event?: SyntheticEvent) => any;
}
export default function EmailInput({
  id,
  label,
  disabled= false,
  ariaDisabled= false,
  defaultValue,
  value,
  icon,
  iconColor= "mineral-70",
  required= false,
  helpMessage,
  prefix,
  suffix,
  customErrorMsg,
  onChange= () => {},
  onIconClick= () => {},
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
