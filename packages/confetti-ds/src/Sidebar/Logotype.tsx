import React from "react";

interface LogotypeProps {
  /** Source of the logo to be rendered. */
  logoSrc: string,
  /** Text that will specify the HTML alt attribute of an <img> element. */
  altText: string,
};

export default function Logotype({ logoSrc, altText }: LogotypeProps) {
  return (
    <div className="lab-narrow-sidebar__logo">
      <img src={logoSrc} alt={altText} />
    </div>
  );
}
