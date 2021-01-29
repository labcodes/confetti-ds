import React from "react";
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

import Icon from "./Icon";

// Checkbox //

export default class Checkbox extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string.isRequired,
    /** Text that will specify the HTML name attribute of an `<input>` element. */
    name: PropTypes.string.isRequired,
    /** This is the checkbox's label. */
    label: PropTypes.string.isRequired,
    /** Disables the Checkbox. Will be read by screen readers. When true, will override `disabled`. */
    ariaDisabled: PropTypes.bool,
    /** Disables the Checkbox. Won't be read by screen readers. */
    disabled: PropTypes.bool,
    /** Defines if the Checkbox is currently checked. */
    checked: PropTypes.bool,
    /** Marks Checkbox as indeterminate. Used on "check/uncheck all" Checkbox in a `fieldset` to display when some itens are checked and others are unchecked */
    indeterminate: PropTypes.bool,
    /** Defines if the Checkbox is initialized as "checked". */
    defaultChecked: PropTypes.bool,
    /** Callback action to be executed when the Checkbox is clicked. */
    onChange: PropTypes.func,
    /** Value that will specify the HTML `value` attribute of an `<input>` element. */
    value: PropTypes.oneOfType([string, number, bool]),
    /** Add a class name to make custom changes */
    className: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    ariaDisabled: false,
    checked: undefined,
    value: undefined,
    indeterminate: false,
    defaultChecked: undefined,
    className: undefined,
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    const { defaultChecked, checked, id } = props;
    if (!isUndefined(defaultChecked) && !isUndefined(checked)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both checked and defaultChecked for input ${id} at the same time. We always initialize the checkbox with defaultChecked. Make sure this is the behaviour you want.`
      );
    }

    let localChecked = false;
    if (defaultChecked) {
      localChecked = defaultChecked;
    } else if (!isUndefined(checked)) {
      localChecked = checked;
    }

    this.state = {
      localChecked,
    };

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.checkIndeterminate();
  }

  componentDidUpdate(prevProps) {
    const { checked } = this.props;

    if (checked !== prevProps.checked) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(() => ({ localChecked: checked }));
    }

    this.checkIndeterminate();
  }

  checkIndeterminate = () => {
    const { indeterminate } = this.props;
    this.inputRef.current.indeterminate = indeterminate;
  };

  handleOnChange = (event) => {
    const { onChange } = this.props;
    if (!isUndefined(onChange)) {
      onChange(event);
    }

    this.setState((state) => ({ localChecked: !state.localChecked }));
  };

  render() {
    const {
      id,
      name,
      className,
      label,
      ariaDisabled,
      disabled,
      indeterminate,
      value,
    } = this.props;

    const { localChecked } = this.state;

    return (
      <React.Fragment>
        <input
          className={`lab-checkbox ${className || ""}`}
          type="checkbox"
          ref={this.inputRef}
          id={id}
          name={name}
          checked={localChecked}
          onChange={!ariaDisabled ? this.handleOnChange : () => {}}
          disabled={(!ariaDisabled && disabled) || undefined}
          aria-disabled={ariaDisabled || undefined}
          {...(value ? { value } : undefined)}
        />
        <label className="lab-checkbox__label" htmlFor={id}>
          <span className="lab-checkbox__box">
            {localChecked || indeterminate ? (
              <Icon
                type={indeterminate ? "minus" : "check"}
                color={ariaDisabled || disabled ? "mineral-40" : "white"}
                size="small"
              />
            ) : null}
          </span>
          {label}
        </label>
      </React.Fragment>
    );
  }
}
