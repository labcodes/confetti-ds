import React, { SyntheticEvent } from "react";
import { isUndefined } from "lodash";

import Icon from "../Icon";
import { IconTypes } from "../constants";
import { BaseButtonProps } from "./types";

interface AbstractButtonProps extends BaseButtonProps {
  /** Button style variation. */
  variant?: "default" | "outline" | "text";
  /** Sets the icon related to the button label. Default state: no icon. */
  skin?:
    | ""
    | "light"
    | "dark"
    | "warning"
    | "destructive"
    | "warning-invert"
    | "destructive-invert"
    | "confirmation-invert";
}

export default function AbstractButton({
  text,
  type = "button" as const,
  variant = "default",
  icon,
  skin = "",
  size = "normal",
  ariaDisabled = false,
  disabled = false,
  onClick = (event) => {},
  fullWidth = false,
  tabIndex,
}: AbstractButtonProps) {
  const renderIcon = () =>
    icon ? <Icon type={icon} className="lab-btn__icon" /> : "";
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
      className={
        `lab-btn` +
        ` lab-btn--${variant} lab-btn--${size}` +
        `${skin ? ` lab-btn--${skin}` : ""}` +
        `${fullWidth ? ` lab-btn--block` : ""}`
      }
      onClick={!ariaDisabled ? handleOnClick : () => {}}
      disabled={(!ariaDisabled && disabled) || undefined}
      aria-disabled={ariaDisabled || undefined}
      {...(tabIndex ? { tabIndex } : undefined)}
    >
      {renderIcon()}
      {text}
    </button>
  );
}
