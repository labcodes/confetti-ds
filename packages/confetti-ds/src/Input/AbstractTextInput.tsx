/* eslint-disable react/no-did-update-set-state */
import React, { SyntheticEvent } from "react";
import { isUndefined } from "lodash";
import Icon from "../Icon";

import { IconTypes, IconColorTypes } from "../constants";
import { usePrevious } from "../hooks";
import { BaseTextInputProps } from "./types";

export interface AbstractTextInputProps extends BaseTextInputProps {
  /** Passes AbstractInput's type to the HTML Input `type` attribute of the `<input>` element. */
  type?: string;
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
  icon?: IconTypes;
  /** Defines the color of the displayed icon. */
  iconColor?: IconColorTypes;
  /** Defines if the Input is valid. */
  isValid?: boolean;
  /** Custom error message displayed below the Input when the value is not valid. */
  customErrorMsg?: string;
  /** Callback action to be executed when the Input's Icon is clicked. */
  onIconClick?: (event?: SyntheticEvent) => any;
}

export default function AbstractTextInput({
  id,
  type = "text",
  icon,
  iconColor = "mineral-70" as const,
  isValid,
  customErrorMsg,
  onIconClick = () => {},
  ariaDisabled = false,
  disabled = false,
  required = false,
  onChange = () => {},
  defaultValue,
  value,
  prefix,
  suffix,
  label,
  helpMessage,
}: AbstractTextInputProps) {
  const [localValue, setLocalValue] = React.useState(
    value || defaultValue || ""
  );
  const [localIsValid, setLocalIsValid] = React.useState(
    !isUndefined(isValid) ? isValid : true
  );

  const inputRef = React.useRef<HTMLInputElement>();
  const previousLocalValue = usePrevious(localValue);

  let className = "";
  if (ariaDisabled || disabled) {
    className += " lab-input--disabled";
  } else if (!localIsValid) {
    className += " lab-input--invalid";
  }

  if (!isUndefined(defaultValue) && !isUndefined(value)) {
    // eslint-disable-next-line no-console
    console.warn(
      `You are setting both value and defaultValue for input ${id} at the same time. We always initialize value, if it is truthy. Make sure this is the behaviour you want.`
    );
  }

  React.useEffect(() => {
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

    return () => {
      setLocalIsValid(true);
      setLocalValue("");
    };
  }, []);

  React.useEffect(() => {
    if (!isUndefined(value)) setLocalValue(value);

    if (inputRef.current) {
      if (!isUndefined(isValid) && !isValid) {
        setLocalIsValid(isValid);
        inputRef.current.setCustomValidity(customErrorMsg);
      } else if (isValid) {
        setLocalIsValid(isValid);
        inputRef.current.setCustomValidity("");
      }
    }
  }, [isValid, value]);

  React.useEffect(() => {
    const shouldChangeValidity =
      !isUndefined(previousLocalValue) && previousLocalValue !== localValue;
    if (shouldChangeValidity) {
      setLocalIsValid(inputRef.current.validity.valid);
    }
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

interface TrailingIconProps {
  icon: IconTypes;
  iconColor?: IconColorTypes;
  onIconClick?: (event: SyntheticEvent) => any;
  disabled?: boolean;
  ariaDisabled?: boolean;
}

function TrailingIcon({
  iconColor = "mineral-70",
  onIconClick = () => {},
  disabled = false,
  ariaDisabled = false,
  icon,
}: TrailingIconProps) {
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
      <Icon type={icon} color={iconColor}/>
    </button>
  );
}

interface TextInputMessageProps {
  helpMessage: string;
  customErrorMsg: string;
  localValue: string;
  localIsValid: boolean;
}

function TextInputMessage({
  helpMessage,
  customErrorMsg,
  localIsValid,
  localValue,
}: TextInputMessageProps) {
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
