import React from "react";
import PropTypes from "prop-types";

export default function DropdownSectionTitle({ text, color }) {
  return (
    <span
      className={`lab-dropdown__section-title lab-dropdown__section-title--color-${color}`}
    >
      {text}
    </span>
  );
}

DropdownSectionTitle.propTypes = {
  /** This is DropdownSectionTitle's title */
  text: PropTypes.node.isRequired,
  /** This is DropdownSectionTitle's color. The color is inherit from dropdown color  */
  color: PropTypes.string,
};

DropdownSectionTitle.defaultProps = {
  color: "teal",
};
