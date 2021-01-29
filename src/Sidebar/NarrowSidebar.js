import React from "react";
import PropTypes from "prop-types";

export const NavbarWithDividersContext = React.createContext(false);
export default class NarrowSidebar extends React.Component {
  static propTypes = {
    /** Components that will be rendered in the NarrowSidebar (Header, Item, Logotype, etc). */
    children: PropTypes.node.isRequired,
    /** In mobile environment, defines if the Sidebar is open. */
    isOpenOnMobile: PropTypes.bool,
    /** Defines if the rendered Sidebar has a vivid style. */
    isVivid: PropTypes.bool,
    /** Defines if the Sidebar has dividers. */
    withDividers: PropTypes.bool,
  };

  static defaultProps = {
    isVivid: false,
    isOpenOnMobile: false,
    withDividers: false,
  };

  render() {
    const { children, isOpenOnMobile, isVivid, withDividers } = this.props;

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
}
