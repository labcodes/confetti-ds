import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param avatarSrc Source of the avatar to be rendered.
 * @param altText Text that will specify the HTML alt attribute of an <img> element.
 * @param caption Text that will be rendered as the avatar's caption.
 * @returns {JSX.Element}
 * @constructor
 */
export default function UserAvatar({ avatarSrc, altText, caption }) {
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

UserAvatar.propTypes = {
  /** Source of the avatar to be rendered. */
  avatarSrc: PropTypes.string.isRequired,
  /** Text that will specify the HTML alt attribute of an <img> element. */
  altText: PropTypes.string.isRequired,
  /** Text that will be rendered as the avatar's caption. */
  caption: PropTypes.string.isRequired,
};
