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

    /** Tab index to manage itens position on screen */
    tabIndex: PropTypes.string,
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
    tabIndex: "0",
  };

  handleEvent = (event) => {
    if ((event.keycode || event.which) === 32) {
      event.preventDefault();
    }
    const { onClick } = this.props;
    if (!isUndefined(onClick)) {
      onClick(event);
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
    } = this.props;

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
