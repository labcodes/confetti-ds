import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class OptionWithCustomEvents extends Component {
  static propTypes = {
    // functions
    onSelect: PropTypes.func,
    children: PropTypes.node.isRequired,
    // props
    color: PropTypes.string,
    selectedValue: PropTypes.string.isRequired,
  };

  static defaultProps = {
    // functions
    onSelect: () => {},
    // props
    color: "teal",
  };

  getValue = () => {
    const {
      onSelect,
      children: {
        props: { value, text },
      },
    } = this.props;
    const selectedOption = { value, text };
    onSelect(selectedOption);
  };

  render() {
    const { getValue, isOvering } = this;

    const { children, color, selectedValue } = this.props;
    const { value } = children.props;

    const isSelected = selectedValue === value;

    return (
      <div
        className={`lab-dropdown__option lab-dropdown__option--color-${color} ${
          isSelected && `lab-dropdown__option--selected-${color}`
        }`}
        tabIndex={-1}
        role="option"
        aria-selected="false"
        onClick={getValue}
        onKeyPress={getValue}
        onFocus={isOvering}
      >
        {React.cloneElement(children, {
          ...children.props,
        })}
      </div>
    );
  }
}
