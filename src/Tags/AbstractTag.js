import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default function AbstractTag({
  text,
  disabled,
  ariaDisabled,
  isOutline,
  skin,
  color,
  renderPrefix,
  renderSuffix,
  className,
  tabIndex,
  isDropdown,
  value,
  isSelected,
  role,
  onClick,
  onInteraction,
  setRef,
}) {
  const ref = useRef(isDropdown);

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

AbstractTag.propTypes = {
  /** Tag's left element (optional and customizable) */
  renderPrefix: PropTypes.object,
  /** Components to be rendered at the end of the Tag. */
  renderSuffix: PropTypes.object,
  /** Defines a class name to create a custom style for the component. */
  className: PropTypes.string,
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
  /** Action to be executed when the Tag is clicked. */
  onClick: PropTypes.func,
  /** tabIndex is used to define the navigation order for focusable elements. If not undefined, it is passed to the tag component. */
  tabIndex: PropTypes.string,
  /** This prop is a boolean to verify if the tag is a child of the TagDropdown component */
  isDropdown: PropTypes.bool,
  /** This function is used to handle click or keydown interactions */
  onInteraction: PropTypes.func,
  /** This is the TagDropdownItem value. It is used TagDropdown options */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**  This prop is used to verify if the option is selected */
  isSelected: PropTypes.bool,
  /**   This is the TagDropdownItem or TagDropdownTrigger role. It is used to let disabled people know the type of the element. */
  role: PropTypes.string,
  /** This function is used on AbstractTag to set the current Ref */
  setRef: PropTypes.func,
};

AbstractTag.defaultProps = {
  renderPrefix: undefined,
  renderSuffix: undefined,
  className: "",
  isOutline: false,
  color: undefined,
  skin: "pale",
  disabled: false,
  ariaDisabled: false,
  onClick: () => {},
  onInteraction: () => {},
  setRef: () => {},
  tabIndex: undefined,
  isDropdown: false,
  isSelected: false,
  value: "",
  role: "",
};
