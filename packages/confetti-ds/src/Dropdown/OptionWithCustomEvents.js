import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class OptionWithCustomEvents extends Component {
  static propTypes = {
    // functions
    onSelectEvent: PropTypes.func,
    setDefaultOption: PropTypes.func,
    onKeyUpEvent: PropTypes.func.isRequired,
    setRef: PropTypes.func.isRequired,
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
    const { children, setDefaultOption, index } = this.props;
    const { text, selected } = children.props;
    const defaultOption = { text, index, ref: this.ref };
    if (selected) setDefaultOption(defaultOption);
  };

  selectOption = (event) => {
    const { onSelectEvent, children } = this.props;
    const { disabled, value, text } = children.props;

    if (disabled) return;

    const customEvent = {
      ...event,
      target: { ...event.target, value, name: text },
    };
    onSelectEvent({
      displayText: text,
      event: customEvent,
      ref: this.ref,
    });
  };

  render() {
    const { selectOption } = this;

    const { children, selectedOption, onKeyUpEvent, index, id } = this.props;
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
            disabled ? "lab-dropdown__invisible-button--disabled" : ""
          }`}
          role="menuitem"
          type="button"
          disabled={disabled}
          onClick={selectOption}
          tabIndex="-1"
          onKeyUp={onKeyUpEvent}
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
