import React from "react";

import { IconTypes, IconColorTypes } from "./constants";
import {
  ArrowLeft20Regular,
  Delete20Regular,
  ArrowMinimize20Regular,
  StackStar20Regular,
} from "@fluentui/react-icons";
export interface IconProps {
  /** Type of the Icon to be rendered. */
  type: IconTypes;
  /** Color of the rendered Icon. */
  color?: IconColorTypes;
  // TODO: vai de base tb
  /** Size of the rendered Icon, petit = 16px, small = 20px. If omitted will render at 24px. */
  size?: "small" | "petit";
  /** Add a class name to make custom changes */
  className?: string;
}
export default function Icon({ type, color, size, className }: IconProps) {
  let IconComponent;

  if (type === "arrow-left") IconComponent = ArrowLeft20Regular;

  if (type === "wallet") IconComponent = Delete20Regular;

  if (type === "menu-collapse") IconComponent = ArrowMinimize20Regular;

  if (type === "track") IconComponent = StackStar20Regular;

  if (!IconComponent) return null;

  return (
    <span className={`${color ? ` lab-icon--${color}` : ""}`}>
      <IconComponent />
    </span>
  );
}
