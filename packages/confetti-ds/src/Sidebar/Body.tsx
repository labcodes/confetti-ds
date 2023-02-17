import React, { ReactNode } from "react";

import { NavbarWithDividersContext } from "./NarrowSidebar";

export interface NavbarBodyProps {
  children?: ReactNode;
}

export default function Body({ children }: NavbarBodyProps) {
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
