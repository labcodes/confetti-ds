import React, { ReactNode } from "react";

export interface NavbarHeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: NavbarHeaderProps) {
  return <div className="lab-narrow-sidebar__header">{children}</div>;
}
