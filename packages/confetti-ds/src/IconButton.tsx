import React from "react";

import Icon from "./Icon";
import { IconTypes } from "./constants";

export interface IconButtonProps {
  /** Icon Button theme variation. */
  theme?: "teal" | "purple" | "light" | "dark";
  /** Sets the icon related to the button label. Default state: no icon. */
  icon?: IconTypes;
  /** Disables the Button. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Icon Button. Won't be read by screen readers. */
  disabled?: boolean;
  /** Action to be executed when the button is clicked. */
  onClick?: (event: SyntheticEvent) => any;
}

export default function IconButton({
  theme = "teal",
  icon,
  ariaDisabled = false,
  disabled = false,
  onClick = (event) => {},
}: IconButtonProps) {
  const renderIcon = () =>
    icon ? (
      <Icon
        type={icon}
        color="white"
        size="petit"
        className="lab-iconbtn__icon"
      />
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
    <span
      className={`lab-iconbtn` + ` lab-iconbtn--${theme} lab-iconbtn--${icon}`}
    >
      <button
        onClick={!ariaDisabled ? handleOnClick : () => {}}
        disabled={(!ariaDisabled && disabled) || undefined}
        aria-disabled={ariaDisabled || undefined}
      >
        {renderIcon()}
      </button>
    </span>
  );
}
