import React from "react";

import { IconTypes, IconColorTypes } from "./constants";
import {
  ArrowLeft20Regular,
  ArrowRight20Regular,
  ArrowUp20Regular,
  ArrowDown20Regular,
  ArrowSort20Regular,
  Star20Regular,
  BookOpen20Regular,
  CloudArrowUp20Regular,
  Key20Regular,
  DocumentHeart20Regular,
  TextFont20Regular,
  ChatEmpty20Regular,
  CalligraphyPen20Regular,
  CaretLeft20Regular,
  CaretRight20Regular,
  CaretUp20Regular,
  CaretDown20Regular,
  ChevronUp20Regular,
  ChevronDown20Regular,
  ChevronRight20Regular,
  ChevronLeft20Regular,
  ArrowClockwise20Regular,
  Heart20Regular,
  Javascript20Regular,
  Clock20Regular,
  Dismiss20Regular,
  Add20Regular,
  Subtract20Regular,
  Checkmark20Regular,
  ArrowMinimize20Regular,
  ArrowMaximize20Regular,
  Backspace20Regular,
  Important20Regular,
  Edit20Regular,
  ArrowTrending20Regular,
  Lightbulb20Regular,
  ProjectionScreen20Regular,
  Eye20Regular,
  EyeOff20Regular,
  Search20Regular,
  Delete20Regular,
  Navigation20Regular,
  Link20Regular,
  Filter20Regular,
  Settings20Regular,
  Bookmark20Regular,
  WindowApps20Regular,
  Cube20Regular,
  CodeBlock20Regular,
  ErrorCircle20Regular,
  SignOut20Regular,
  StackStar20Regular,
  CalendarLtr20Regular,
  Money20Regular,
  Open20Regular,
  GridDots20Regular,
  Phone20Regular,
  Wallet20Regular,
  CubeRotate20Regular,
  Cloud20Regular,
  Mic20Regular,
  CloudFlow20Regular,
} from "@fluentui/react-icons";
export interface IconProps {
  /** Type of the Icon to be rendered. */
  type: IconTypes;
  /** Add a class name to make custom changes */
  className?: string;
}
export default function Icon({ type, className }: IconProps) {
  let IconComponent;

  if (type === "arrow-left") IconComponent = ArrowLeft20Regular;

  if (type === "arrow-right") IconComponent = ArrowRight20Regular;

  if (type === "arrow-up") IconComponent = ArrowUp20Regular;

  if (type === "arrow-down") IconComponent = ArrowDown20Regular;

  if (type === "sort") IconComponent = ArrowSort20Regular;

  if (type === "star") IconComponent = Star20Regular;

  if (type === "book-open") IconComponent = BookOpen20Regular;

  if (type === "upload") IconComponent = CloudArrowUp20Regular;

  if (type === "key") IconComponent = Key20Regular;

  if (type === "sheet") IconComponent = DocumentHeart20Regular;

  if (type === "type") IconComponent = TextFont20Regular;

  if (type === "message") IconComponent = ChatEmpty20Regular;

  if (type === "pen") IconComponent = CalligraphyPen20Regular;

  if (type === "select-right") IconComponent = CaretRight20Regular;

  if (type === "select-left") IconComponent = CaretLeft20Regular;

  if (type === "select-up") IconComponent = CaretUp20Regular;

  if (type === "select-down") IconComponent = CaretDown20Regular;

  if (type === "chevron-up") IconComponent = ChevronUp20Regular;

  if (type === "chevron-down") IconComponent = ChevronDown20Regular;

  if (type === "chevron-left") IconComponent = ChevronLeft20Regular;

  if (type === "chevron-right") IconComponent = ChevronRight20Regular;

  if (type === "reload") IconComponent = ArrowClockwise20Regular;

  if (type === "heart") IconComponent = Heart20Regular;

  if (type === "js") IconComponent = Javascript20Regular;

  if (type === "code") IconComponent = CodeBlock20Regular;

  if (type === "clock") IconComponent = Clock20Regular;

  if (type === "dismiss") IconComponent = Dismiss20Regular;

  if (type === "plus") IconComponent = Add20Regular;

  if (type === "minus") IconComponent = Subtract20Regular;

  if (type === "confirm") IconComponent = Checkmark20Regular;

  if (type === "menu-collapse") IconComponent = ArrowMinimize20Regular;

  if (type === "menu-expand") IconComponent = ArrowMaximize20Regular;

  if (type === "delete") IconComponent = Backspace20Regular;

  if (type === "exclamation") IconComponent = Important20Regular;

  if (type === "edit") IconComponent = Edit20Regular;

  if (type === "growth") IconComponent = ArrowTrending20Regular;

  if (type === "lamp") IconComponent = Lightbulb20Regular;

  if (type === "presentation") IconComponent = ProjectionScreen20Regular;

  if (type === "add-circle") IconComponent = Add20Regular;

  if (type === "eye-opened") IconComponent = Eye20Regular;

  if (type === "eye-closed") IconComponent = EyeOff20Regular;

  if (type === "lupe") IconComponent = Search20Regular;

  if (type === "trash") IconComponent = Delete20Regular;

  if (type === "menu-default") IconComponent = Navigation20Regular;

  if (type === "link") IconComponent = Link20Regular;

  if (type === "filter") IconComponent = Filter20Regular;

  if (type === "gear") IconComponent = Settings20Regular;

  if (type === "bookmark") IconComponent = Bookmark20Regular;

  if (type === "web-app") IconComponent = WindowApps20Regular;

  if (type === "pack") IconComponent = Cube20Regular;

  if (type === "chevrons") IconComponent = CodeBlock20Regular;

  if (type === "star") IconComponent = ErrorCircle20Regular;

  if (type === "logout") IconComponent = SignOut20Regular;

  if (type === "track") IconComponent = StackStar20Regular;

  if (type === "calendar") IconComponent = CalendarLtr20Regular;

  if (type === "coin") IconComponent = Money20Regular;

  if (type === "external") IconComponent = Open20Regular;

  if (type === "workspace") IconComponent = GridDots20Regular;

  if (type === "phone") IconComponent = Phone20Regular;

  if (type === "wallet") IconComponent = Wallet20Regular;

  if (type === "continuous-delivery") IconComponent = CubeRotate20Regular;

  if (type === "cloud") IconComponent = Cloud20Regular;

  if (type === "microphone") IconComponent = Mic20Regular;

  if (type === "api") IconComponent = CloudFlow20Regular;

  if (!IconComponent) return null;

  return (
    <span>
      <IconComponent
        className={
          `lab-icon lab-icon--${type}` + `${className ? ` ${className}` : ""}`
        }
      />
    </span>
  );
}
