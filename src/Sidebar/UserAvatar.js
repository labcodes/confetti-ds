import React from "react";
import PropTypes from "prop-types";

export default class UserAvatar extends React.Component {
  static propTypes = {
    /** Source of the avatar to be rendered. */
    avatarSrc: PropTypes.string.isRequired,
    /** Text that will specify the HTML alt attribute of an <img> element. */
    altText: PropTypes.string.isRequired,
    /** Text that will be rendered as the avatar's caption. */
    caption: PropTypes.string.isRequired,
  };

  render() {
    const { avatarSrc, altText, caption } = this.props;
    return (
      <div className="lab-narrow-sidebar__avatar">
        <div className="lab-narrow-sidebar__avatar-photo">
          <img src={avatarSrc} alt={altText} />
        </div>
        <div className="lab-narrow-sidebar__avatar-text">
          <span>{altText}</span>
          <span className="lab-narrow-sidebar__avatar-caption">{caption}</span>
        </div>
      </div>
    );
  }
}
