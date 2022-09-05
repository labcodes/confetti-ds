import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import Icon from "../Icon";
import { ICON_TYPES, TAG_COLORS } from "../constants";
import AbstractTag from "../Tags/AbstractTag";

export default function TagDropdownItem({
  text,
  thumbSrc,
  icon,
  color,
  skin,
  isOutline,
  onClick,
  disabled,
  tabIndex,
  onInteraction,
  setRef,
  value,
  isSelected,
}) {
  const checkThumbAndIcon = (thumbSrc, icon) => {
    const errorMessage =
      "`TagDropdownItem` can't be initialized with both `thumb` and `icon` props.";
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw new Error(errorMessage);
    }
  };

  // super constructor
  const handleCheckThumbAndIcon = useCallback(() => {
    checkThumbAndIcon();
  }, [icon, thumbSrc]);

  // componentDidUpdate
  useEffect(() => {
    handleCheckThumbAndIcon();
  }, []);

  const renderThumb = ({ thumbSrc }) =>
    thumbSrc ? (
      <img className="lab-tag__thumb" src={thumbSrc} alt="" />
    ) : undefined;

  const renderIcon = ({ icon }) =>
    icon ? (
      <Icon
        type={icon}
        color="black-75"
        size="petit"
        className="lab-tag--left-icon"
      />
    ) : undefined;

  return (
    <AbstractTag
      text={text}
      className={`lab-tag--togglable${icon ? ` lab-tag--has-left-icon` : ""}${
        thumbSrc ? ` lab-tag--has-thumb` : ""
      }`}
      isOutline={isOutline}
      skin={skin}
      color={color}
      renderPrefix={renderIcon(icon) || renderThumb(thumbSrc)}
      onClick={onClick}
      disabled={disabled}
      tabIndex={tabIndex}
      onInteraction={onInteraction}
      isDropdown
      setRef={setRef}
      value={value}
      isSelected={isSelected}
      role="option"
    />
  );
}

TagDropdownItem.propTypes = {
  /** This is the Tag's text. */
  text: PropTypes.string.isRequired,
  /** Disables the Tag. Won't be read by screen readers. */
  disabled: PropTypes.bool,
  /** Action to be executed when the Tag is clicked. */
  onClick: PropTypes.func,
  /** Source of the thumb to be rendered. Won't render a thumb if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
  thumbSrc: PropTypes.string,
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
  icon: PropTypes.oneOf(ICON_TYPES),
  /** Sets Tag's color. */
  color: PropTypes.oneOf(TAG_COLORS),
  /** Skin of the rendered Tag. */
  skin: PropTypes.oneOf(["pale", "vivid"]),
  /** Sets an outline style. */
  isOutline: PropTypes.bool,
  /** Option tab index */
  tabIndex: PropTypes.string,
  /** This function is used on AbstractTag's componenentDidMount to set the current Ref */
  setRef: PropTypes.func,
  /** This function is used to handle click or keydown interactions */
  onInteraction: PropTypes.func,
  /** This is the option's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** This prop is a boolean to verify if the option is current selected  */
  isSelected: PropTypes.bool,
};

TagDropdownItem.defaultProps = {
  thumbSrc: "",
  icon: undefined,
  isOutline: false,
  skin: "pale",
  color: undefined,
  disabled: false,
  onClick: () => {},
  setRef: () => {},
  onInteraction: () => {},
  tabIndex: "0",
  isSelected: false,
};
