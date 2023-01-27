import React, { useRef, useEffect, SyntheticEvent, MutableRefObject } from "react";
import { isUndefined } from "lodash";

interface AbstractTagProps {
  /** This is the Tag's text. */
  text: string;
  /** Tag's left element (optional and customizable) */
  renderPrefix?: JSX.Element;
  /** Components to be rendered at the end of the Tag. */
  renderSuffix?: JSX.Element;
  /** Defines a class name to create a custom style for the component. */
  className?: string;
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
  /** Action to be executed when the Tag is clicked. */
  onClick?: (event?: SyntheticEvent) => any;
  /** tabIndex is used to define the navigation order for focusable elements. If not undefined, it is passed to the tag component. */
  tabIndex?: number;
  /** This prop is a boolean to verify if the tag is a child of the TagDropdown component */
  isDropdown?: boolean;
  /** This function is used to handle click or keydown interactions */
  onInteraction?: ({
    event,
    ref,
  }: {
    event: any;
    ref: React.MutableRefObject<boolean>;
  }) => any;
  /** This is the TagDropdownItem value. It is used TagDropdown options */
  value?: string;
  /**  This prop is used to verify if the option is selected */
  isSelected?: boolean;
  /**   This is the TagDropdownItem or TagDropdownTrigger role. It is used to let disabled people know the type of the element. */
  role?: string;
  /** This function is used on AbstractTag to set the current Ref */
  setRef?: (ref: MutableRefObject<HTMLButtonElement>) => any;
}

export default function AbstractTag({
  text,
  color,
  renderPrefix,
  renderSuffix,
  className,
  tabIndex,
  isOutline = false,
  skin = "pale",
  disabled = false,
  ariaDisabled = false,
  onClick = () => {},
  onInteraction = () => {},
  setRef = () => {},
  isDropdown = false,
  isSelected = false,
  value = "",
  role = "",
}: AbstractTagProps) {
  const ref = useRef();

  const handleEvent = (event) => {
    if ((event.key || event.which) === 32) {
      event.preventDefault();
    }
    if (!isUndefined(onClick)) {
      onClick(event);
    }

    if (!isUndefined(onInteraction)) {
      onInteraction({ event, ref });
    }
  };

  useEffect(() => {
    if (isDropdown) {
      setRef(ref);
    }
  }, [isDropdown]);

  if (isDropdown)
    return (
      <button
        type="button"
        role={role}
        aria-selected={isSelected}
        className={
          `lab-tag ${className}` +
          `${disabled || ariaDisabled ? ` lab-tag--disabled` : ""}` +
          `${isOutline ? ` lab-tag--outline` : ""}` +
          `${color ? ` lab-tag--${color}-${skin}` : ` lab-tag--${skin}`}`
        }
        onClick={!(ariaDisabled || disabled) ? handleEvent : () => {}}
        onKeyDown={handleEvent}
        tabIndex={tabIndex}
        ref={ref}
        disabled={disabled || ariaDisabled}
        id={value}
        value={value}
      >
        {renderPrefix}
        {text}
        {renderSuffix}
      </button>
    );

  return (
    <span
      className={
        `lab-tag ${className}` +
        `${disabled || ariaDisabled ? ` lab-tag--disabled` : ""}` +
        `${isOutline ? ` lab-tag--outline` : ""}` +
        `${color ? ` lab-tag--${color}-${skin}` : ` lab-tag--${skin}`}`
      }
      onClick={!(ariaDisabled || disabled) ? handleEvent : () => {}}
      onKeyDown={handleEvent}
      role="button"
      tabIndex={tabIndex}
    >
      {renderPrefix}
      {text}
      {renderSuffix}
    </span>
  );
}
