import React, { ReactNode } from "react";

export default function Footer({ children }: { children?: ReactNode }) {
  return <div className="lab-narrow-sidebar__footer">{children}</div>;
}
