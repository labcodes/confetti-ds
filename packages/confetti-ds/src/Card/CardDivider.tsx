import React from "react";

interface CardDividerProps {
  /** Sets whether the divider has the card's full width. */
  isOverflowed?: boolean
}

export default function CardDivider({ isOverflowed = false }) {
  return (
    <hr
      className={`lab-card-divider
          ${isOverflowed ? " lab-card-divider--overflowed" : ""}
        `}
    />
  );
}
