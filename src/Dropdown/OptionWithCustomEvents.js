import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class OptionWithCustomEvents extends Component {
  static propTypes = {
    // functions
    onSelect: PropTypes.func,
    setDefaultOption: PropTypes.func,
    children: PropTypes.node.isRequired,
    // props
    selectedOption: PropTypes.object.isRequired,
  };

  static defaultProps = {
    // functions
    onSelect: () => {},
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

    const { children, selectedOption } = this.props;
    const { value } = children.props;

    const isSelected = selectedOption && selectedOption.value === value;
    const skin = isSelected ? "vivid" : "pale";
    return (
      <div
        className="lab-dropdown__option"
        id={`lab-dropdown__option--${value}`}
        key={value}
        tabIndex={-1}
        role="option"
        aria-selected="false"
        onClick={getValue}
        onKeyPress={getValue}
      >
        {React.cloneElement(children, {
          ...children.props,
          skin,
        })}
      </div>
    );
  }
}
