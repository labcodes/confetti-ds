import React from "react";
import PropTypes from "prop-types";

import { ICON_TYPES } from "./constants";

export default class Icon extends React.Component {
  static propTypes = {
    /** Type of the Icon to be rendered. */
    type: PropTypes.oneOf(ICON_TYPES).isRequired,
    /** Color of the rendered Icon. */
    color: PropTypes.oneOf([
      "white",
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
    /** Size of the rendered Icon, petit = 16px, small = 20px. If omitted will render at 24px. */
    size: PropTypes.oneOf(["small", "petit"]),
    /** Add a class name to make custom changes */
    className: PropTypes.string,
  };

  static defaultProps = {
    color: undefined,
    size: undefined,
    className: undefined,
  };

  render() {
    const { type, color, size, className } = this.props;
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
}
