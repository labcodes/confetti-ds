export const ICON_TYPES = [
  // ArrowLeft
  "arrow-left",
  // ArrowRight
  "arrow-right",
  // ArrowUp
  "arrow-up",
  // ArrowDown
  "arrow-down",
  // ArrowSort
  "sort",
  // Star
  "star",
  // BookOpen
  "book-open",
  // CloudArrowUp
  "upload",
  // Key
  "key",
  //DocumentHeart
  "sheet",
  //TextFont
  "type",
  //ChatEmpty
  "message",
  //CalligraphyPen
  "pen",
  //CaretRight
  "select-right",
  //CaretLeft
  "select-left",
  //CaretUp
  "select-up",
  //CaretDown
  "select-down",
  //ChevronUp
  "chevron-up",
  //ChevronDown
  "chevron-down",
  //ChevronLeft
  "chevron-left",
  //ChevronRight
  "chevron-right",
  //ArrowClockwise
  "reload",
  // Heart
  "heart",
  // JavaScript
  "js",
  //CodeBlock
  "code",
  //Clock
  "clock",
  // Dismiss
  "dismiss",
  // Add
  "plus",
  // Minus
  "minus",
  // Checkmark
  "confirm",
  // ArrowMinimize
  "menu-collapse",
  // ArrowMaximize
  "menu-expand",
  // Backspace
  "delete",
  // Important,
  "exclamation",
  // Edit
  "edit",
  // ArrowTrending
  "growth",
  //Lightbulb
  "lamp",
  // ProjectionScreen
  "presentation",
  // Add
  "add-circle",
  // Eye
  "eye-opened",
  // EyeOff
  "eye-closed",
  // Search
  "lupe",
  // Delete
  "trash",
  // Navigation
  "menu-default",
  // Link
  "link",
  // Filter
  "filter",
  // Settings
  "gear",
  // Bookmark
  "bookmark",
  // WindowApps
  "web-app",
  // Cube
  "pack",
  // CodeBlock
  "chevrons",
  // ErrorCircle
  "star",
] as const;

export type IconTypes = typeof ICON_TYPES[number];

export const ICON_COLORS = [
  "white",
  "black-75",
  "mineral-10",
  "mineral-20",
  "mineral-30",
  "mineral-40",
  "mineral-60",
  "mineral-70",
  "mineral-80",
  "mineral-90",
  "teal-40",
  "teal-60",
  "teal-70",
  "purple-40",
  "purple-60",
  "purple-70",
] as const;

export type IconColorTypes = typeof ICON_COLORS[number];

export const TAG_COLORS = [
  "mineral",
  "teal",
  "purple",
  "green",
  "red",
  "yellow",
  "cyan",
  "orange",
  "pink",
] as const;

export type TagTypes = typeof TAG_COLORS[number];
