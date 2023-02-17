import React, { ReactNode } from "react";

export interface NavbarFooterProps {
  children?: ReactNode;
}

export default function Footer({ children }: NavbarFooterProps) {
  return <div className="lab-narrow-sidebar__footer">{children}</div>;
}
