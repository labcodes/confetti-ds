import React from "react";

export interface BadgeProps {
  /** HTML type of the Badge. */
  type: "floating-add" | "harvest" | "meta" | "ponto" | "star";
  /** Defines the Badge's wrapper background color. */
  wrapperColor:
    | "white"
    | "black"
    | "black-75"
    | "mineral-10"
    | "mineral-20"
    | "mineral-30"
    | "mineral-40"
    | "mineral-60"
    | "mineral-70"
    | "mineral-80"
    | "mineral-90"
    | "teal-40"
    | "teal-60"
    | "teal-70"
    | "purple-40"
    | "purple-60"
    | "purple-70";
  /** Sets Badge's colors (mostly background colors) based on the chosen palette.  */
  color:
    | "white"
    | "black"
    | "black-75"
    | "mineral-10"
    | "mineral-20"
    | "mineral-30"
    | "mineral-40"
    | "mineral-60"
    | "mineral-70"
    | "mineral-80"
    | "mineral-90"
    | "teal-40"
    | "teal-60"
    | "teal-70"
    | "purple-40"
    | "purple-60"
    | "purple-70";
  /** Add a class name to make custom changes */
  className: string;
}

export default function Badge({
  type,
  wrapperColor,
  color,
  className,
}: BadgeProps) {
  return (
    <div className={`lab-badge__wrapper lab-badge__wrapper--${wrapperColor}`}>
      <span
        className={
          `lab-badge lab-badge--${color} lab-badge--${type}` +
          `${className ? ` lab-badge--${className}` : ""}`
        }
      />
    </div>
  );
}
