import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param children Components that will be rendered in the Header.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header({ children }) {
  return <div className="lab-narrow-sidebar__header">{children}</div>;
}

Header.propTypes = {
  /** Components that will be rendered in the Header. */
  children: PropTypes.node,
};

Header.defaultProps = {
  children: undefined,
};
