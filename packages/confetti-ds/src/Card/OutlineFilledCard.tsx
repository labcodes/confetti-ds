import React from "react";

import { CardContext } from "./contexts";
import CardHeader from "./CardHeader";

interface OutlineFilledCardProps {
  /** Components that will be rendered in the Card (CardImage, CardHeader, CardAction, etc.) */
  children: React.ReactNode;
  /** Sets Card's colors (mostly background colors) based on the chosen palette.  */
  color: "mineral" | "teal" | "purple";
  /** Sets horizontal layout. It changes the position of CardImage. */
  isHorizontal?: boolean;
  /** Reduces paddings and margins on Card layout. */
  isCompact?: boolean;
  /** Add a class name to make custom changes */
  className?: string;
}

export default function OutlineFilledCard({
  children,
  color,
  isHorizontal = false,
  isCompact = false,
  className = undefined,
}: OutlineFilledCardProps) {
  return (
    <CardContext.Provider value={{ color, cardType: "outlineFilled" }}>
      <article
        className={`lab-card lab-card--outline lab-card--filled lab-card--${color}
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
