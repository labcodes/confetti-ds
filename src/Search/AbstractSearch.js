/* eslint-disable react/no-did-update-set-state */
import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class AbstractSearch extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string,
    /** Defines a default value for the Search initialization. */
    defaultValue: PropTypes.string,
    /** Disables the Search. Will be read by screen readers. When true, will override `disabled`. */
    ariaDisabled: PropTypes.bool,
    /** Disables the Search. Won't be read by screen readers. */
    disabled: PropTypes.bool,
    /** Text that will be rendered inside the Search field. */
    value: PropTypes.string,
    /** Action to be executed when the Search default value changes. */
    onChange: PropTypes.func,
    /** Action to be executed when the search is performed. */
    onSearch: PropTypes.func,
    /** Action to be executed when the Search field is cleared out. */
    onClear: PropTypes.func,
    /** The placeholder text when the Search field is empty. Usually used to describe the values accepted (e.g.: Search by keyword or status). */
    placeholder: PropTypes.string,
    /** Style variation of the Search. */
    type: PropTypes.oneOf(["standard", "inline"]).isRequired,
  };

  static defaultProps = {
    id: undefined,
    defaultValue: undefined,
    disabled: false,
    ariaDisabled: false,
    value: undefined,
    onChange: () => {},
    onSearch: () => {},
    onClear: () => {},
    placeholder: " ",
  };

  constructor(props) {
    super(props);
    this.searchRef = React.createRef();

    const { defaultValue, value, id } = props;
    if (!isUndefined(defaultValue) && !isUndefined(value)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both value and defaultValue for input ${id} at the same time. When a value is passed, we always use it. Make sure this is the behaviour you want.`
      );
    }
    this.state = {
      localValue: value || defaultValue || "",
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (value && value !== prevProps.value) {
      this.setState({ localValue: value });
    }
  }

  handleOnChange = (event) => {
    const { onChange } = this.props;

    this.setState({ localValue: event.target.value });

    if (!isUndefined(onChange)) {
      onChange(event);
    }
  };

  handleOnSearch = () => {
    const { onSearch } = this.props;
    const { localValue } = this.state;

    if (!isUndefined(onSearch)) {
      onSearch(localValue);
    }
  };

  handleKeyPress = (event) => {
    const { onSearch } = this.props;
    if (event.keyCode === 13 && !isUndefined(onSearch)) {
      onSearch(event.target.value);
    }
  };

  handleOnClear = () => {
    const { value, onClear } = this.props;

    if (isUndefined(value)) {
      this.setState({ localValue: "" });
    }

    if (!isUndefined(onClear)) {
      onClear();
    }
  };

  render() {
    const { id, disabled, ariaDisabled, placeholder, type } = this.props;

    const { localValue } = this.state;

    return (
      <div
        className={
          type === "standard" ? "lab-standard-search" : "lab-inline-search"
        }
      >
        <div
          className={`lab-search__wrapper ${
            disabled ? "lab-search--disabled" : ""
          }`}
        >
          <input
            className="lab-search__field"
            type="search"
            autoComplete="off"
            id={id}
            value={localValue}
            ref={this.searchRef}
            onChange={!ariaDisabled ? this.handleOnChange : () => {}}
            onKeyDown={!ariaDisabled ? this.handleKeyPress : () => {}}
            disabled={(!ariaDisabled && disabled) || undefined}
            aria-disabled={ariaDisabled || undefined}
            {...(placeholder ? { placeholder } : "")}
          />

          <div className="lab-search__borders" />
          <TrailingIcon
            onClear={this.handleOnClear}
            disabled={(!ariaDisabled && disabled) || undefined}
            ariaDisabled={ariaDisabled || undefined}
          />
          {type === "standard" ? (
            <StandardSearchIcon
              handleOnSearch={this.handleOnSearch}
              disabled={(!ariaDisabled && disabled) || undefined}
              ariaDisabled={ariaDisabled || undefined}
            />
          ) : (
            <InlineSearchIcon disabled={ariaDisabled || disabled} />
          )}
        </div>
      </div>
    );
  }
}

// ----- Auxiliary components ----- //

function TrailingIcon(props) {
  const { onClear, disabled, ariaDisabled } = props;
  let className = "lab-search__remove-icon";
  if (!onClear) {
    className += " lab-input__icon--disabled"; // check this out
  }

  return (
    <button
      type="button"
      className={className}
      onClick={!ariaDisabled ? onClear : () => {}}
      disabled={(!ariaDisabled && disabled) || undefined}
      aria-disabled={ariaDisabled || undefined}
    >
      <Icon type="remove" color="mineral-40" />
    </button>
  );
}

TrailingIcon.propTypes = {
  onClear: PropTypes.func,
  disabled: PropTypes.bool,
  ariaDisabled: PropTypes.bool,
};

TrailingIcon.defaultProps = {
  onClear: undefined,
  disabled: false,
  ariaDisabled: false,
};

function StandardSearchIcon(props) {
  const { disabled, ariaDisabled, handleOnSearch } = props;
  return (
    <React.Fragment>
      <button
        type="button"
        className="lab-standard-search__button"
        onClick={!ariaDisabled ? handleOnSearch : () => {}}
        disabled={(!ariaDisabled && disabled) || undefined}
        aria-disabled={ariaDisabled || undefined}
      >
        <Icon
          className="lab-standard-search__icon"
          type="magnifying-glass"
          color="white"
        />
      </button>
      <span className="lab-standard-search__separator" />
    </React.Fragment>
  );
}

StandardSearchIcon.propTypes = {
  disabled: PropTypes.bool,
  ariaDisabled: PropTypes.bool,
  handleOnSearch: PropTypes.func,
};

StandardSearchIcon.defaultProps = {
  disabled: false,
  ariaDisabled: false,
  handleOnSearch: undefined,
};

function InlineSearchIcon(props) {
  const { disabled } = props;
  return (
    <Icon
      className={`lab-inline-search__icon ${
        disabled ? "lab-inline-search__icon--disabled" : ""
      }`}
      type="magnifying-glass"
      color="mineral-40"
    />
  );
}

InlineSearchIcon.propTypes = {
  disabled: PropTypes.bool,
};

InlineSearchIcon.defaultProps = {
  disabled: false,
};
