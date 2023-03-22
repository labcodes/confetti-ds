import React, { SyntheticEvent } from "react";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";

export interface TogglableTagProps {
  /** This is the Tag's text. */
  text: string;
  /** Sets Tag's color. */
  color?: string;
  /** Sets an outline style. */
  isOutline?: boolean;
  /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Tag. Won't be read by screen readers. */
  disabled?: boolean;
  /** Action to be executed when the Tag is clicked. */
  onClick?: (event?: SyntheticEvent) => any;
  /** Defines if the Tag is toggled on. */
  isOn?: boolean;
}

export default function TogglableTag({
  text,
  color,
  isOutline = false,
  ariaDisabled = false,
  disabled = false,
  onClick = () => {},
  isOn = false,
}: TogglableTagProps) {
  const selected = () => {
    let iconClass;

    if (isOn) {
      iconClass = "lab-tag--check-icon lab-tag--check-icon-on";
    } else {
      iconClass = "lab-tag--check-icon lab-tag--check-icon-off";
    }

    return <Icon type="confirm" className={iconClass} />;
  };
  return (
    <AbstractTag
      className={`lab-tag--togglable${isOn ? " lab-tag--selected" : ""}`}
      text={text}
      color={color}
      isOutline={isOutline}
      disabled={!ariaDisabled && disabled}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
      skin={isOn ? "vivid" : "pale"}
      renderPrefix={selected()}
      tabIndex={0}
    />
  );
}
