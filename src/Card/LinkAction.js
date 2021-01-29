import React from "react";
import PropTypes from "prop-types";

export default class LinkAction extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    href: "#",
    size: "normal",
    onClick: () => {},
    openNewTab: false,
  };

  render() {
    const { text, size, href, onClick, openNewTab } = this.props;

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
}
