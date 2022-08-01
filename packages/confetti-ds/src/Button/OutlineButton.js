import React from "react";
import PropTypes from "prop-types";

import AbstractButton from "./AbstractButton";
import { ICON_TYPES } from "../constants";

export default function OutlineButton({
  text,
  type,
  skin,
  icon,
  size,
  disabled,
  onClick,
  fullWidth,
  ariaDisabled,
  tabIndex,
}) {
  return (
    <AbstractButton
      variant="outline"
      text={text}
      type={type}
      skin={skin}
      icon={icon}
      size={size}
      disabled={disabled}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
      fullWidth={fullWidth}
      tabIndex={tabIndex}
    />
  );
}

OutlineButton.propTypes = {
  /** This is the button label. */
  text: PropTypes.string.isRequired,
  /** HTML type of the Button. */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /** Sets a special color skin to the button. */
  skin: PropTypes.oneOf(["", "light", "dark"]),
  /** Sets the icon related to the button label. Default state: no icon. */
  icon: PropTypes.oneOf(ICON_TYPES),
  /** Sets the button's height. Small = 32px, Normal = 40px, Large = 48px. */
  size: PropTypes.oneOf(["normal", "small", "large"]),
  /** Disables the Button. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the Button. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Action to be executed when the button is clicked. */
  onClick: PropTypes.func,
  /** Makes the button expand to its container's full width. */
  fullWidth: PropTypes.bool,
  /* Sets the order of which the elements will be focused on. Default value: 0. */
  tabIndex: PropTypes.string,
};

OutlineButton.defaultProps = {
  skin: undefined,
  icon: undefined,
  type: "button",
  size: "normal",
  disabled: false,
  ariaDisabled: false,
  onClick: () => {},
  fullWidth: false,
  tabIndex: undefined,
};
