import React from "react";
import PropTypes from "prop-types";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { TAG_COLORS } from "../constants";

/**
 * @param text is the Tag's text.
 * @param color sets Tag's color.
 * @param isOutline sets an outline style.
 * @param disabled disables the Tag. Won't be read by screen readers.
 * @param ariaDisabled Disables the Tag. Will be read by screen readers. When true, will override `disabled`.
 * @param isOn defines if the Tag is toggled on.
 * @param onClick is an action to be executed when the Tag is clicked.
 * @returns {JSX.Element}
 * @constructor
 */

export default function TogglableTag({
  text,
  color,
  isOutline,
  disabled,
  ariaDisabled,
  isOn,
  onClick,
}) {
  const selected = () => {
    let iconClass;

    if (isOn) {
      iconClass = "lab-tag--check-icon lab-tag--check-icon-on";
    } else {
      iconClass = "lab-tag--check-icon lab-tag--check-icon-off";
    }

    return (
      <Icon type="check" color="black-75" size="petit" className={iconClass} />
    );
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
      tabIndex="0"
    />
  );
}

TogglableTag.propTypes = {
  /** This is the Tag's text. */
  text: PropTypes.string.isRequired,
  /** Sets Tag's color. */
  color: PropTypes.oneOf(TAG_COLORS),
  /** Sets an outline style. */
  isOutline: PropTypes.bool,
  /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the Tag. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Action to be executed when the Tag is clicked. */
  onClick: PropTypes.func,
  /** Defines if the Tag is toggled on. */
  isOn: PropTypes.bool,
};

TogglableTag.defaultProps = {
  color: undefined,
  isOutline: false,
  disabled: false,
  ariaDisabled: false,
  isOn: false,
  onClick: () => {},
};
