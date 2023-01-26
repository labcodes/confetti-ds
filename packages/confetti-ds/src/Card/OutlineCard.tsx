import React from "react";

import { CardContext } from "./contexts";

interface OutlineCardProps {
  /** Components that will be rendered in the Card (CardImage, CardHeader, CardAction, etc.) */
  children: React.ReactNode;
  /** Sets Card's colors (mostly background colors) based on the chosen palette.  */
  color: "mineral" | "teal" | "purple";
  /** Sets the skin of the rendered Filled Card. */
  skin: "pale" | "vivid";
  /** Sets horizontal layout. It changes the position of CardImage. */
  isHorizontal?: boolean;
  /** Reduces paddings and margins on Card layout. */
  isCompact?: boolean;
  /** Add a class name to make custom changes */
  className?: string;
}

export default function OutlineCard({
  children,
  color,
  skin,
  isHorizontal = false,
  isCompact = false,
  className = undefined,
}: OutlineCardProps) {
  return (
    <CardContext.Provider value={{ color, skin, cardType: "outline" }}>
      <article
        className={`lab-card lab-card--outline lab-card--${color} lab-card--${skin}
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
