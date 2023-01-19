import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

/**
 *
 * @param value is the text that will be rendered inside the Search field.
 * @param id  is the text that will serve as unique identifier. It's also an important accessibility tool.
 * @param disabled disables the Search. Won't be read by screen readers.
 * @param ariaDisabled disables the Search. Will be read by screen readers. When true, will override `disabled`.
 * @param placeholder it's the placeholder text when the Search field is empty. Usually used to describe the values accepted (e.g.: Search by keyword or status).
 * @param type it's a style variation of the Search.
 * @param onClear it's an action to be executed when the Search field is cleared out.
 * @param onSearch it's an action to be executed when the search is performed.
 * @param onChange  it's an action  to be executed when the Search default value changes.
 * @param defaultValue defines a default value for the Search initialization.
 * @returns {JSX.Element}
 * @constructor
 */

export default function AbstractSearch({
  value,
  id,
  disabled,
  ariaDisabled,
  placeholder,
  type,
  onClear,
  onSearch,
  onChange,
  defaultValue = '',
}) {
  const [localValue, setLocalValue] = useState(defaultValue);
  const searchRef = useRef();
  const prevValue = useRef();

  const handleOnChange = (event) => {
    setLocalValue(event.target.value);
    if (!isUndefined(onChange)) {
      onChange(event);
    }
  };

  const handleOnSearch = () => {
    if (!isUndefined(onSearch)) {
      onSearch(localValue);
    }
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 && !isUndefined(onSearch)) {
      onSearch(event.target.value);
    }
  };

  const handleOnClear = () => {
    if (isUndefined(value)) {
      setLocalValue("");
    }

    if (!isUndefined(onClear)) {
      onClear();
    }
  };

  useEffect(() => {
    if (value && value !== prevValue) {
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

AbstractSearch.propTypes = {
  /** */
  id: PropTypes.string,
  /** Defines a default value for the Search initialization. */
  defaultValue: PropTypes.string,
  /** Disables the Search. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the Search. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Text that will be rendered inside the Search field. */
  value: PropTypes.string,
  /** Action to be executed when the Search default value changes. */
  onChange: PropTypes.func,
  /** Action to be executed when the search is performed. */
  onSearch: PropTypes.func,
  /** Action to be executed when the Search field is cleared out. */
  onClear: PropTypes.func,
  /** The placeholder text when the Search field is empty. Usually used to describe the values accepted (e.g.: Search by keyword or status). */
  placeholder: PropTypes.string,
  /** Style variation of the Search. */
  type: PropTypes.oneOf(["standard", "inline"]).isRequired,
};

AbstractSearch.defaultProps = {
  id: undefined,
  defaultValue: undefined,
  disabled: false,
  ariaDisabled: false,
  value: undefined,
  onChange: () => {},
  onSearch: () => {},
  onClear: () => {},
  placeholder: " ",
};

// ----- Auxiliary components ----- //

function TrailingIcon(props) {
  const { onClear, disabled, ariaDisabled } = props;
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

TrailingIcon.propTypes = {
  onClear: PropTypes.func,
  disabled: PropTypes.bool,
  ariaDisabled: PropTypes.bool,
};

TrailingIcon.defaultProps = {
  onClear: () => {},
  disabled: false,
  ariaDisabled: false,
};

function StandardSearchIcon(props) {
  const { disabled, ariaDisabled, handleOnSearch } = props;
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

StandardSearchIcon.propTypes = {
  disabled: PropTypes.bool,
  ariaDisabled: PropTypes.bool,
  handleOnSearch: PropTypes.func,
};

StandardSearchIcon.defaultProps = {
  disabled: false,
  ariaDisabled: false,
  handleOnSearch: undefined,
};

function InlineSearchIcon(props) {
  const { disabled } = props;
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

InlineSearchIcon.propTypes = {
  disabled: PropTypes.bool,
};

InlineSearchIcon.defaultProps = {
  disabled: false,
};
