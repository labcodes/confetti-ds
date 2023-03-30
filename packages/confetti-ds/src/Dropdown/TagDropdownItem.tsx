import React, {
  SyntheticEvent,
  useEffect,
  useCallback,
  MutableRefObject,
} from "react";
import { isEmpty } from "lodash";

import Icon from "../Icon";
import { IconTypes, TagTypes } from "../constants";
import AbstractTag from "../Tags/AbstractTag";

export interface BaseTagDropdownItemProps {
  /** This is the Tag's text. */
  text: string;
  /** Disables the Tag. Won't be read by screen readers. */
  disabled?: boolean;
  /** Action to be executed when the Tag is clicked. */
  onClick?: (event: SyntheticEvent) => any;
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
  icon?: IconTypes;
  /** Sets Tag's color. */
  color?: TagTypes;
  /** Skin of the rendered Tag. */
  skin?: "pale" | "vivid";
  /** Sets an outline style. */
  isOutline?: boolean;
  /** Option tab index */
  tabIndex?: number;
  /** This function is used on AbstractTag's componenentDidMount to set the current Ref */
  setRef?: (ref: MutableRefObject<HTMLButtonElement>) => any;
  /** This function is used to handle click or keydown interactions */
  onInteraction?: ({
    event,
    ref,
  }: {
    event: any;
    ref: MutableRefObject<boolean>;
  }) => any;
  /** This is the option's value */
  value?: string;
  /** This prop is a boolean to verify if the option is current selected  */
  isSelected?: boolean;
}

export type TagDropdownItemProps =
  | (BaseTagDropdownItemProps & {
      /** Source of the thumb to be rendered. Won't render a thumb if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbSrc?: undefined;
      /** Alt text of the thumb to be rendered. */
      thumbAlt?: undefined;
    })
  | (BaseTagDropdownItemProps & {
      /** Source of the thumb to be rendered. Won't render a thumb if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
      thumbSrc: string;
      /** Alt text of the thumb to be rendered. */
      thumbAlt: string;
    });

export default function TagDropdownItem({
  text,
  disabled = false,
  onClick = () => {},
  icon,
  color,
  skin = "pale",
  isOutline = false,
  tabIndex = 0,
  setRef = () => {},
  onInteraction = () => {},
  value,
  isSelected = false,
  thumbSrc,
  thumbAlt,
}: TagDropdownItemProps) {
  const renderThumb = () =>
    thumbSrc ? (
      <img className="lab-tag__thumb" src={thumbSrc} alt={thumbAlt} />
    ) : undefined;

  const renderIcon = () =>
    icon ? (
      <Icon type={icon} color="black-75" className="lab-tag--left-icon" />
    ) : undefined;

  // super constructor
  const checkThumbAndIcon = useCallback(() => {
    const errorMessage =
      "`TagDropdownItem` can't be initialized with both `thumb` and `icon` props.";
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw new Error(errorMessage);
    }
  }, [thumbSrc, icon]);

  // componentDidUpdate
  useEffect(() => {
    checkThumbAndIcon();
  }, [thumbSrc, icon]);

  return (
    <AbstractTag
      text={text}
      className={`lab-tag--togglable${icon ? ` lab-tag--has-left-icon` : ""}${
        thumbSrc ? ` lab-tag--has-thumb` : ""
      }`}
      isOutline={isOutline}
      skin={skin}
      color={color}
      renderPrefix={renderThumb() || renderIcon()}
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
