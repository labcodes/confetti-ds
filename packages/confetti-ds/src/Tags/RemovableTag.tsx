import React, { SyntheticEvent, useMemo } from "react";
import { isEmpty } from "lodash";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { IconTypes, TagTypes } from "../constants";

type BaseRemovableTagProps = {
  /** This is the Tag's text. */
  text: string;
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
  icon?: IconTypes;
  /** Sets Tag's color. */
  color?: TagTypes;
  /** Skin of the rendered Tag. */
  skin?: "pale" | "vivid";
  /** Sets an outline style. */
  isOutline?: boolean;
  /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Tag. Won't be read by screen readers. */
  disabled?: boolean;
  /** Callback to be executed when the Tag is clicked. */
  onClick?: (event?: SyntheticEvent) => any;
};

type RemovableTagProps =
  | (BaseRemovableTagProps & {
      /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbSrc?: undefined;
      /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbAlt?: undefined;
    })
  | (BaseRemovableTagProps & {
      /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbSrc: string;
      /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbAlt: string;
    });

export default function RemovableTag({
  text,
  icon,
  color,
  skin = "pale",
  isOutline = false,
  ariaDisabled = false,
  disabled = false,
  onClick = () => {},
  thumbSrc = "",
  thumbAlt = "",
}: RemovableTagProps) {
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
    thumbSrc.length ? (
      <img className="lab-tag__thumb" src={thumbSrc} alt={thumbAlt} />
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
      color={color}
      skin={skin}
      isOutline={isOutline}
      disabled={!ariaDisabled && disabled}
      ariaDisabled={ariaDisabled}
      onClick={onClick}
      renderPrefix={thumb() || handleIcon()}
      renderSuffix={removeIcon()}
      tabIndex={0}
    />
  );
}
