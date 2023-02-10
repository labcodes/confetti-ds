/* eslint-disable react/require-default-props */
import React, { SyntheticEvent } from "react";
import { isUndefined } from "lodash";

interface RadioProps {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: string;
  /** Text that will specify the HTML `name` attribute of an `<input>` element. It's used to group a set of Radios. */
  name: string;
  /** Text that will be rendered as the Radio's label. */
  label: string;
  /** Disables the Radio. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Radio. Won't be read by screen readers. */
  disabled?: boolean;
  /** Defines if the Radio is currently checked. */
  checked?: boolean;
  /** Callback action to be executed when the Radio current value changes. */
  onChange?: (event: SyntheticEvent) => any;
  /** Value that will specify the HTML `value` attribute of an `<input>` element. */
  value?: string | number | readonly string[];
  /** Add a class name to make custom changes */
  className?: string;
}

export default function Radio({
  id,
  name,
  label,
  ariaDisabled = false,
  disabled = false,
  checked,
  onChange = () => {},
  value,
  className,
}: RadioProps) {
  const handleOnChange = (event) => {
    if (!isUndefined(onChange)) {
      onChange(event);
    }
  };

  return (
    <React.Fragment>
      <input
        className={`lab-radio ${className || ""}`}
        type="radio"
        id={id}
        checked={checked}
        name={name}
        value={value}
        onChange={!ariaDisabled ? handleOnChange : () => {}}
        disabled={(!ariaDisabled && disabled) || undefined}
        aria-disabled={ariaDisabled || undefined}
      />
      <label className="lab-radio__label" htmlFor={id}>
        <span className="lab-radio__container" />
        {label}
      </label>
    </React.Fragment>
  );
}
