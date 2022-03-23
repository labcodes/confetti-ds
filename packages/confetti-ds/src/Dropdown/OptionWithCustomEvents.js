import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class OptionWithCustomEvents extends Component {
  static propTypes = {
    // functions
    onSelectEvent: PropTypes.func,
    setDefaultOption: PropTypes.func,
    children: PropTypes.node.isRequired,
    // props
    selectedOption: PropTypes.object.isRequired,
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
    const { children, setDefaultOption } = this.props;
    const { text, value, selected } = children.props;
    const defaultOption = { text, value };
    if (selected) setDefaultOption(defaultOption);
  };

  getValue = (event) => {
    const {
      children: {
        props: { disabled },
      },
    } = this.props;
    if (disabled) return;
    const {
      onSelectEvent,
      children: {
        props: { value, text },
      },
    } = this.props;
    const customEvent = { ...event, target: { ...event.target, value, text } };
    const currentValue = { value, text };

    onSelectEvent({ currentValue, event: customEvent });
  };

  render() {
    const { getValue } = this;

    const { children, selectedOption } = this.props;
    const { value, disabled } = children.props;

    const isSelected = selectedOption && selectedOption.value === value;
    const skin = isSelected ? "vivid" : "pale";
    const tabIndex = disabled ? "-1" : "0";
    return (
      <div
        className={`lab-dropdown__option ${
          disabled ? "lab-dropdown__option--disabled" : ""
        }`}
        id={`lab-dropdown__option--${value}`}
        key={value}
        tabIndex={-1}
        role="option"
        value={value}
        aria-selected={isSelected}
        aria-disabled={disabled}
        onClick={getValue}
        onKeyPress={getValue}
      >
        {React.cloneElement(children, {
          ...children.props,
          skin,
          isHighlighted: isSelected,
          tabIndex,
        })}
      </div>
    );
  }
}
