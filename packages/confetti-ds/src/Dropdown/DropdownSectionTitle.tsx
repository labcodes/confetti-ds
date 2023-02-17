import React from "react";

export interface DropdownSectionTitleProps {
  /** This is DropdownSectionTitle's title */
  text: React.ReactNode;
  /** This is DropdownSectionTitle's color. The color is inherit from dropdown color  */
  color?: "white" | "mineral" | "teal" | "purple";
}
export default function DropdownSectionTitle({
  text,
  color = "teal",
}: DropdownSectionTitleProps) {
  return (
    <span
      className={`lab-dropdown__section-title lab-dropdown__section-title--color-${color}`}
    >
      {text}
    </span>
  );
}
