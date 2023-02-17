import React, { ReactNode } from "react";

export const NavbarWithDividersContext = React.createContext(false);

export interface NarrowSidebarProps {
  /** Components that will be rendered in the NarrowSidebar (Header, Item, Logotype, etc). */
  children: ReactNode;
  /** In mobile environment, defines if the Sidebar is open. */
  isOpenOnMobile?: boolean;
  /** Defines if the rendered Sidebar has a vivid style. */
  isVivid?: boolean;
  /** Defines if the Sidebar has dividers. */
  withDividers?: boolean;
}

export default function NarrowSidebar({
  children,
  isOpenOnMobile = false,
  isVivid = false,
  withDividers = false,
}: NarrowSidebarProps) {
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
