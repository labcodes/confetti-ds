import React, { useMemo } from "react";
import { isEmpty } from "lodash";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { IconTypes, TagTypes } from "../constants";

type BaseSimpleTagProps = {
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
};

export type SimpleTagProps =
  | (BaseSimpleTagProps & {
      /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbSrc?: undefined;
      /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbAlt?: undefined;
    })
  | (BaseSimpleTagProps & {
      /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbSrc: string;
      /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbAlt: string;
    });

export default function SimpleTag({
  text,
  icon,
  color,
  skin = "pale",
  isOutline = false,
  thumbSrc = "",
  thumbAlt = "",
}: SimpleTagProps) {
  const thumb = () =>
    thumbSrc.length ? (
      <img className="lab-tag__thumb" src={thumbSrc} alt={thumbAlt} />
    ) : undefined;

  const handleIcon = () =>
    icon ? <Icon type={icon} color="black-75" className="lab-tag--left-icon" /> : undefined;

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
