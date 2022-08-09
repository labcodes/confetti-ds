import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param isOverflowed sets whether the divider has the card's full width.
 * @returns {JSX.Element}
 * @constructor
 */

export default function CardDivider({ isOverflowed }) {
  return (
    <hr
      className={`lab-card-divider
          ${isOverflowed ? " lab-card-divider--overflowed" : ""}
        `}
    />
  );
}

CardDivider.propTypes = {
  /** Sets whether the divider has the card's full width. */
  isOverflowed: PropTypes.bool,
};

CardDivider.defaultProps = {
  isOverflowed: false,
};
