import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class OptionWithCustomEvents extends Component {
  static propTypes = {
    // functions
    onSelectEvent: PropTypes.func,
    setDefaultOption: PropTypes.func,
    onKeyUpEvent: PropTypes.func.isRequired,
    // props
    selectedOption: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    // functions
    onSelectEvent: () => {},
    setDefaultOption: () => {},
  };

  componentDidMount() {
    const { setDefault } = this;

    setDefault();
  }

  setDefault = () => {
    const { children, setDefaultOption, index } = this.props;
    const { text, value, selected } = children.props;
    const defaultOption = { text, value, index };
    if (selected) setDefaultOption(defaultOption);
  };

  getValue = (event) => {
    const {
      children: {
        props: { disabled },
      },
      index,
    } = this.props;
    if (disabled) return;
    const {
      onSelectEvent,
      children: {
        props: { value, text },
      },
    } = this.props;

    const customEvent = { ...event, target: { ...event.target, value, text } };
    const currentValue = { value, text, index };

    onSelectEvent({ currentValue, event: customEvent });
  };

  render() {
    const { getValue } = this;

    const { children, selectedOption, onKeyUpEvent, index, id } = this.props;
    const { text, value, disabled } = children.props;

    const isSelected = selectedOption && selectedOption.value === value;
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
            disabled ? "lab-dropdown__invisible-button--disabled" : ""
          }`}
          role="menuitem"
          type="button"
          disabled={disabled}
          onClick={getValue}
          tabIndex="-1"
          onKeyUp={onKeyUpEvent}
          aria-disabled={disabled}
          id={`option-${index}--menu--${id}`}
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
