import { PropTypes } from "prop-types";
import React, { useState, useEffect, useRef } from "react";

export default function DropdownOption({
  children,
  handleInteraction,
  isSelected,
  handleSelectDropdownOption,
  setDefaultOption,
  setRef,
}) {
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

  const selectOption = (event) => {
    const { disabled, value, text } = children.props;

    if (disabled) return;

    const customEvent = {
      ...event,
      target: { ...event.target, value, name: text },
    };

    handleSelectDropdownOption({
      displayText: text,
      event: customEvent,
      ref,
    });
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

DropdownOption.propTypes = {
  /** This function is called when user selects a valid option */
  handleSelectDropdownOption: PropTypes.func,
  /** This is a function is used to set a default option when the user pass the "selected" prop to a TagDropdownItem */
  setDefaultOption: PropTypes.func,
  /** This function fires when keyboard interactions are detected. */
  // /** This function sets the ref of the option if this is valid (meaning TagDropdownItem does not have the "disabled" prop). */
  setRef: PropTypes.func.isRequired,
  /** TThis prop is used to set if an option is currently selected */
  /** This children prop is the TagDropdownItem */
  children: PropTypes.node.isRequired,
  // This function is used to handle click or keydown interactions
  handleInteraction: PropTypes.func.isRequired,
  // This prop is used to verify if the option is selected
  isSelected: PropTypes.bool.isRequired,
};

DropdownOption.defaultProps = {
  // functions
  handleSelectDropdownOption: () => {},
  setDefaultOption: () => {},
};

// export default class DropdownOption extends Component {
//
// componentDidMount() {
//   const {setDefault} = this;
//   setDefault();
// }
//
// setDefault = () => {
//   const { checkDisabled } = this;
//   const { children, setDefaultOption } = this.props;
//
//   const defaultOption = { text, ref: this.ref };
//
//   checkDisabled();
//
//   if (selected) setDefaultOption(defaultOption);
// };

// selectOption = (event) => {
//   const { handleSelectDropdownOption, children } = this.props;
//   const { disabled, value, text } = children.props;
//
//   if (disabled) return;
//
//   const customEvent = {
//     ...event,
//     target: { ...event.target, value, name: text },
//   };
//
//   handleSelectDropdownOption({
//     displayText: text,
//     event: customEvent,
//     ref,
//   });
// };

// checkDisabled = () => {
//   const { children } = this.props;
//   const { selected, disabled } = children.props;
//   if (disabled && selected)
//     throw Error("You can't set a disabled option as default.");
// };

// render() {
//   const { children, setRef, handleInteraction, isSelected } = this.props;
//   const { value, disabled } = children.props;
//
//
//
// }
// }
