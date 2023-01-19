import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { ICON_TYPES, TAG_COLORS } from "../constants";

export default function SimpleTag({
  text,
  thumbSrc,
  icon,
  color,
  skin,
  isOutline,
}) {
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
      "`SimpleTag` can't be initialized with both `thumb` and `icon` props.";
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw new Error(errorMessage);
    }
  };

  useMemo(() => {
    checkThumbAndIcon();
  }, [icon, thumbSrc]);

  return (
    <AbstractTag
      text={text}
      className={`${icon ? ` lab-tag--has-left-icon` : ""}${
        thumbSrc ? ` lab-tag--has-thumb` : ""
      }`}
      isOutline={isOutline}
      skin={skin}
      color={color}
      renderPrefix={handleIcon() || thumb()}
    />
  );
}

SimpleTag.propTypes = {
  /** This is the Tag's text. */
  text: PropTypes.string.isRequired,
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
};

SimpleTag.defaultProps = {
  thumbSrc: "",
  icon: undefined,
  isOutline: false,
  skin: "pale",
  color: undefined,
};
