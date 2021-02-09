import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import AbstractTag from "./AbstractTag";
import Icon from "../Icon";
import { TAG_COLORS } from "../constants";

export default class SimpleTag extends React.Component {
  static propTypes = {
    /** This is the Tag's text. */
    text: PropTypes.string.isRequired,
    /** Source of the thumb to be rendered. Won't render a thumb if not passed to the component. */
    thumbSrc: PropTypes.string,
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
    icon: PropTypes.string,
    /** Sets Tag's color. */
    color: PropTypes.oneOf(TAG_COLORS),
    /** Skin of the the rendered Tag. */
    skin: PropTypes.string,
    /** Sets an outline style. */
    isOutline: PropTypes.bool,
  };

  static defaultProps = {
    thumbSrc: "",
    icon: "",
    isOutline: false,
    skin: "pale",
    color: "",
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
      "`SimpleTag` can't be initialized with both `thumb` and `icon` props.";
    const { thumbSrc, icon } = this.props;
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw new Error(errorMessage);
    }
  }

  render() {
    const { text, thumbSrc, icon, color, skin, isOutline } = this.props;
    return (
      <AbstractTag
        text={text}
        className={`${icon ? ` lab-tag--has-left-icon` : ""}${
          thumbSrc ? ` lab-tag--has-thumb` : ""
        }`}
        isOutline={isOutline}
        skin={skin}
        color={color}
        renderPrefix={this.icon() || this.thumb()}
      />
    );
  }
}
