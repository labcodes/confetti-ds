import React, { SyntheticEvent } from "react";

import AbstractDropdown from "./AbstractDropdown";

export interface TagDropdownProps {
  /** Function called after the dropdown is opened. */
  onOpen?: (event: SyntheticEvent) => any;
  /** Function called after the dropdown is closed. */
  onClose?: (event: SyntheticEvent) => any;
  /** Function called when the user selects one valid option. */
  onSelect: (event: SyntheticEvent) => any;
  /** This is the dropdown of children. It can be a TagDropdownItem or a SectionTitle, and if the user doesn't pass a child, it will throw an error. */
  children: JSX.Element | JSX.Element[];
  /** This is the dropdown color, and it will set the color of its section title and trigger. */
  color?: "white" | "mineral" | "teal" | "purple";
  /** This is the dropdown default trigger title. It will mount with this default text until the user selects an option. */
  defaultText: string;
  /** This is the dropdown id. It requires a unique id. */
  id: string;
  /** This is the controlled value of the TagDropdown */
  value?: string | number;
}

export default function TagDropdown({
  onOpen = () => {},
  onClose = () => {},
  onSelect,
  children,
  color = "teal",
  defaultText,
  id,
  value = "",
}: TagDropdownProps) {
  return (
    <AbstractDropdown
      dropdownType="tag"
      defaultText={defaultText}
      color={color}
      onOpen={onOpen}
      onClose={onClose}
      onSelect={onSelect}
      id={id}
      value={value}
    >
      {children}
    </AbstractDropdown>
  );
}
