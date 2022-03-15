import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { ICON_TYPES, TAG_COLORS } from "../constants";

export default class TagItem extends React.Component {
  static propTypes = {
    /** This is the Tag's text. */
    text: PropTypes.string.isRequired,
    /** This is the Tag's text. */
    value: PropTypes.string.isRequired,
    /** Source of the thumb to be rendered. Won't render a thumb if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
    thumbSrc: PropTypes.string,
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. Can't have both 'icon' and 'thumbSrc' at the same time. */
    icon: PropTypes.oneOf(ICON_TYPES),
    /** Sets Tag's color. */
    color: PropTypes.oneOf(TAG_COLORS),
    /** Skin of the the rendered Tag. */
    skin: PropTypes.oneOf(["pale", "vivid"]),
    /** Sets an outline style. */
    isOutline: PropTypes.bool,
    /** Sets onClick function. */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    thumbSrc: "",
    icon: undefined,
    isOutline: false,
    skin: "pale",
    color: undefined,
    onClick: () => {},
  };

  constructor(props) {
    super(props);
    this.checkThumbAndIcon();
  }

  componentDidUpdate() {
    this.checkThumbAndIcon();
  }

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
      "`TagItem` can't be initialized with both `thumb` and `icon` props.";
    const { thumbSrc, icon } = this.props;
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw new Error(errorMessage);
    }
  }

  render() {
    const { text, thumbSrc, icon, color, skin, isOutline, onClick, value } =
      this.props;
    return (
      <AbstractTag
        text={text}
        className={`${icon ? ` lab-tag--has-left-icon` : ""}${
          thumbSrc ? ` lab-tag--has-thumb` : ""
        } lab-ta--tag-item`}
        onClick={onClick}
        isOutline={isOutline}
        skin={skin}
        color={color}
        value={value}
        renderPrefix={this.icon() || this.thumb()}
      />
    );
  }
}
