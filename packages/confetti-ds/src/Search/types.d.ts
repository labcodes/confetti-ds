export interface BaseSearchProps {
  /** Text that will serve as unique identifier. It's also an important accessibility tool. */
  id: string;
  /** Text that will be rendered inside the Input field. */
  value?: string | number;
  /** Action to be executed when the Search default value changes. */
  onChange?: (event?: SyntheticEvent) => any;
  /** Action to be executed when the search is performed. */
  onSearch?: (event?: SyntheticEvent) => any;
  /** Action to be executed when the Search is cleared out. */
  onClear?: (event?: SyntheticEvent) => any;
}
