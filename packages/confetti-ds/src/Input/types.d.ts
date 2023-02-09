export interface BaseTextInputProps {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: string;
  /** The Input's text label. */
  label: string;
  /** Disables the text input. Will be read by screen readers. When true, will override `disabled`. */
  ariaDisabled?: boolean;
  /** Disables the text input. Won't be read by screen readers. */
  disabled?: boolean;
  /** Defines a default value for the Input initialization. */
  defaultValue?: string;
  /** Value that will be rendered inside the Input field. */
  value?: string;
  /** Defines if the Input is required. */
  required?: boolean;
  /** Text that will be displayed as a help message below the input. */
  helpMessage?: string;
  /** Text that will be displayed at the left portion of the Input. */
  prefix?: string;
  /** Text that will be displayed at the end of the Input. */
  suffix?: string;
  /** Custom error message displayed below the Input when the value is not valid. */
  customErrorMsg?: string;
  /** Callback action to be executed when the Input default value changes. */
  onChange?: (event?: SyntheticEvent) => any;
}
