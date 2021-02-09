import React from "react";
import PropTypes from "prop-types";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { TAG_COLORS } from "../constants";

export default class DropdownTag extends React.Component {
  static propTypes = {
    /** This is the Tag's text. */
    text: PropTypes.string.isRequired,
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
    icon: PropTypes.string,
    /** Sets Tag's color. */
    color: PropTypes.oneOf(TAG_COLORS),
    /** Skin of the the rendered Tag. */
    skin: PropTypes.oneOf(["pale", "vivid"]),
    /** Sets an outline style. */
    isOutline: PropTypes.bool,
    /** Disables the Tag. Will be read by screen readers. When true, will override `disabled`. */
    ariaDisabled: PropTypes.bool,
    /** Disables the Tag. Won't be read by screen readers. */
    disabled: PropTypes.bool,
    /** Action to be executed when the Tag is clicked. */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    icon: "",
    color: "",
    skin: "pale",
    isOutline: false,
    disabled: false,
    ariaDisabled: false,
    onClick: () => {},
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon
        type={icon}
        color="black-75"
        size="petit"
        className="lab-tag--left-icon"
      />
    ) : undefined;
  };

  dropdownIcon = () => (
    <span className="lab-tag__dropdown-icon-wrapper">
      <Icon
        type="dropdown-closed"
        color="black-75"
        size="petit"
        className="lab-tag--dropdown-icon"
      />
    </span>
  );

  render() {
    const {
      text,
      icon,
      color,
      skin,
      isOutline,
      disabled,
      ariaDisabled,
      onClick,
    } = this.props;
    return (
      <AbstractTag
        className={`lab-tag--dropdown${`${
          icon ? ` lab-tag--has-left-icon` : ""
        }`}`}
        text={text}
        icon={icon}
        color={color}
        skin={skin}
        isOutline={isOutline}
        disabled={!ariaDisabled && disabled}
        ariaDisabled={ariaDisabled}
        onClick={onClick}
        renderPrefix={this.icon()}
        renderSuffix={this.dropdownIcon()}
      />
    );
  }
}
