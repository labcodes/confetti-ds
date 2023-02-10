import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  SyntheticEvent,
} from "react";
import AbstractTag from "../Tags/AbstractTag";
import { IconTypes, ICON_TYPES } from "../constants";
import Icon from "../Icon";

interface TagDropdownTriggerProps {
  /** This is the Tag's text. */
  text: string;
  /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
  icon?: IconTypes;
  /** Sets Tag's color. */
  color?: string;
  /** Skin of the rendered Tag. */
  skin?: string;
  /** Sets an outline style. */
  isOutline?: boolean;
  /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Tag. Won't be read by screen readers. */
  disabled?: boolean;
  /** tabIndex is used to define the navigation order for focusable elements. If not undefined, it is passed to the tag component. */
  tabIndex?: number;
  /** This function is used to handle click or keydown interactions */
  onInteraction?: ({ event }: { event: SyntheticEvent }) => any;
  /** This function is used on AbstractTag to set the current Ref */
  setRef?: Dispatch<SetStateAction<MutableRefObject<HTMLButtonElement>>>;
}

export default function TagDropdownTrigger({
  text,
  icon,
  color,
  skin = "pale",
  isOutline = false,
  ariaDisabled = false,
  disabled = false,
  tabIndex,
  onInteraction = () => {},
  setRef = () => {},
}: TagDropdownTriggerProps) {
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
