import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param children Components that will be rendered in the Footer.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Footer({ children }) {
  return <div className="lab-narrow-sidebar__footer">{children}</div>;
}

Footer.propTypes = {
  /** Components that will be rendered in the Footer. */
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: undefined,
};
