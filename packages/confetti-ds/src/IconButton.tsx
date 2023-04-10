import React, { SyntheticEvent } from "react";
import { isUndefined } from "lodash";

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

  const handleOnClick = (event) => {
    if (!isUndefined(onClick)) {
      onClick(event);
    }
  };

  return (
    <button
      className={`lab-iconbtn` + `lab-iconbtn--${theme}`}
      onClick={!ariaDisabled ? handleOnClick : () => {}}
      disabled={(!ariaDisabled && disabled) || undefined}
      aria-disabled={ariaDisabled || undefined}
    >
      {" "}
      {renderIcon()}
    </button>
  );
}
