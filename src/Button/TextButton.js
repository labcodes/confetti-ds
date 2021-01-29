import React from "react";
import PropTypes from "prop-types";

import AbstractButton from "./AbstractButton";
import { ICON_TYPES } from "../constants";

export default class TextButton extends React.Component {
  static propTypes = {
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
  };

  static defaultProps = {
    skin: undefined,
    icon: undefined,
    type: "button",
    size: "normal",
    disabled: false,
    ariaDisabled: false,
    onClick: () => {},
    fullWidth: false,
  };

  render() {
    const {
      text,
      type,
      skin,
      icon,
      size,
      disabled,
      onClick,
      fullWidth,
      ariaDisabled,
    } = this.props;
    return (
      <AbstractButton
        variant="text"
        text={text}
        type={type}
        skin={skin}
        icon={icon}
        size={size}
        disabled={disabled}
        ariaDisabled={ariaDisabled}
        onClick={onClick}
        fullWidth={fullWidth}
      />
    );
  }
}
