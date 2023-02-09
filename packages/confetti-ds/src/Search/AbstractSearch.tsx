import React, { useRef, useState, useEffect, SyntheticEvent } from "react";
import { isUndefined } from "lodash";
import Icon from "../Icon";
import { BaseSearchProps } from "./types";

interface AbstractSearchProps extends BaseSearchProps {
  /** Defines a default value for the Search initialization. */
  defaultValue?: string;
  /** Disables the Search. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Search. Won't be read by screen readers. */
  disabled?: boolean;
  /** The placeholder text when the Search field is empty. Usually used to describe the values accepted (e.g.: Search by keyword or status). */
  placeholder?: string;
  /** Defines which type of search will be renderized*/
  type?: "inline" | "standard";
  /** Previous valued stored on cache*/
  prevValue?: string;
}

export default function AbstractSearch({
  id,
  defaultValue,
  value,
  type,
  disabled = false,
  ariaDisabled = false,
  onChange = () => {},
  onSearch = () => {},
  onClear = () => {},
  placeholder = " ",
}: AbstractSearchProps) {
  const [localValue, setLocalValue] = useState(value || defaultValue || "");
  const searchRef = useRef<HTMLInputElement>();
  const prevValue = useRef<string>();

  const handleOnChange = (event) => {
    setLocalValue(event.target.value);
    if (!isUndefined(onChange)) {
      onChange(event);
    }
  };

  const handleOnSearch = (localValue) => {
    if (!isUndefined(onSearch)) {
      onSearch(localValue);
    }
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 && !isUndefined(onSearch)) {
      onSearch(event.target.value);
    }
  };

  const handleOnClear = (event) => {
    if (isUndefined(value)) {
      setLocalValue("");
    }

    if (!isUndefined(onClear)) {
      onClear(event);
    }
  };

  useEffect(() => {
    if (value && value !== prevValue.current) {
      setLocalValue(value);
    }
  }, [defaultValue]);

  if (!isUndefined(defaultValue) && !isUndefined(value)) {
    // eslint-disable-next-line no-console
    console.warn(
      `You are setting both value and defaultValue for input ${id} at the same time. When a value is passed, we always use it. Make sure this is the behaviour you want.`
    );
  }

  return (
    <div
      className={
        type === "standard" ? "lab-standard-search" : "lab-inline-search"
      }
    >
      <div
        className={`lab-search__wrapper ${
          disabled ? "lab-search--disabled" : ""
        }`}
      >
        <input
          className="lab-search__field"
          type="search"
          autoComplete="off"
          id={id}
          value={localValue}
          ref={searchRef}
          onChange={!ariaDisabled ? handleOnChange : () => {}}
          onKeyDown={!ariaDisabled ? handleKeyPress : () => {}}
          disabled={(!ariaDisabled && disabled) || undefined}
          aria-disabled={ariaDisabled || undefined}
          {...(placeholder ? { placeholder } : "")}
        />

        <div className="lab-search__borders" />
        <TrailingIcon
          onClear={handleOnClear}
          disabled={(!ariaDisabled && disabled) || undefined}
          ariaDisabled={ariaDisabled || undefined}
        />
        {type === "standard" ? (
          <StandardSearchIcon
            handleOnSearch={handleOnSearch}
            disabled={(!ariaDisabled && disabled) || undefined}
            ariaDisabled={ariaDisabled || undefined}
          />
        ) : (
          <InlineSearchIcon disabled={ariaDisabled || disabled} />
        )}
      </div>
    </div>
  );
}

// ----- Auxiliary components ----- //

interface TrailingIconProps {
  disabled?: boolean;
  ariaDisabled?: boolean;
  onClear?: (event?: SyntheticEvent) => any;
}

function TrailingIcon({
  disabled = false,
  ariaDisabled = false,
  onClear = () => {},
}: TrailingIconProps) {
  let className = "lab-search__remove-icon";
  if (!onClear) {
    className += " lab-input__icon--disabled"; // check this out
  }

  return (
    <button
      type="button"
      className={className}
      onClick={!ariaDisabled ? onClear : () => {}}
      disabled={(!ariaDisabled && disabled) || undefined}
      aria-disabled={ariaDisabled || undefined}
    >
      <Icon type="remove" color="mineral-40" />
    </button>
  );
}

interface StandardSearchIconProps {
  disabled?: boolean;
  ariaDisabled?: boolean;
  handleOnSearch?: (event?: SyntheticEvent) => any;
}
function StandardSearchIcon({
  disabled = false,
  ariaDisabled = false,
  handleOnSearch = () => {},
}: StandardSearchIconProps) {
  return (
    <React.Fragment>
      <button
        type="button"
        className="lab-standard-search__button"
        onClick={!ariaDisabled ? handleOnSearch : () => {}}
        disabled={(!ariaDisabled && disabled) || undefined}
        aria-disabled={ariaDisabled || undefined}
      >
        <Icon
          className="lab-standard-search__icon"
          type="magnifying-glass"
          color="white"
        />
      </button>
      <span className="lab-standard-search__separator" />
    </React.Fragment>
  );
}

function InlineSearchIcon({ disabled }: { disabled: boolean }) {
  return (
    <Icon
      className={`lab-inline-search__icon ${
        disabled ? "lab-inline-search__icon--disabled" : ""
      }`}
      type="magnifying-glass"
      color="mineral-40"
    />
  );
}
