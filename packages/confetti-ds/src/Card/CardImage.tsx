import React from "react";
import PropTypes from "prop-types";

/**
 * @param src specifies the path to the image.
 * @param alt specifies an alternate text for the image if the image cannot be displayed for some reason.
 * @param isOverflowed  sets whether the image has Card's full width.
 * @returns {JSX.Element}
 * @constructor
 */

export default function CardImage({ src, alt, isOverflowed }) {
  return (
    <img
      className={`lab-card-image${
        isOverflowed ? " lab-card-image--overflowed" : ""
      }`}
      src={src}
      alt={alt}
    />
  );
}

CardImage.propTypes = {
  /** Specifies the path to the image. */
  src: PropTypes.string.isRequired,
  /** Specifies an alternate text for the image if the image cannot be displayed for some reason. */
  alt: PropTypes.string.isRequired,
  /** Sets whether the image has Card's full width. */
  isOverflowed: PropTypes.bool,
};

CardImage.defaultProps = {
  isOverflowed: false,
};