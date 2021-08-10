import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

import Icon from "../Icon";
import { ICON_TYPES } from "../constants";

export default class AbstractButton extends React.Component {
  static propTypes = {
    /** HTML type of the Button. */
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    /** Button style variation. */
    variant: PropTypes.oneOf(["default", "outline", "text"]),
    /** This is the button label. */
    text: PropTypes.string.isRequired,
    /** Sets the icon related to the button label. Default state: no icon. */
    icon: PropTypes.oneOf(ICON_TYPES),
    /** Sets a special color skin to the button. */
    skin: PropTypes.oneOf([
      "",
      "light",
      "dark",
      "warning",
      "destructive",
      "warning-invert",
      "destructive-invert",
      "confirmation-invert",
    ]),
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

  static defaultProps = {
    type: "button",
    variant: "default",
    skin: "",
    icon: undefined,
    size: "normal",
    disabled: false,
    ariaDisabled: false,
    onClick: () => {},
    fullWidth: false,
    tabIndex: "0",
  };

  icon = () => {
    const { icon } = this.props;

    /*
    Set icon color to be the icon color of default button.
    Icon color changes according to button type and exception on _buttons.scss
    */
    return icon ? (
      <Icon type={icon} color="white" size="petit" className="lab-btn__icon" />
    ) : (
      ""
    );
  };

  handleOnClick = (event) => {
    const { onClick } = this.props;
    if (!isUndefined(onClick)) {
      onClick(event);
    }
  };

  render() {
    const {
      type,
      text,
      variant,
      skin,
      size,
      disabled,
      fullWidth,
      ariaDisabled,
      tabIndex,
    } = this.props;
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={
          `lab-btn` +
          ` lab-btn--${variant} lab-btn--${size}` +
          `${skin ? ` lab-btn--${skin}` : ""}` +
          `${fullWidth ? ` lab-btn--block` : ""}`
        }
        onClick={!ariaDisabled ? this.handleOnClick : () => {}}
        disabled={(!ariaDisabled && disabled) || undefined}
        aria-disabled={ariaDisabled || undefined}
        tabIndex={tabIndex}
      >
        {this.icon()}
        {text}
      </button>
    );
  }
}
