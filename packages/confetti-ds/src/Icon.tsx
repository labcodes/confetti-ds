import React from "react";
import PropTypes from "prop-types";

import {
  IconTypes,
  ICON_TYPES,
  IconColorTypes,
  ICON_COLORS,
} from "./constants";

interface IconProps {
  /** Type of the Icon to be rendered. */
  type?: IconTypes;
  /** Color of the rendered Icon. */
  color: IconColorTypes;
  /** Size of the rendered Icon, petit = 16px, small = 20px. If omitted will render at 24px. */
  size: "small" | "petit";
  /** Add a class name to make custom changes */
  className: string;
}
export default function Icon({ type, color, size, className }: IconProps) {
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

Icon.defaultProps = {
  color: undefined,
  size: undefined,
  className: undefined,
};
