import React from "react";
import PropTypes from "prop-types";

export default function Badge({ type, color, wrapperColor, className }) {
  return (
    <div className={`lab-badge__wrapper lab-badge__wrapper--${wrapperColor}`}>
      <span
        className={
          `lab-badge lab-badge--${color} lab-badge--${type}` +
          `${className ? ` lab-badge--${className}` : ""}`
        }
      />
    </div>
  );
}

Badge.propTypes = {
  /** Type of the Badge to be rendered. */
  type: PropTypes.oneOf(["floating-add", "harvest", "meta", "ponto", "star"])
    .isRequired,
  /** Color of the Badge's inner icon. */
  color: PropTypes.oneOf([
    "white",
    "black",
    "black-75",
    "mineral-10",
    "mineral-20",
    "mineral-30",
    "mineral-40",
    "mineral-60",
    "mineral-70",
    "mineral-80",
    "mineral-90",
    "teal-40",
    "teal-60",
    "teal-70",
    "purple-40",
    "purple-60",
    "purple-70",
  ]),
  /** Defines the Badge's wrapper background color. */
  wrapperColor: PropTypes.oneOf([
    "white",
    "black",
    "black-75",
    "mineral-10",
    "mineral-20",
    "mineral-30",
    "mineral-40",
    "mineral-60",
    "mineral-70",
    "mineral-80",
    "mineral-90",
    "teal-40",
    "teal-60",
    "teal-70",
    "purple-40",
    "purple-60",
    "purple-70",
  ]),
  /** Add a class name to make custom changes */
  className: PropTypes.string,
};

Badge.defaultProps = {
  className: undefined,
  color: undefined,
  wrapperColor: undefined,
};
