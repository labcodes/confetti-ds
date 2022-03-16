import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class OptionWithCustomEvents extends Component {
  static propTypes = {
    // functions
    onSelect: PropTypes.func,
    children: PropTypes.node.isRequired,
    // props
    color: PropTypes.string,
    selectedOption: PropTypes.object.isRequired,
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

    const childSelected = { value, text };

    onSelect(childSelected);
  };

  render() {
    const { getValue } = this;

    const { children, color, selectedOption } = this.props;
    const { value } = children.props;

    const isSelected = selectedOption && selectedOption.value === value;

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
      >
        {React.cloneElement(children, {
          ...children.props,
        })}
      </div>
    );
  }
}
