import React from "react";

export interface NavbarLogotypeProps {
  /** Source of the logo to be rendered. */
  logoSrc: string;
  /** Text that will specify the HTML alt attribute of an <img> element. */
  altText: string;
}

export default function Logotype({ logoSrc, altText }: NavbarLogotypeProps) {
  return (
    <div className="lab-narrow-sidebar__logo">
      <img src={logoSrc} alt={altText} />
    </div>
  );
}
