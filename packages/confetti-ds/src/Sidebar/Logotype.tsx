import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param logoSrc Source of the logo to be rendered.
 * @param altText Text that will specify the HTML alt attribute of an <img> element.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Logotype({ logoSrc, altText }) {
  return (
    <div className="lab-narrow-sidebar__logo">
      <img src={logoSrc} alt={altText} />
    </div>
  );
}

Logotype.propTypes = {
  /** Source of the logo to be rendered. */
  logoSrc: PropTypes.string.isRequired,
  /** Text that will specify the HTML alt attribute of an <img> element. */
  altText: PropTypes.string.isRequired,
};
