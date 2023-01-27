import React, { ReactNode } from "react";

export default function Header({ children }: { children?: ReactNode }) {
  return <div className="lab-narrow-sidebar__header">{children}</div>;
}
