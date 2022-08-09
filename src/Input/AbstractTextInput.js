/* eslint-disable react/no-did-update-set-state */
import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

import { ICON_TYPES, ICON_COLORS } from "../constants";

export default function AbstractTextInput({
  type,
  id,
  label,
  disabled,
  ariaDisabled,
  icon,
  iconColor,
  required,
  helpMessage,
  prefix,
  suffix,
  customErrorMsg,
  onChange,
  onIconClick,
  defaultValue,
  value,
  isValid,
}) {
  const [localValue, setLocalValue] = React.useState(
    value || defaultValue || ""
  );
  const [localIsValid, setLocalIsValid] = React.useState(
    !isUndefined(isValid) ? isValid : true // If isValid is undefined, it probably be a EmailInput
  );

  const inputRef = React.useRef();

  if (!isUndefined(defaultValue) && !isUndefined(value)) {
    // eslint-disable-next-line no-console
    console.warn(
      `You are setting both value and defaultValue for input ${id} at the same time. We always initialize value, if it is truthy. Make sure this is the behaviour you want.`
    );
  }

  React.useEffect(() => {
    // return () => {
    //   effect
    // };
    if (inputRef.current) {
      /**
       * Has defaultValue but has no value and isValid === undefined
       */
      if (defaultValue && !value && isUndefined(isValid)) {
        const localIsValid = inputRef.current.validity.valid;
        setLocalIsValid(localIsValid);
      }

      /**
       * Has value but isValid === undefined
       */
      if (value && isUndefined(isValid)) {
        const localIsValid = inputRef.current.validity.valid;
        setLocalIsValid(localIsValid);
      }

      if (!localIsValid) {
        inputRef.current.setCustomValidity(customErrorMsg);
      }
    }
  }, []);

  React.useEffect(() => {
    setLocalIsValid(isValid);
    setLocalValue(value);

    if (inputRef.current) {
      if (!isUndefined(isValid) && !isValid) {
        inputRef.current.setCustomValidity(customErrorMsg);
      } else if (isValid) {
        inputRef.current.setCustomValidity("");
      }
    }
  }, [isValid, value]);

  React.useEffect(() => {
    if (inputRef.current) setLocalIsValid(inputRef.current.validity.valid);
  }, [localValue]);

  const requiredIcon = () =>
    required ? (
      <span className="lab-input__required-icon">
        <Icon type="star" color="white" />
      </span>
    ) : (
      ""
    );

  const prefixArea = () =>
    prefix ? <span className="lab-input__prefix">{prefix}</span> : "";

  const suffixArea = () =>
    suffix ? <div className="lab-input__suffix">{suffix}</div> : "";

  const handleOnChange = (event) => {
    const inputElement = event.target;
    const inputElementValue = inputElement.value;
    const inputElementIsValid = inputElement.validity.valid;

    // First we reset the custom validity
    inputElement.setCustomValidity("");

    if (!isUndefined(onChange)) {
      onChange(event);
    }

    // Then we set the state with the new value
    setLocalValue(inputElementValue);

    if (isUndefined(isValid) || (isValid && required)) {
      // Finally, if the user doesn't force the 'isValid', we use browser's validation from the input
      setLocalIsValid(inputElementIsValid);
    } else if (!isValid) {
      // We only set the customErrorMsg again if the input is forced invalid
      inputElement.setCustomValidity(customErrorMsg);
      setLocalIsValid(isValid);
    }
  };

  let className = "";
  debugger;
  if (ariaDisabled || disabled) {
    className += " lab-input--disabled";
  } else if (!localIsValid) {
    className += " lab-input--invalid";
  }

  return (
    <React.Fragment>
      <div className={`lab-input ${className}`}>
        <input
          className={
            `lab-input__field ` +
            `${prefix ? `lab-input__field--prefixed ` : ``}` +
            `${suffix ? `lab-input__field--suffixed ` : ``}`
          }
          id={id}
          name={id}
          type={type}
          value={localValue}
          ref={inputRef}
          onChange={!ariaDisabled ? handleOnChange : () => {}}
          autoComplete="off"
          placeholder=" " // required for label placement
          disabled={(!ariaDisabled && disabled) || undefined}
          aria-disabled={ariaDisabled || undefined}
          required={required || undefined}
        />
        <div className="lab-input__borders" />
        {prefixArea()}
        {suffixArea()}
        <div className="lab-input__label-wrapper">
          {/* The following duplicated prefixArea is necessary to allow the label to be positioned correctly */}
          {prefixArea()}
          <label className="lab-input__label" htmlFor={id}>
            {label}
          </label>
        </div>
        {icon ? (
          <TrailingIcon
            icon={icon}
            iconColor={iconColor}
            onIconClick={onIconClick}
            disabled={(!ariaDisabled && disabled) || undefined}
            ariaDisabled={ariaDisabled || undefined}
          />
        ) : null}
        {requiredIcon()}
      </div>
      <TextInputMessage
        helpMessage={helpMessage}
        customErrorMsg={customErrorMsg}
        localValue={localValue}
        localIsValid={localIsValid}
      />
    </React.Fragment>
  );
}

// ----- Auxiliary components ----- //

function TrailingIcon({
  icon,
  iconColor,
  onIconClick,
  disabled,
  ariaDisabled,
}) {
  return (
    <button
      type="button"
      className={`lab-input__icon${
        disabled ? ` lab-input__icon--disabled` : ``
      }`}
      onClick={!ariaDisabled ? onIconClick : () => {}}
      disabled={(!ariaDisabled && disabled) || undefined}
      aria-disabled={ariaDisabled || undefined}
    >
      <Icon type={icon} color={iconColor} />
    </button>
  );
}

TrailingIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  onIconClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaDisabled: PropTypes.bool,
};

TrailingIcon.defaultProps = {
  iconColor: "mineral-70",
  onIconClick: () => {},
  disabled: false,
  ariaDisabled: false,
};

function TextInputMessage({
  helpMessage,
  customErrorMsg,
  localIsValid,
  localValue,
}) {
  let message = null;
  if (helpMessage && localIsValid) {
    message = (
      <div className="lab-input__message lab-input__message--required">
        {helpMessage}
      </div>
    );
  }

  if (!localIsValid && helpMessage && !localValue) {
    message = (
      <div className="lab-input__message lab-input__message--error">
        {helpMessage}
      </div>
    );
  } else if (!localIsValid) {
    message = (
      <div className="lab-input__message lab-input__message--error">
        {customErrorMsg}
      </div>
    );
  }

  return message;
}

TextInputMessage.propTypes = {
  helpMessage: PropTypes.string,
  customErrorMsg: PropTypes.string,
  localValue: PropTypes.string,
  localIsValid: PropTypes.bool,
};

TextInputMessage.defaultProps = {
  helpMessage: undefined,
  customErrorMsg: undefined,
  localValue: undefined,
  localIsValid: undefined,
};

AbstractTextInput.propTypes = {
  /** Passes AbstractInput's type to the HTML Input `type` attribute of the `<input>` element. */
  type: PropTypes.string,
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
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
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
  /** Callback action to be executed when the Input's Icon is clicked. */
  onIconClick: PropTypes.func,
};

AbstractTextInput.defaultProps = {
  type: "text",
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
