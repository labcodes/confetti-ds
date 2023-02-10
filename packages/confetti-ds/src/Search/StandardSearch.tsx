import React, { SyntheticEvent } from "react";

import AbstractSearch from "./AbstractSearch";
import { BaseSearchProps } from "./types";
interface StandardSearchProps extends BaseSearchProps {
  /** Defines a default value for the Search initialization. */
  defaultValue?: string;
  /** Disables the Search. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Search. Won't be read by screen readers. */
  disabled?: boolean;
  /** The placeholder text when the Search field is empty. Usually used to describe the values accepted (e.g.: Search by keyword or status). */
  placeholder?: string;
}

export default function StandardSearch({
  id,
  defaultValue,
  disabled = false,
  ariaDisabled = false,
  placeholder = "Search",
  value,
  onChange = () => {},
  onSearch = () => {},
  onClear = () => {},
}: StandardSearchProps) {
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
