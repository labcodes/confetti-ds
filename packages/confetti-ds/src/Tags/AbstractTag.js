import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class AbstractTag extends React.Component {
  static propTypes = {
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
    /** Skin of the the rendered Tag. */
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
    /** This prop sets the TagDropdownItem ref for option and triggers in a TagDropdown component. */
    setRef: PropTypes.func,
    /** This function is used to handle click or keydown interactions */
    onInteraction: PropTypes.func,
    /** This is the TagDropdownItem value. It is used TagDropdown options */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**  This prop is used to verify if the option is selected */
    isSelected: PropTypes.bool,
    /**   This is the TagDropdownItem or TagDropdownTrigger role. It is used to let disabled people know the type of the element. */
    role: PropTypes.string,
  };

  static defaultProps = {
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

  constructor(props) {
    super(props);

    if (props.isDropdown) this.ref = React.createRef();
  }

  componentDidMount() {
    const { setRef, isDropdown } = this.props;
    if (isDropdown) setRef(this.ref);
  }

  handleEvent = (event) => {
    const { onClick, onInteraction } = this.props;

    if ((event.keycode || event.which) === 32) {
      event.preventDefault();
    }
    if (!isUndefined(onClick)) {
      onClick(event);
    }

    if (!isUndefined(onInteraction)) {
      onInteraction({ event, ref: this.ref });
    }
  };

  render() {
    const {
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
    } = this.props;

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
          onClick={!(ariaDisabled || disabled) ? this.handleEvent : () => {}}
          onKeyDown={this.handleEvent}
          tabIndex={tabIndex}
          ref={this.ref}
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
        onClick={!(ariaDisabled || disabled) ? this.handleEvent : () => {}}
        onKeyPress={this.handleEvent}
        role="button"
        tabIndex={tabIndex}
      >
        {renderPrefix}
        {text}
        {renderSuffix}
      </span>
    );
  }
}
