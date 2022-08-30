import React from "react";
import PropTypes from "prop-types";

import { ICON_TYPES, ICON_COLORS } from "./constants";

export default function Icon({ type, color, size, className }) {
  return (
    <span
      className={
        `lab-icon lab-icon--${type}` +
        `${color ? ` lab-icon--${color}` : ""}` +
        `${size ? ` lab-icon--${size}` : ""}` +
        `${className ? ` ${className}` : ""}`
      }
    />
  );
}

Icon.propTypes = {
  /** Type of the Icon to be rendered. */
  type: PropTypes.oneOf(ICON_TYPES).isRequired,
  /** Color of the rendered Icon. */
  color: PropTypes.oneOf(ICON_COLORS),
  /** Size of the rendered Icon, petit = 16px, small = 20px. If omitted will render at 24px. */
  size: PropTypes.oneOf(["small", "petit"]),
  /** Add a class name to make custom changes */
  className: PropTypes.string,
};

Icon.defaultProps = {
  color: undefined,
  size: undefined,
  className: undefined,
};
