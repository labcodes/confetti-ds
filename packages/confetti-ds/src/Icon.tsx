import React from "react";

import { IconTypes, IconColorTypes } from "./constants";
import {
  AddCircle20Regular,
  ArrowLeft20Regular,
  ArrowRight20Regular,
  ArrowUp20Regular,
  ArrowDown20Regular,
  ArrowSort20Regular,
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
  Cloud20Regular,
  Mic20Regular,
  CloudFlow20Regular,
  Star20Regular,
  Code20Regular
} from "@fluentui/react-icons";
export interface IconProps {
  /** Type of the Icon to be rendered. */
  type: IconTypes;
  /** Color of the rendered Icon. */
  color?: IconColorTypes;
  /** Add a class name to make custom changes */
  className?: string;
}
export default function Icon({ type, color, className }: IconProps) {
  let IconComponent;

  if (type === "Add") IconComponent = Add20Regular;

  if (type === "AddCircle") IconComponent = AddCircle20Regular;

  if (type === "ArrowClockwise" ) IconComponent = ArrowClockwise20Regular;

  if (type === "ArrowDown") IconComponent = ArrowDown20Regular;

  if (type === "ArrowLeft" ) IconComponent = ArrowLeft20Regular;

  if (type === "ArrowMinimize") IconComponent = ArrowMinimize20Regular;

  if (type === "ArrowMaximize") IconComponent = ArrowMaximize20Regular;

  if (type === "ArrowRight" ) IconComponent = ArrowRight20Regular;

  if (type === "ArrowSort" ) IconComponent = ArrowSort20Regular;

  if (type === "ArrowTrending" ) IconComponent = ArrowTrending20Regular;

  if (type === "ArrowUp" ) IconComponent = ArrowUp20Regular;

  if (type === "Backspace" ) IconComponent = Backspace20Regular;

  if (type === "BookOpen") IconComponent = BookOpen20Regular;

  if (type === "Bookmark" ) IconComponent = Bookmark20Regular;

  if (type === "CalendarLtr" ) IconComponent = CalendarLtr20Regular;

  if (type === "CalligraphyPen" ) IconComponent = CalligraphyPen20Regular;

  if (type === "CaretDown") IconComponent = CaretDown20Regular;

  if (type === "CaretLeft" ) IconComponent = CaretLeft20Regular;

  if (type === "CaretRight" ) IconComponent = CaretRight20Regular;

  if (type === "CaretUp") IconComponent = CaretUp20Regular;

  if (type === "ChatEmpty" ) IconComponent = ChatEmpty20Regular;

  if (type === "Checkmark" ) IconComponent = Checkmark20Regular;

  if (type === "ChevronDown") IconComponent = ChevronDown20Regular;

  if (type === "ChevronLeft") IconComponent = ChevronLeft20Regular;

  if (type === "ChevronRight") IconComponent = ChevronRight20Regular;

  if (type === "ChevronUp") IconComponent = ChevronUp20Regular;

  if (type === "Clock" ) IconComponent = Clock20Regular;

  if (type === "Cloud" ) IconComponent = Cloud20Regular;

  if (type === "CloudArrowUp" ) IconComponent = CloudArrowUp20Regular;

  if (type === "CloudFlow" ) IconComponent = CloudFlow20Regular;

  if (type === "Code") IconComponent = Code20Regular;

  if (type === "CodeBlock" ) IconComponent = CodeBlock20Regular;

  if (type === "Cube" ) IconComponent = Cube20Regular;

  if (type === "Delete" ) IconComponent = Delete20Regular;

  if (type === "Dismiss" ) IconComponent = Dismiss20Regular;

  if (type === "DocumentHeart" ) IconComponent = DocumentHeart20Regular;

  if (type === "Edit" ) IconComponent = Edit20Regular;

  if (type === "ErrorCircle" ) IconComponent = ErrorCircle20Regular;

  if (type === "Eye" ) IconComponent = Eye20Regular;

  if (type === "EyeOff" ) IconComponent = EyeOff20Regular;

  if (type === "Filter" ) IconComponent = Filter20Regular;

  if (type === "GridDots" ) IconComponent = GridDots20Regular;

  if (type === "Heart" ) IconComponent = Heart20Regular;

  if (type === "Important" ) IconComponent = Important20Regular;

  if (type === "Javascript" ) IconComponent = Javascript20Regular;

  if (type === "Key" ) IconComponent = Key20Regular;

  if (type === "Lightbulb" ) IconComponent = Lightbulb20Regular;

  if (type === "Link") IconComponent = Link20Regular;

  if (type === "Mic" ) IconComponent = Mic20Regular;

  if (type === "Money" ) IconComponent = Money20Regular;

  if (type === "Navigation") IconComponent = Navigation20Regular;

  if (type === "Open" ) IconComponent = Open20Regular;

  if (type === "Phone" ) IconComponent = Phone20Regular;

  if (type === "ProjectionScreen" ) IconComponent = ProjectionScreen20Regular;

  if (type === "Search" ) IconComponent = Search20Regular;

  if (type === "Settings" ) IconComponent = Settings20Regular;

  if (type === "SignOut" ) IconComponent = SignOut20Regular;

  if (type === "StackStar" ) IconComponent = StackStar20Regular;

  if (type === "Star") IconComponent = Star20Regular;

  if (type === "Subtract" ) IconComponent = Subtract20Regular;

  if (type === "TextFont" ) IconComponent = TextFont20Regular;

  if (type === "Wallet" ) IconComponent = Wallet20Regular;

  if (type === "WindowApps") IconComponent = WindowApps20Regular;

  if (!IconComponent) return null;

  return (
    <span
      className={`lab-icon lab-icon--${type} ${
        color ? `lab-icon--${color}` : ""
      } ${className ? className : ""}`}
    >
      <IconComponent />
    </span>
  );
}
