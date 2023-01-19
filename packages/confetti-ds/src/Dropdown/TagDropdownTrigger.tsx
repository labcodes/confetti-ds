import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "../Tags/AbstractTag";
import { ICON_TYPES } from "../constants";
import Icon from "../Icon";

export default function TagDropdownTrigger({
  text,
  icon,
  color,
  skin,
  isOutline,
  disabled,
  ariaDisabled,
  onInteraction,
  tabIndex,
  setRef,
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
      className={`lab-tag--dropdown${icon ? ` lab-tag--has-left-icon` : ""}`}
      text={text}
      color={color}
      skin={skin}
      isOutline={isOutline}
      disabled={!ariaDisabled && disabled}
      ariaDisabled={ariaDisabled}
      renderPrefix={handleIcon()}
      renderSuffix={dropdownIcon()}
      tabIndex={tabIndex}
      onInteraction={onInteraction}
      isDropdown
      setRef={setRef}
      role="listbox"
    />
  );
}

TagDropdownTrigger.propTypes = {
  /** This is the Tag's text. */
  text: PropTypes.string.isRequired,
  /** Sets Tag's color. */
  color: PropTypes.string,
  /** Skin of the rendered Tag. */
  skin: PropTypes.string,
  /** Sets an outline style. */
  isOutline: PropTypes.bool,
  /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled: PropTypes.bool,
  /** Disables the Tag. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** tabIndex is used to define the navigation order for focusable elements. If not undefined, it is passed to the tag component. */
  tabIndex: PropTypes.string,
  /** This function is used to handle click or keydown interactions */
  onInteraction: PropTypes.func,
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
  icon: PropTypes.oneOf(ICON_TYPES),
  /** This function is used on AbstractTag to set the current Ref */
  setRef: PropTypes.func,
};

TagDropdownTrigger.defaultProps = {
  isOutline: false,
  color: undefined,
  skin: "pale",
  disabled: false,
  ariaDisabled: false,
  onInteraction: () => {},
  setRef: () => {},
  tabIndex: undefined,
  icon: undefined,
};