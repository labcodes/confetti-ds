import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { ICON_TYPES, TAG_COLORS } from "../constants";

export default class RemovableTag extends React.Component {
  static propTypes = {
    /** This is the Tag's text. */
    text: PropTypes.string.isRequired,
    /** Source of the thumbnail to be rendered. Won't render a thumbnail if not passed to the component. */
    thumbSrc: PropTypes.string,
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
    icon: PropTypes.oneOf(ICON_TYPES),
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
    /** Callback to be executed when the Tag is clicked. */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    thumbSrc: "",
    icon: undefined,
    color: undefined,
    skin: "pale",
    isOutline: false,
    disabled: false,
    ariaDisabled: false,
    onClick: () => {},
  };

  constructor(props) {
    super(props);
    this.checkThumbAndIcon();
  }

  componentDidUpdate() {
    this.checkThumbAndIcon();
  }

  removeIcon = () => (
    <span className="lab-tag__remove-icon-wrapper">
      <Icon
        type="remove"
        color="black-75"
        size="petit"
        className="lab-tag--remove-icon"
      />
    </span>
  );

  thumb = () => {
    const { thumbSrc } = this.props;
    return thumbSrc ? (
      <img className="lab-tag__thumb" src={thumbSrc} alt="" />
    ) : undefined;
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

  checkThumbAndIcon() {
    const errorMessage =
      "`RemovableTag` can't be initialized with both `thumb` and `icon` props.";
    const { thumbSrc, icon } = this.props;
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw Error(errorMessage);
    }
  }

  render() {
    const {
      text,
      thumbSrc,
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
        className={`lab-tag--removable${`${
          icon ? ` lab-tag--has-left-icon` : ""
        }${thumbSrc ? ` lab-tag--has-thumb` : ""}`}`}
        text={text}
        thumbSrc={thumbSrc}
        icon={icon}
        color={color}
        skin={skin}
        isOutline={isOutline}
        disabled={!ariaDisabled && disabled}
        ariaDisabled={ariaDisabled}
        onClick={onClick}
        renderPrefix={this.thumb() || this.icon()}
        renderSuffix={this.removeIcon()}
      />
    );
  }
}
