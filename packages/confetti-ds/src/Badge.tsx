import React from "react";

interface BadgeProps {
  type: "floating-add" | "harvest" | "meta" | "ponto" | "star",
  wrapperColor: "white" |
    "black" |
    "black-75" |
    "mineral-10" |
    "mineral-20" |
    "mineral-30" |
    "mineral-40" |
    "mineral-60" |
    "mineral-70" |
    "mineral-80" |
    "mineral-90" |
    "teal-40" |
    "teal-60" |
    "teal-70" |
    "purple-40" |
    "purple-60" |
    "purple-70",
  color: "white" |
    "black" |
    "black-75" |
    "mineral-10" |
    "mineral-20" |
    "mineral-30" |
    "mineral-40" |
    "mineral-60" |
    "mineral-70" |
    "mineral-80" |
    "mineral-90" |
    "teal-40" |
    "teal-60" |
    "teal-70" |
    "purple-40" |
    "purple-60" |
    "purple-70",
  className: string
}

export default function Badge({
  type,
  color,
  wrapperColor,
  className
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
