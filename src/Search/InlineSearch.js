import React from "react";
import PropTypes from "prop-types";

import AbstractSearch from "./AbstractSearch";

/**
 * @param id   is the text that will serve as unique identifier. It's also an important accessibility tool.
 * @param defaultValue defines a default value for the Search initialization.
 * @param disabled disables the Search. Won't be read by screen readers.
 * @param ariaDisabled disables the Search. Will be read by screen readers. When true, will override `disabled`.
 * @param value is the text that will be rendered inside the Search field.
 * @param onChange  it's an action  to be executed when the Search default value changes.
 * @param onSearch it's an action to be executed when the search is performed.
 * @param onClear it's an action to be executed when the Search field is cleared out.
 * @param placeholder it's the placeholder text when the Search field is empty. Usually used to describe the values accepted (e.g.: Search by keyword or status).
 * @returns {JSX.Element}
 * @constructor
 */
export default function InlineSearch({
  id,
  defaultValue,
  disabled,
  ariaDisabled,
  value,
  onChange,
  onSearch,
  onClear,
  placeholder,
}) {
  return (
    <div className="lab-inline-search">
      <AbstractSearch
        type="inline"
        id={id}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        onClear={onClear}
        placeholder={placeholder}
        disabled={(!ariaDisabled && disabled) || undefined}
        ariaDisabled={ariaDisabled}
      />
    </div>
  );
}

InlineSearch.propTypes = {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: PropTypes.string,
  /** Defines a default value for the Search initialization. */
  defaultValue: PropTypes.string,
  /** Disables the Search. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the Search. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Text that will be rendered inside the Input field. */
  value: PropTypes.string,
  /** Action to be executed when the Search default value changes. */
  onChange: PropTypes.func,
  /** Action to be executed when the search is performed. */
  onSearch: PropTypes.func,
  /** Action to be executed when the Search is cleared out. */
  onClear: PropTypes.func,
  /** The placeholder text when the Search field is empty. Usually used to describe the values accepted (e.g.: Search by keyword or status). */
  placeholder: PropTypes.string,
};

InlineSearch.defaultProps = {
  id: undefined,
  defaultValue: undefined,
  disabled: false,
  ariaDisabled: false,
  value: undefined,
  onChange: () => {},
  onSearch: () => {},
  onClear: () => {},
  placeholder: "Search",
};
