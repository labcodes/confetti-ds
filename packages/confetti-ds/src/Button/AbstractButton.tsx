import React, { SyntheticEvent } from "react";
import { isUndefined } from "lodash";

import Icon from "../Icon";
import { IconTypes } from "../constants";
import { BaseButtonProps } from "./types";

interface AbstractButtonProps extends BaseButtonProps {
  /** Button style variation. */
  kind?: "default" | "outline" | "text";
  /** Sets the icon related to the button label. Default state: no icon. */
  theme?:
    | "teal"
    | "purple"
    | "light"
    | "dark"
    | "warning"
    | "destructive"
    | "confirmation"
    | "warning-invert"
    | "destructive-invert"
    | "confirmation-invert";
}

export default function AbstractButton({
  label,
  type = "button" as const,
  kind,
  icon,
  theme = "teal",
  size = "small",
  ariaDisabled = false,
  disabled = false,
  onClick = (event) => {},
  fullWidth = false,
  tabIndex,
  hasIcon = false,
}: AbstractButtonProps) {
  const renderIcon = () =>
    icon ? (
      <Icon type={icon} color="white" className="lab-btn__icon" />
    ) : (
      <Icon type={"Add"} color="white" className="lab-btn__icon" />
    );
  /*
  Set icon color to be the icon color of default button.
  Icon color changes according to button type and exception on _buttons.scss
  */

  const handleOnClick = (event) => {
    if (!isUndefined(onClick)) {
      onClick(event);
    }
  };
  return (
    <button
      type={type}
      size={size}
      kind={kind}
      className={
        `lab-btn` +
        ` lab-btn--${kind} lab-btn--${size}` +
        `${theme ? ` lab-btn--${theme}` : ""}` +
        `${fullWidth ? ` lab-btn--block` : ""}`
      }
      onClick={!ariaDisabled ? handleOnClick : () => {}}
      disabled={(!ariaDisabled && disabled) || undefined}
      aria-disabled={ariaDisabled || undefined}
      {...(tabIndex ? { tabIndex } : undefined)}
    >
      {hasIcon ? renderIcon() : null}
      {label}
    </button>
  );
}
