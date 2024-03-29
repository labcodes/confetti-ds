import React, { SyntheticEvent, useEffect, useRef } from "react";

interface DropdownOptionProps {
  /** This is a function is used to set a default option when the user pass the "selected" prop to a TagDropdownItem */
  setDefaultOption: ({
    text,
    ref,
  }: {
    text: string;
    ref: React.MutableRefObject<HTMLButtonElement>;
  }) => any;
  /** This function fires when keyboard interactions are detected. */
  // /** This function sets the ref of the option if this is valid (meaning TagDropdownItem does not have the "disabled" prop). */
  setRef: (ref: React.MutableRefObject<HTMLButtonElement>) => any;
  /** TThis prop is used to set if an option is currently selected */
  /** This children prop is the TagDropdownItem */
  children: JSX.Element;
  // This function is used to handle click or keydown interactions
  handleInteraction: ({
    event,
    ref,
  }: {
    event: SyntheticEvent;
    ref: React.MutableRefObject<HTMLButtonElement>;
  }) => any;
  // This prop is used to verify if the option is selected
  isSelected: boolean;
}

export default function DropdownOption({
  setDefaultOption = () => {},
  setRef,
  children,
  handleInteraction,
  isSelected,
}: DropdownOptionProps) {
  const ref = useRef();

  const checkDisabled = () => {
    const { selected, disabled } = children.props;
    if (disabled && selected)
      throw Error("You can't set a disabled option as default.");
  };

  const setDefault = () => {
    const { text, selected } = children.props;
    const defaultOption = { text, ref };

    checkDisabled();

    if (selected) setDefaultOption(defaultOption);
  };

  // component DidMount
  useEffect(() => {
    setDefault();
  }, []);
  const { disabled, value } = children.props;
  const skin = isSelected ? "vivid" : "pale";

  return (
    <div
      className={`lab-dropdown__option ${
        disabled ? "lab-dropdown__option--disabled" : ""
      }`}
      id={`lab-dropdown__option--${value}`}
      key={value}
    >
      {React.cloneElement(children, {
        ...children.props,
        skin,
        isHighlighted: isSelected,
        tabIndex: "-1",
        onInteraction: handleInteraction,
        setRef,
        isSelected,
      })}
    </div>
  );
}
