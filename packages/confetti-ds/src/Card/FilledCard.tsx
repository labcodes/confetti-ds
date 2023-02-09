import React from "react";

import { CardContext } from "./contexts";

interface FilledCardProps {
  /** Components that will be rendered in the Filled Card (CardImage, CardHeader, CardAction, etc.) */
  children: React.ReactNode;
  /** Sets Filled Card's colors (mostly background colors) based on the chosen palette.  */
  color: "white" | "mineral" | "teal" | "purple";
  /** Sets the skin of the rendered Filled Card. */
  skin: "pale" | "vivid";
  /** Sets horizontal layout. It changes the position of CardImage. */
  isHorizontal?: boolean;
  /** Reduces paddings and margins on Card layout. */
  isCompact?: boolean;
  /** Add a class name to make custom changes */
  className?: string;
}

export default function FilledCard({
  children,
  color,
  skin,
  isHorizontal = false,
  isCompact = false,
  className,
}: FilledCardProps) {
  return (
    <CardContext.Provider value={{ color, skin, cardType: "filled" }}>
      <article
        className={`lab-card lab-card--filled lab-card--${color} lab-card--${skin}
      ${isCompact ? " lab-card--compact" : ""}
      ${isHorizontal ? " lab-card--horizontal" : ""}
      ${className ? ` ${className}` : ""}
    `}
      >
        {children}
      </article>
    </CardContext.Provider>
  );
}
