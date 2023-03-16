import React from "react";

import { IconTypes, IconColorTypes } from "./constants";
import {
  ArrowLeft20Filled,
  ArrowRight20Filled,
  ArrowUp20Filled,
  ArrowDown20Filled,
  ArrowSort20Filled,
  Star20Filled,
  BookOpen20Filled,
  CloudArrowUp20Filled,
  Key20Filled,
  DocumentHeart20Filled,
  TextFont20Filled,
  ChatEmpty20Filled,
  CalligraphyPen20Filled,
  CaretLeft20Filled,
  CaretRight20Filled,
  CaretUp20Filled,
  CaretDown20Filled,
  ChevronUp20Filled,
  ChevronDown20Filled,
  ChevronRight20Filled,
  ChevronLeft20Filled,
  ArrowClockwise20Filled,
  Heart20Filled,
  Javascript20Filled,
  Code20Filled,
  Clock20Filled,
  Dismiss20Filled,
  Add20Filled,
  Subtract20Filled,
  Checkmark20Filled,
  ArrowMinimize20Filled,
  ArrowMaximize20Filled,
  Backspace20Filled,
  Important20Filled,
  Edit20Filled,
  ArrowTrending20Filled,
  Lightbulb20Filled,
  ProjectionScreen20Filled,
  AddCircle20Filled,
  Eye20Filled,
  EyeOff20Filled,
  Search20Filled,
  SearchInfo20Filled,
  Delete20Filled,
  Navigation20Filled,
  Link20Filled,
  Filter20Filled,
  Settings20Filled,
  Bookmark20Filled,
  WindowApps20Filled,
  Cube20Filled,
  CodeBlock20Filled,
  ErrorCircle20Filled,
  SignOut20Filled,
  StackStar20Filled,
  CalendarLtr20Filled,
  Money20Filled,
  Open20Filled,
  GridDots20Filled,
  Phone20Filled,
  Wallet20Filled,
  CubeRotate20Filled,
  Cloud20Filled,
  Mic20Filled,
  CloudFlow20Filled
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

  if (type === "arrow-left") IconComponent = ArrowLeft20Filled;

  if (type === "arrow-right") IconComponent = ArrowRight20Filled;

  if (type === "arrow-up") IconComponent = ArrowUp20Filled;

  if (type === "arrow-down") IconComponent = ArrowDown20Filled;

  if (type === "sort") IconComponent = ArrowSort20Filled;

  if (type === "star") IconComponent = Star20Filled;

  if (type === "book-open") IconComponent = BookOpen20Filled;

  if (type === "upload") IconComponent = CloudArrowUp20Filled;

  if (type === "key") IconComponent = Key20Filled;

  if (type === "sheet") IconComponent = DocumentHeart20Filled;

  if (type === "type") IconComponent = TextFont20Filled;

  if (type === "message") IconComponent = ChatEmpty20Filled;

  if (type === "pen") IconComponent = CalligraphyPen20Filled;

  if (type === "select-right") IconComponent = CaretRight20Filled;

  if (type === "select-left") IconComponent = CaretLeft20Filled;

  if (type === "select-up") IconComponent = CaretUp20Filled;

  if (type === "select-down") IconComponent = CaretDown20Filled;

  if (type === "chevron-up") IconComponent = ChevronUp20Filled;

  if (type === "chevron-down") IconComponent = ChevronDown20Filled;

  if (type === "chevron-left") IconComponent = ChevronLeft20Filled;

  if (type === "chevron-right") IconComponent = ChevronRight20Filled;

  if (type === "reload") IconComponent = ArrowClockwise20Filled;

  if (type === "heart") IconComponent = Heart20Filled;

  if (type === "js") IconComponent = Javascript20Filled;

  if (type === "code") IconComponent = CodeBlock20Filled;

  if (type === "clock") IconComponent = Clock20Filled;

  if (type === "dismiss") IconComponent = Dismiss20Filled;

  if (type === "plus") IconComponent = Add20Filled;

  if (type === "minus") IconComponent = Subtract20Filled;

  if (type === "confirm") IconComponent = Checkmark20Filled;

  if (type === "menu-collapse") IconComponent = ArrowMinimize20Filled;

  if (type === "menu-expand") IconComponent = ArrowMaximize20Filled;

  if (type === "delete") IconComponent = Backspace20Filled;

  if (type === "exclamation") IconComponent = Important20Filled;

  if (type === "edit") IconComponent = Edit20Filled;

  if (type === "growth") IconComponent = ArrowTrending20Filled;

  if (type === "lamp") IconComponent = Lightbulb20Filled;

  if (type === "presentation") IconComponent = ProjectionScreen20Filled;

  if (type === "add-circle") IconComponent = Add20Filled;

  if (type === "eye-opened") IconComponent = Eye20Filled;

  if (type === "eye-closed") IconComponent = EyeOff20Filled;

  if (type === "lupe") IconComponent = Search20Filled;

  if (type === "trash") IconComponent = Delete20Filled;

  if (type === "menu-default") IconComponent = Navigation20Filled;

  if (type === "link") IconComponent = Link20Filled;

  if (type === "filter") IconComponent = Filter20Filled;

  if (type === "gear") IconComponent = Settings20Filled;

  if (type === "bookmark") IconComponent = Bookmark20Filled;

  if (type === "web-app") IconComponent = WindowApps20Filled;

  if (type === "pack") IconComponent = Cube20Filled;

  if (type === "chevrons") IconComponent = CodeBlock20Filled;

  if (type === "star") IconComponent = ErrorCircle20Filled;

  if (type === "logout") IconComponent = SignOut20Filled;

  if (type === "track") IconComponent = StackStar20Filled;

  if (type === "calendar") IconComponent = CalendarLtr20Filled;

  if (type === "coin") IconComponent = Money20Filled;

  if (type === "external") IconComponent = Open20Filled;

  if (type === "workspace") IconComponent = GridDots20Filled;

  if (type === "phone") IconComponent = Phone20Filled;

  if (type === "wallet") IconComponent = Wallet20Filled;

  if (type === "continuous-delivery") IconComponent = CubeRotate20Filled;

  if (type === "cloud") IconComponent = Cloud20Filled;

  if (type === "microphone") IconComponent = Mic20Filled;

  if (type === "api") IconComponent = CloudFlow20Filled;

  if (!IconComponent) return null;

  return (
    <span className={`${color ? ` lab-icon--${color}` : ""}`}>
      <IconComponent />
    </span>
  );
}
