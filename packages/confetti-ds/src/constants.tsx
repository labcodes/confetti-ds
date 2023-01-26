export const ICON_TYPES = [
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-top",
  "calendar",
  "coin",
  "collapse-closed",
  "collapse-open",
  "check",
  "dropdown-closed",
  "dropdown-open",
  "edit",
  "eye-closed",
  "eye-opened",
  "track",
  "key",
  "logout",
  "magnifying-glass",
  "minus",
  "plus",
  "reload",
  "remove",
  "sort",
  "star",
  "trash",
  "upload",
  "arrow-fill-right",
  "arrow-fill-left",
  "chevron-right",
  "chevron-left",
  "menu-expand",
  "menu-collapse",
  "menu-default",
  "external",
  "wallet",
  "workspace",
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
];

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
];


export type TagTypes = typeof TAG_COLORS[number];
