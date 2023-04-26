export interface BaseButtonProps {
  /** This is the button label. */
  label: string;
  /** HTML type of the Button. */
  type?: "button" | "submit" | "reset";
  /** Sets the icon related to the button label. Default state: no icon. */
  hasIcon?: boolean;
  /* Enables the Button to render an Icon */
  icon?: IconTypes;
  /** Sets the button's height. Small = 32px, Normal = 40px, Large = 48px. */
  size?: "normal" | "small" | "large";
  /** Disables the Button. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the Button. Won't be read by screen readers. */
  disabled?: boolean;
  /** Action to be executed when the button is clicked. */
  onClick?: (event: SyntheticEvent) => any;
  /** Makes the button expand to its container's full width. */
  fullWidth?: boolean;
  /* Sets the order of which the elements will be focused on. Default value: 0. */
  tabIndex?: number;
}
