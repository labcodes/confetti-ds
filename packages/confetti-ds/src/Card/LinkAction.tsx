import React, { SyntheticEvent } from "react";

interface LinkActionProps {
  /** Sets card's link text. */
  text: string;
  /** Sets link's destination. */
  href: string;
  /** Sets link's font size. Small = 16px, Normal = 18px, Large = 20px. */
  size?: "normal" | "small" | "large";
  /** Action to be executed when the link is clicked. */
  onClick?: (event: SyntheticEvent) => any;
  /** Sets whether the link will open on the same or on another tab. */
  openNewTab?: boolean;
}
export default function LinkAction({
  text,
  href,
  size = "normal",
  onClick = () => {},
  openNewTab = false,
}: LinkActionProps) {
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
