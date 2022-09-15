import React from "react";
import PropTypes from "prop-types";

export const NavbarWithDividersContext = React.createContext(false);

/**
 *
 * @param children Components that will be rendered in the NarrowSidebar (Header, Item, Logotype, etc).
 * @param isOpenOnMobile In mobile environment, defines if the Sidebar is open.
 * @param isVivid Defines if the rendered Sidebar has a vivid style.
 * @param withDividers Defines if the Sidebar has dividers.
 * @returns {JSX.Element}
 * @constructor
 */
export default function NarrowSidebar({
  children,
  isOpenOnMobile,
  isVivid,
  withDividers,
}) {
  return (
    <NavbarWithDividersContext.Provider value={withDividers}>
      <div
        className={`lab-narrow-sidebar
            ${isVivid ? " lab-narrow-sidebar--vivid" : ""}
            ${withDividers ? " lab-narrow-sidebar--with-dividers" : ""}
            ${isOpenOnMobile ? " lab-narrow-sidebar--open-on-mobile" : ""}
            `}
      >
        {children}
      </div>
    </NavbarWithDividersContext.Provider>
  );
}

NarrowSidebar.propTypes = {
  /** Components that will be rendered in the NarrowSidebar (Header, Item, Logotype, etc). */
  children: PropTypes.node.isRequired,
  /** In mobile environment, defines if the Sidebar is open. */
  isOpenOnMobile: PropTypes.bool,
  /** Defines if the rendered Sidebar has a vivid style. */
  isVivid: PropTypes.bool,
  /** Defines if the Sidebar has dividers. */
  withDividers: PropTypes.bool,
};

NarrowSidebar.defaultProps = {
  isVivid: false,
  isOpenOnMobile: false,
  withDividers: false,
};
