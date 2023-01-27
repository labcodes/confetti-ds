import React, { SyntheticEvent } from "react";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import {
  IconColorTypes,
  IconTypes,
} from "../constants";

interface DropdownTagProps {
  /** This is the Tag's text. */
  text: string;
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
  icon?: IconTypes;
  /** Sets Tag's color. */
  color?: IconColorTypes;
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
  disabled = false,
  ariaDisabled = false,
  onClick = () => {},
}: DropdownTagProps) {
  const handleIcon = () =>
    icon ? (
      <Icon
        type={icon}
        color="black-75"
        size="petit"
        className="lab-tag--left-icon"
      />
    ) : undefined;

  const dropdownIcon = () => (
    <span className="lab-tag__dropdown-icon-wrapper">
      <Icon
        type="dropdown-closed"
        color="black-75"
        size="petit"
        className="lab-tag--dropdown-icon"
      />
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
