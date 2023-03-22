import React, { SyntheticEvent } from "react";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { IconTypes, TagTypes } from "../constants";

export interface DropdownTagProps {
  /** This is the Tag's text. */
  text: string;
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
  icon?: IconTypes;
  /** Sets Tag's color. */
  color?: TagTypes;
  /** Skin of the rendered Tag. */
  skin?: "pale" | "vivid";
  /** Sets an outline style. */
  isOutline?: boolean;
  /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Tag. Won't be read by screen readers. */
  disabled?: boolean;
  /** Action to be executed when the Tag is clicked. */
  onClick?: (event?: SyntheticEvent) => any;
}

export default function DropdownTag({
  text,
  icon,
  color,
  skin = "pale",
  isOutline = false,
  ariaDisabled = false,
  disabled = false,
  onClick = () => {},
}: DropdownTagProps) {
  const handleIcon = () =>
    icon ? <Icon type={icon} className="lab-tag--left-icon" /> : undefined;

  const dropdownIcon = () => (
    <span className="lab-tag__dropdown-icon-wrapper">
      <Icon type="dropdown-closed" className="lab-tag--dropdown-icon" />
    </span>
  );

  return (
    <AbstractTag
      className={`lab-tag--dropdown${`${
        icon ? ` lab-tag--has-left-icon` : ""
      }`}`}
      text={text}
      color={color}
      skin={skin}
      isOutline={isOutline}
      disabled={!ariaDisabled && disabled}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
      renderPrefix={handleIcon()}
      renderSuffix={dropdownIcon()}
      tabIndex={0}
    />
  );
}
