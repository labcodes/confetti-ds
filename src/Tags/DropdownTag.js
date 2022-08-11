import React from "react";
import PropTypes from "prop-types";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { ICON_TYPES, TAG_COLORS } from "../constants";

/**
 *
 * @param text is the Tag's text.
 * @param icon is the type of the icon to be rendered. Won't render an icon if not passed to the component.
 * @param color sets Tag's color.
 * @param skin is the skin of the rendered Tag
 * @param isOutline sets an outline style.
 * @param disabled disables the Tag. Won't be read by screen readers.
 * @param ariaDisabled disables the Tag. Will be read by screen readers. When true, will override `disabled`.
 * @param onClick is the action to be executed when the Tag is clicked.
 * @returns {JSX.Element}
 * @constructor
 */
export default function DropdownTag({
  text,
  icon,
  color,
  skin,
  isOutline,
  disabled,
  ariaDisabled,
  onClick,
}) {
  // eslint-disable-next-line react/display-name
  const handleIcon = () =>
    icon ? (
      <Icon
        type={icon}
        color="black-75"
        size="petit"
        className="lab-tag--left-icon"
      />
    ) : undefined;

  const dropdownIcon = () => (
    <span className="lab-tag__dropdown-icon-wrapper">
      <Icon
        type="dropdown-closed"
        color="black-75"
        size="petit"
        className="lab-tag--dropdown-icon"
      />
    </span>
  );

  return (
    <AbstractTag
      className={`lab-tag--dropdown${`${
        icon ? ` lab-tag--has-left-icon` : ""
      }`}`}
      text={text}
      icon={icon}
      color={color}
      skin={skin}
      isOutline={isOutline}
      disabled={!ariaDisabled && disabled}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
      renderPrefix={handleIcon()}
      renderSuffix={dropdownIcon()}
      tabIndex="0"
    />
  );
}

DropdownTag.propTypes = {
  /** This is the Tag's text. */
  text: PropTypes.string.isRequired,
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
  icon: PropTypes.oneOf(ICON_TYPES),
  /** Sets Tag's color. */
  color: PropTypes.oneOf(TAG_COLORS),
  /** Skin of the rendered Tag. */
  skin: PropTypes.oneOf(["pale", "vivid"]),
  /** Sets an outline style. */
  isOutline: PropTypes.bool,
  /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the Tag. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Action to be executed when the Tag is clicked. */
  onClick: PropTypes.func,
};

DropdownTag.defaultProps = {
  icon: undefined,
  color: undefined,
  skin: "pale",
  isOutline: false,
  disabled: false,
  ariaDisabled: false,
  onClick: () => {},
};
