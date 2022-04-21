import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class DropdownOption extends Component {
  static propTypes = {
    /** This function is called when user selects a valid option */
    handleSelectDropdownOption: PropTypes.func,
    /** This is a function is used to set a default option when the user pass the "selected" prop to a TagItem */
    setDefaultOption: PropTypes.func,
    /** This function fires when keyboard interactions are detected. */
    handleKeyDown: PropTypes.func.isRequired,
    /** This function sets the ref of the option if this is valid (meaning TagItem does not have the "disabled" prop). */
    setRef: PropTypes.func.isRequired,
    /** TThis prop is used to set if an option is currently selected */
    selectedOption: PropTypes.object.isRequired,
    /** This children prop is the TagItem */
    children: PropTypes.node.isRequired,
    /** This is the option index. */
    index: PropTypes.number.isRequired,
    /** This is the unique id of the option */
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    // functions
    handleSelectDropdownOption: () => {},
    setDefaultOption: () => {},
  };

  constructor(props) {
    super(props);

    const { setRef, children } = this.props;
    const isNotDisabled = !children.props.disabled;
    this.ref = React.createRef();
    if (isNotDisabled) setRef(this.ref);
  }

  componentDidMount() {
    const { setDefault } = this;

    setDefault();
  }

  setDefault = () => {
    const { checkDisabled } = this;
    const { children, setDefaultOption, index } = this.props;
    const { text, selected } = children.props;
    const defaultOption = { text, index, ref: this.ref };

    checkDisabled();

    if (selected) setDefaultOption(defaultOption);
  };

  selectOption = (event) => {
    const { handleSelectDropdownOption, children } = this.props;
    const { disabled, value, text } = children.props;

    if (disabled) return;

    const customEvent = {
      ...event,
      target: { ...event.target, value, name: text },
    };

    handleSelectDropdownOption({
      displayText: text,
      event: customEvent,
      ref: this.ref,
    });
  };

  checkDisabled = () => {
    const { children } = this.props;
    const { selected, disabled } = children.props;
    if (disabled && selected)
      throw Error("You can't set a disabled option as default.");
  };

  render() {
    const { selectOption } = this;

    const { children, selectedOption, handleKeyDown, index, id } = this.props;
    const { text, value, disabled } = children.props;
    const isSelected = selectedOption.ref === this.ref;
    const skin = isSelected ? "vivid" : "pale";

    return (
      <div
        className={`lab-dropdown__option ${
          disabled ? "lab-dropdown__option--disabled" : ""
        }`}
        id={`lab-dropdown__option--${value}`}
        key={value}
      >
        <button
          className={`lab-dropdown__invisible-button ${
            disabled
              ? "lab-dropdown__invisible-button--disabled"
              : "lab-dropdown__invisible-button--option"
          }`}
          role="menuitem"
          type="button"
          disabled={disabled}
          onClick={selectOption}
          tabIndex="-1"
          onKeyDown={handleKeyDown}
          aria-disabled={disabled}
          id={`option-${index}--menu--${id}`}
          ref={disabled ? null : this.ref}
        >
          {text}
        </button>
        {React.cloneElement(children, {
          ...children.props,
          skin,
          isHighlighted: isSelected,
          tabIndex: "-1",
        })}
      </div>
    );
  }
}
