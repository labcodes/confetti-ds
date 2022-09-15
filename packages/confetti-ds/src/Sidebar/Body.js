import React from "react";
import PropTypes from "prop-types";

import { NavbarWithDividersContext } from "./NarrowSidebar";

/**
 *
 * @param children
 * @returns {JSX.Element} Components that will be rendered in the Body.
 * @constructor
 */
export default function Body({ children }) {
  return (
    <NavbarWithDividersContext.Consumer>
      {(withDividers) => (
        <nav
          className={
            `lab-narrow-sidebar__body` +
            `${withDividers ? ` lab-narrow-sidebar__body--with-scroll` : ` ""`}`
          }
        >
          {children}
        </nav>
      )}
    </NavbarWithDividersContext.Consumer>
  );
}

Body.propTypes = {
  /** Components that will be rendered in the Body. */
  children: PropTypes.node,
};

Body.defaultProps = {
  children: undefined,
};
