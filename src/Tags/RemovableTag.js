import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { ICON_TYPES, TAG_COLORS } from "../constants";

export default function RemovableTag({
  text,
  thumbSrc,
  icon,
  color,
  skin,
  isOutline,
  disabled,
  ariaDisabled,
  onClick,
}) {
  const removeIcon = () => (
    <span className="lab-tag__remove-icon-wrapper">
      <Icon
        type="remove"
        color="black-75"
        size="petit"
        className="lab-tag--remove-icon"
      />
    </span>
  );

  const thumb = () =>
    thumbSrc ? (
      <img className="lab-tag__thumb" src={thumbSrc} alt="" />
    ) : undefined;

  const handleIcon = () =>
    icon ? (
      <Icon
        type={icon}
        color="black-75"
        size="petit"
        className="lab-tag--left-icon"
      />
    ) : undefined;

  const checkThumbAndIcon = () => {
    const errorMessage =
      "`RemovableTag` can't be initialized with both `thumb` and `icon` props.";
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw Error(errorMessage);
    }
  };

  useMemo(() => {
    checkThumbAndIcon();
  }, [icon, thumbSrc]);

  return (
    <AbstractTag
      className={`lab-tag--removable${`${
        icon ? ` lab-tag--has-left-icon` : ""
      }${thumbSrc ? ` lab-tag--has-thumb` : ""}`}`}
      text={text}
      thumbSrc={thumbSrc}
      icon={icon}
      color={color}
      skin={skin}
      isOutline={isOutline}
      disabled={!ariaDisabled && disabled}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
      renderPrefix={thumb() || handleIcon()}
      renderSuffix={removeIcon()}
      tabIndex="0"
    />
  );
}

RemovableTag.propTypes = {
  /** This is the Tag's text. */
  text: PropTypes.string.isRequired,
  /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
  thumbSrc: PropTypes.string,
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
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
  /** Callback to be executed when the Tag is clicked. */
  onClick: PropTypes.func,
};

RemovableTag.defaultProps = {
  thumbSrc: "",
  icon: undefined,
  color: undefined,
  skin: "pale",
  isOutline: false,
  disabled: false,
  ariaDisabled: false,
  onClick: () => {},
};
