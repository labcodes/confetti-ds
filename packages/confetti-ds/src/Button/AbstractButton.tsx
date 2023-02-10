import React, { SyntheticEvent } from "react";
import { isUndefined } from "lodash";

import Icon from "../Icon";
import { IconTypes } from "../constants";

export interface AbstractButtonProps {
  /** This is the button label. */
  text: string;
  /** HTML type of the Button. */
  type?: "button" | "submit" | "reset";
  /** Button style variation. */
  variant?: "default" | "outline" | "text";
  /** Sets the icon related to the button label. Default state: no icon. */
  icon?: IconTypes;
  /** Sets a special color skin to the button. */
  skin?:
    | ""
    | "light"
    | "dark"
    | "warning"
    | "destructive"
    | "warning-invert"
    | "destructive-invert"
    | "confirmation-invert";
  /** Sets the button's height. Small = 32px, Normal = 40px, Large = 48px. */
  size?: "normal" | "small" | "large";
  /** Disables the Button. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Button. Won't be read by screen readers. */
  disabled?: boolean;
  /** Action to be executed when the button is clicked. */
  onClick?: (event: SyntheticEvent) => any;
  /** Makes the button expand to its container's full width. */
  fullWidth?: boolean;
  /* Sets the order of which the elements will be focused on. Default value: 0. */
  tabIndex?: number;
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
    icon ? (
      <Icon type={icon} color="white" size="petit" className="lab-btn__icon" />
    ) : (
      ""
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
