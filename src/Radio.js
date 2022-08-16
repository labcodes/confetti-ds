/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

export default function Radio({
  className,
  id,
  label,
  disabled,
  ariaDisabled,
  checked,
  name,
  value,
  onChange,
}) {
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

Radio.propTypes = {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: PropTypes.string.isRequired,
  /** Text that will specify the HTML `name` attribute of an `<input>` element. It's used to group a set of Radios. */
  name: PropTypes.string.isRequired,
  /** Text that will be rendered as the Radio's label. */
  label: PropTypes.string.isRequired,
  /** Disables the Radio. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the Radio. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Defines if the Radio is currently checked. */
  checked: PropTypes.bool,
  /** Callback action to be executed when the Radio current value changes. */
  onChange: PropTypes.func,
  /** Value that will specify the HTML `value` attribute of an `<input>` element. */
  value: PropTypes.oneOfType([string, number, bool]).isRequired,
  /** Add a class name to make custom changes */
  className: PropTypes.string,
};

Radio.defaultProps = {
  disabled: false,
  ariaDisabled: false,
  checked: undefined,
  className: undefined,
  onChange: () => {},
};
