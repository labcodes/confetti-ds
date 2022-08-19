import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param text sets card's link text.
 * @param size sets link's font size. Small = 16px, Normal = 18px, Large = 20px.
 * @param href sets link's destination.
 * @param onClick action to be executed when the link is clicked.
 * @param openNewTab sets whether the link will open on the same or on another tab.
 * @returns {JSX.Element}
 * @constructor
 */

export default function LinkAction({ text, size, href, onClick, openNewTab }) {
  return (
    <section className={`lab-card-link-action lab-card-link-action--${size}`}>
      <a
        href={href}
        onClick={onClick}
        {...(openNewTab
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {text}
      </a>
    </section>
  );
}

LinkAction.propTypes = {
  /** Sets card's link text. */
  text: PropTypes.string.isRequired,
  /** Sets link's font size. Small = 16px, Normal = 18px, Large = 20px. */
  size: PropTypes.oneOf(["normal", "small", "large"]),
  /** Sets link's destination. */
  href: PropTypes.string,
  /** Action to be executed when the link is clicked. */
  onClick: PropTypes.func,
  /** Sets whether the link will open on the same or on another tab. */
  openNewTab: PropTypes.bool,
};

LinkAction.defaultProps = {
  href: "#",
  size: "normal",
  onClick: () => {},
  openNewTab: false,
};
