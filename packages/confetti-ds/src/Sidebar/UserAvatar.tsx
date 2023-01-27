import React from "react";

interface UserAvatarProps {
  /** Source of the avatar to be rendered. */
  avatarSrc: string,
  /** Text that will specify the HTML alt attribute of an <img> element. */
  altText: string,
  /** Text that will be rendered as the avatar's caption. */
  caption: string,
};

export default function UserAvatar({ avatarSrc, altText, caption }: UserAvatarProps) {
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
