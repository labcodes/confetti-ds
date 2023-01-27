import React, { SyntheticEvent } from "react";

import AbstractSearch from "./AbstractSearch";

interface StandardSearchProps {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: string;
  /** Defines a default value for the Search initialization. */
  defaultValue: string;
  /** Disables the Search. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: boolean;
  /** Disables the Search. Won't be read by screen readers. */
  disabled: boolean;
  /** Text that will be rendered inside the Search field. */
  value: string;
  /** Action to be executed when the Search default value changes. */
  onChange: (event?: SyntheticEvent) => any;
  /** Action to be executed when the search is performed. */
  onSearch: (event?: SyntheticEvent) => any;
  /** Action to be executed when the Search is cleared out. */
  onClear: (event?: SyntheticEvent) => any;
  /** The placeholder text when the Search field is empty. Usually used to describe the values accepted (e.g.: Search by keyword or status). */
  placeholder: string;
}

export default function StandardSearch({
  id,
  defaultValue,
  disabled = false,
  ariaDisabled = false,
  value,
  onChange = () => {},
  onSearch = () => {},
  onClear = () => {},
  placeholder = "Search",
}): StandardSearchProps {
  return (
    <div className="lab-standard-search">
      <AbstractSearch
        type="standard"
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
