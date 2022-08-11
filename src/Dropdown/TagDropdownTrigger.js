import React, { useRef } from "react";
import AbstractTag from "../Tags/AbstractTag";
import { DropdownTag } from "../Tags";

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
  dropdownIcon,
  handleIcon
}) {
  const ref = useRef();
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
      renderPrefix={handleIcon()}
      renderSuffix={dropdownIcon()}
      tabIndex={tabIndex}
      onInteraction={onInteraction}
      isDropdown
      setRef={ref}
      role="listbox"
    />
  );
}
