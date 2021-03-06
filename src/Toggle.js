import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class Toggle extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string.isRequired,
    /** Text that will specify the HTML `name` attribute of an `<input>` element. */
    name: PropTypes.string.isRequired,
    /** Defines a static value for the Toggle. If set, internal logic is deactivated. */
    value: PropTypes.bool,
    /** Defines the Toggle color. */
    color: PropTypes.oneOf(["teal", "purple"]),
    /** Disables the Toggle. Will be read by screen readers. When true, will override `disabled`. */
    ariaDisabled: PropTypes.bool,
    /** Disables the Toggle. Won't be read by screen readers. */
    disabled: PropTypes.bool,
    /** Sets value to true by default. */
    defaultValue: PropTypes.bool,
    /** Action executed when the Toggle is clicked. */
    handleToggle: PropTypes.func,
  };

  static defaultProps = {
    color: "teal",
    disabled: false,
    ariaDisabled: false,
    defaultValue: undefined,
    value: undefined,
    handleToggle: () => {},
  };

  constructor(props) {
    super(props);
    const { defaultValue, value, name } = props;
    if (!isUndefined(defaultValue) && !isUndefined(value)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both value and defaultValue for input ${name} at the same time. We always initialize the toggle with defaultValue. Make sure this is the behaviour you want.`
      );
    }
    this.state = {
      localValue: !isUndefined(defaultValue) ? defaultValue : false,
    };
  }

  handleOnChange = (event) => {
    const { handleToggle } = this.props;
    if (!isUndefined(handleToggle)) {
      handleToggle(event);
    }

    this.setState((state) => ({ localValue: !state.localValue }));
  };

  render() {
    const { id, color, name, disabled, ariaDisabled, value } = this.props;
    const { localValue } = this.state;
    const isChecked = !isUndefined(value) ? value : localValue;

    return (
      <label
        className={`
          lab-toggle
          ${color ? `lab-toggle--${color}` : ""}
          ${disabled || ariaDisabled ? " lab-toggle--disabled" : ""}
        `}
        htmlFor={name}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          className="lab-toggle__input"
          checked={isChecked}
          onChange={!ariaDisabled ? this.handleOnChange : () => {}}
          disabled={(!ariaDisabled && disabled) || undefined}
          aria-disabled={ariaDisabled || undefined}
        />
        <span className="lab-toggle__slider" />
      </label>
    );
  }
}
