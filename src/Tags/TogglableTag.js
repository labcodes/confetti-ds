import React from "react";
import PropTypes from "prop-types";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { TAG_COLORS } from "../constants";

export default class TogglableTag extends React.Component {
  static propTypes = {
    /** This is the Tag's text. */
    text: PropTypes.string.isRequired,
    /** Sets Tag's color. */
    color: PropTypes.oneOf(TAG_COLORS),
    /** Sets an outline style. */
    isOutline: PropTypes.bool,
    /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
    ariaDisabled: PropTypes.bool,
    /** Disables the Tag. Won't be read by screen readers. */
    disabled: PropTypes.bool,
    /** Action to be executed when the Tag is clicked. */
    onClick: PropTypes.func,
    /** Defines if the Tag is toggled on. */
    isOn: PropTypes.bool,
  };

  static defaultProps = {
    color: "",
    isOutline: false,
    disabled: false,
    ariaDisabled: false,
    isOn: false,
    onClick: () => {},
  };

  selected = () => {
    const { isOn } = this.props;
    let iconClass;

    if (isOn) {
      iconClass = "lab-tag--check-icon lab-tag--check-icon-on";
    } else {
      iconClass = "lab-tag--check-icon lab-tag--check-icon-off";
    }

    return (
      <Icon type="check" color="black-75" size="petit" className={iconClass} />
    );
  };

  render() {
    const {
      text,
      color,
      isOutline,
      disabled,
      ariaDisabled,
      isOn,
      onClick,
    } = this.props;
    return (
      <AbstractTag
        className={`lab-tag--togglable${isOn ? " lab-tag--selected" : ""}`}
        text={text}
        color={color}
        isOutline={isOutline}
        disabled={!ariaDisabled && disabled}
        ariaDisabled={ariaDisabled}
        onClick={onClick}
        skin={isOn ? "vivid" : "pale"}
        renderPrefix={this.selected()}
      />
    );
  }
}
