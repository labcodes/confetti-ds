import React from "react";
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

import { usePrevious } from "./hooks";
import Icon from "./Icon";

// Checkbox //

export default function Checkbox({
  id,
  name,
  className,
  label,
  ariaDisabled,
  disabled,
  indeterminate,
  defaultChecked,
  checked,
  value,
  onChange,
}) {
  if (!isUndefined(defaultChecked) && !isUndefined(checked)) {
    // eslint-disable-next-line no-console
    console.warn(
      `You are setting both checked and defaultChecked for input ${id} at the same time. We always initialize the checkbox with defaultChecked. Make sure this is the behaviour you want.`
    );
  }

  const checkedInitialState =
    defaultChecked || (!isUndefined(checked) && checked);
  const [localChecked, setLocalChecked] = React.useState(checkedInitialState);
  const inputRef = React.useRef<HTMLInputElement>();
  const previousChecked = usePrevious(checked);

  const checkIndeterminate = () => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  };

  React.useEffect(() => {
    checkIndeterminate();
    return () => {
      setLocalChecked(false);
    };
  }, []);

  React.useEffect(() => {
    if (previousChecked !== checked) setLocalChecked(checked);
    checkIndeterminate();
  }, [checked, indeterminate]);

  const handleOnChange = (event) => {
    if (!isUndefined(onChange)) {
      onChange(event);
    }

    setLocalChecked((prev) => !prev);
  };

  return (
    <React.Fragment>
      <input
        className={`lab-checkbox ${className || ""}`}
        type="checkbox"
        ref={inputRef}
        id={id}
        name={name}
        checked={localChecked}
        onChange={!ariaDisabled ? handleOnChange : () => {}}
        disabled={(!ariaDisabled && disabled) || undefined}
        aria-disabled={ariaDisabled || undefined}
        {...(value ? { value } : undefined)}
      />
      <label className="lab-checkbox__label" htmlFor={id}>
        <span className="lab-checkbox__box">
          {localChecked || indeterminate ? (
            <Icon
              type={indeterminate ? "minus" : "check"}
              color={ariaDisabled || disabled ? "mineral-40" : "white"}
              size="small"
            />
          ) : null}
        </span>
        {label}
      </label>
    </React.Fragment>
  );
}

Checkbox.propTypes = {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: PropTypes.string.isRequired,
  /** Text that will specify the HTML name attribute of an `<input>` element. */
  name: PropTypes.string.isRequired,
  /** This is the checkbox's label. */
  label: PropTypes.string.isRequired,
  /** Disables the Checkbox. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the Checkbox. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Defines if the Checkbox is currently checked. */
  checked: PropTypes.bool,
  /** Marks Checkbox as indeterminate. Used on "check/uncheck all" Checkbox in a `fieldset` to display when some itens are checked and others are unchecked */
  indeterminate: PropTypes.bool,
  /** Defines if the Checkbox is initialized as "checked". */
  defaultChecked: PropTypes.bool,
  /** Callback action to be executed when the Checkbox is clicked. */
  onChange: PropTypes.func,
  /** Value that will specify the HTML `value` attribute of an `<input>` element. */
  value: PropTypes.oneOfType([string, number, bool]),
  /** Add a class name to make custom changes */
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  disabled: false,
  ariaDisabled: false,
  checked: undefined,
  value: undefined,
  indeterminate: false,
  defaultChecked: undefined,
  className: undefined,
  onChange: () => {},
};
