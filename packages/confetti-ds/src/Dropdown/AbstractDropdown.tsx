import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  SyntheticEvent,
  ReactNode,
} from "react";
import { isUndefined } from "lodash";

import DropdownSectionTitle from "./DropdownSectionTitle";
import DropdownOption from "./DropdownOption";
import TagDropdownItem from "./TagDropdownItem";
import TagDropdownTrigger from "./TagDropdownTrigger";
import { Button } from "../Button";
import { usePrevious } from "../hooks";

interface AbstractDropdownProps {
  /** Function called after the dropdown is opened. */
  onOpen?: (event?: SyntheticEvent) => any;
  /** Function called after the dropdown is closed. */
  onClose?: (event?: SyntheticEvent) => any;
  /** Function called when the user selects one valid option. */
  onSelect: (event?: SyntheticEvent) => any;
  /** This is the dropdown type, and it can be a tag or button dropdown. */
  dropdownType: "tag" | "button";
  /** This is the dropdown color, and it will set the color of its section title and trigger. */
  color?: "white" | "mineral" | "teal" | "purple";
  /** This is the dropdown default trigger title. It will mount with this default text until the user selects an option. */
  defaultText: string;
  /** This is the dropdown of children. It can be a TagDropdownItem or a SectionTitle, and if the user doesn't pass a child, it will throw an error. */
  children: any;
  /** This is the dropdown id. It requires a unique id. */
  id: string;
  value?: string | number;
}

export default function AbstractDropdown({
  onOpen = () => {},
  onClose = () => {},
  onSelect,
  dropdownType,
  color = "teal",
  defaultText,
  children,
  id,
  value = "",
}: AbstractDropdownProps) {
  const expectedKeys = [
    "ArrowDown",
    "ArrowUp",
    "PageDown",
    "PageUp",
    "Escape",
    " ",
  ];
  const ref = useRef<HTMLButtonElement>();
  const [triggerRef, setTriggerRef] = useState(ref);
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState(defaultText);
  const [optionsRefList, setOptionsRefList] = useState([]);

  const previousValue = usePrevious(value);
  const previousIsOpen = usePrevious(isOpen);
  const [selected, setSelected] = useState({ ref: null });

  const isOpenClass = isOpen ? "lab-dropdown__content--is-open" : "";

  const [lastFocusedOption, setLastFocusedOption] = useState({ index: null });

  /**
   This function verifies if the dropdown has no children and throw a error if is the case.
   */
  const checkIfHasChildren = () => {
    const hasNoChildren = !React.Children.count(children);
    if (hasNoChildren)
      throw Error("You need to pass children to the dropdown component.");
  };

  // componentDidMount
  useEffect(() => {
    checkIfHasChildren();
  }, []);

  /**
   This function gets selected option ref index in the refList state index

   It receives the value of the option as param.

   If there is no ref with that value in the refList it returns undefined,
   else it returns the index where it found the ref.
   */
  const getOptionIndexByValue = (value) => {
    const index = optionsRefList.findIndex(
      (ref) => ref.current.value === value
    );
    return index === -1 ? undefined : index;
  };

  /**
   This function helps the user to reset the dropdown to a desired value.

   This value needs to be in the optionRefList. If it's not, nothing changes.
   */
  const updateSelectedValueFromProps = (value) => {
    const refIndex = getOptionIndexByValue(value);

    const refNotFound = isUndefined(refIndex);
    if (refNotFound) return;

    const ref = optionsRefList[refIndex];
    const { textContent } = ref.current;
    setIsOpen(false);
    setSelected({ ref });
    setDisplayText(textContent);
  };

  // componentDidUpdate
  useEffect(() => {
    if (value === previousValue) {
      if (isUndefined(value)) return;
      updateSelectedValueFromProps(value);
    }

    if (!isUndefined(previousIsOpen) && isOpen !== previousIsOpen) {
      if (isOpen === false) {
        if (triggerRef.current) triggerRef.current.focus();

        onClose();
        return;
      }

      const hasSelectedOption = selected.ref;
      if (hasSelectedOption) selected.ref.current.focus();
      else {
        const firstOption = optionsRefList[Object.keys(optionsRefList)[0]];
        if (firstOption) firstOption.current.focus();
      }

      onOpen();
    }

    checkIfHasChildren();
  }, [value, isOpen, selected.ref]);

  /**
   This function gets selected option ref index in the refList state index

   It receives the selected option as param.

   If there is no selected option it returns 0, else it search in the refList for the selected.ref
   */

  const getSelectedOptionIndex = (optSelected) => {
    if (!optSelected.ref) return 0;
    const index = optionsRefList.findIndex(
      (ref) => ref.current.id === optSelected.ref.current.id
    );
    return index === -1 ? 0 : index;
  };

  /**
   This function is called when user clicks at the DropdownTrigger

   It opens and close the dropdown popup and sets the lastFocusedOption

   The useCallback hook updates the new refs from selected
   */

  const handleTriggerClick = useCallback(() => {
    const focusedIndex = getSelectedOptionIndex(selected);
    setIsOpen(!isOpen);
    setLastFocusedOption({ index: focusedIndex });
  }, [selected, isOpen]);

  /**
   This function is called when user press ArrowDown/Up, PageUp/Down, Escape keys.

   It verifies and sets the lastFocusedOption state
   */
  const handleKeyDown = (event) => {
    const { key } = event;
    let focusedIndex = lastFocusedOption.index;
    let focusedOption;

    const notExpectedKey = !expectedKeys.includes(key);
    if (notExpectedKey) return;

    event.preventDefault();

    const isEsc = key === "Escape";
    const isClosed = !isOpen;

    const maxIndex = optionsRefList.length - 1;
    const firstOptionRef = optionsRefList[0];
    const lastOptionRef = optionsRefList[maxIndex];

    if (isEsc) {
      const focusedIndex = getSelectedOptionIndex(selected);
      setIsOpen(false);
      setLastFocusedOption({ index: focusedIndex });
      return;
    }

    if (isClosed) {
      const focusedIndex = getSelectedOptionIndex(selected);
      setIsOpen(true);
      setLastFocusedOption({ index: focusedIndex });
      return;
    }
    switch (key) {
      case "PageDown":
        lastOptionRef.current.focus();
        focusedIndex = maxIndex;
        setLastFocusedOption({ index: focusedIndex });
        break;
      case "PageUp":
        firstOptionRef.current.focus();
        focusedIndex = 0;
        setLastFocusedOption({ index: focusedIndex });
        break;
      case "ArrowDown":
        if (focusedIndex === maxIndex) return;

        focusedIndex += 1;
        focusedOption = optionsRefList[focusedIndex];
        focusedOption.current.focus();

        setLastFocusedOption({ index: focusedIndex });
        break;
      case "ArrowUp":
        if (focusedIndex === 0) return;

        focusedIndex -= 1;
        focusedOption = optionsRefList[focusedIndex];
        focusedOption.current.focus();

        setLastFocusedOption({ index: focusedIndex });
        break;

      default:
        break;
    }
  };

  /**  This function forwards the event to the correct handler when the
   user selects or interacts via keyboard with the trigger.
   */

  const handleTriggerInteraction = ({ event }) => {
    const eventType = event.type;
    const isSpace = event.key === " ";
    switch (eventType) {
      case "keydown":
        if (isSpace) handleTriggerClick();
        handleKeyDown({ event });
        break;
      case "click":
        handleTriggerClick();
        break;
      default:
        break;
    }
  };

  /**
   This function is called at the DropdownOption component when the user clicks on an option (if this option is not disabled).
   An option is an object which has an event (a custom event), ref (react ref to the option HTML element), and the index of the option.
   */
  const handleSelectDropdownOption = (option) => {
    const { event, ref } = option;

    setIsOpen(false);
    selected.ref = { ref };
    setSelected({ ref });
    setDisplayText(ref.current.textContent);

    onSelect(event);
  };

  /**
   This function is called when user clicks outside the dropdown area.
   */
  const handleBlur = (event) => {
    const { relatedTarget, currentTarget } = event;

    /** hasNoRelatedTarget helps to avoid blur inside the component */
    const hasNoRelatedTarget = !currentTarget.contains(relatedTarget);

    if (hasNoRelatedTarget && previousIsOpen !== isOpen) {
      setIsOpen(false);
    }
  };

  /**
   This function is called at the DropdownOption component when it has the 'selected' prop marked as true
   */
  const setDefaultOption = (defaultOption) => {
    const { ref, text } = defaultOption;
    // const defaultOption = useRef({ ...ref, text });
    setDisplayText(text);
    setSelected({ ref });
  };

  /**  This function forwards the event to the correct handler
   when the user selects or moves the keyboard through the options.
   */
  const handleOptionInteraction = ({ event, ref }) => {
    const eventType = event.type;
    const isSpace = event.key === " ";

    switch (eventType) {
      case "keydown":
        if (isSpace) handleSelectDropdownOption({ event, ref });
        handleKeyDown(event);
        break;

      case "click":
        handleSelectDropdownOption({ event, ref });
        break;
      default:
        break;
    }
  };

  /**
   This function is called at the DropdownOption component

   It sets React Refs to refList state when the option does not have the disabled prop marked as true
   */
  const setOptionsRefs = (ref) => {
    if (ref.current && !ref.current.disabled) {
      setOptionsRefList((prev) => {
        const filteredRefList = prev.filter(
          (prevRef) => prevRef.current.id !== ref.current.id
        );
        return [...filteredRefList, ref];
      });
    }
  };

  // Select the trigger by mapping the dropdown type
  const trigger = {
    button: <Button label={displayText} />,
    tag: (
      <TagDropdownTrigger
        text={displayText}
        color={color}
        isOutline
        setRef={setTriggerRef}
        onInteraction={handleTriggerInteraction}
      />
    ),
  };

  const renderTrigger = trigger[dropdownType];

  return (
    <div className="lab-dropdown" onBlur={handleBlur}>
      {renderTrigger}

      <div
        role="menu"
        className={`lab-dropdown__content lab-dropdown__listbox ${isOpenClass}`}
        aria-labelledby={`menu-button--menu--${id}`}
        tabIndex={-1}
        id={`menu--${id}`}
      >
        {React.Children.map(children, (child, index) => {
          const isDropdownSectionTitle =
            child.type === DropdownSectionTitle ||
            child.type === "DropdownSectionTitle";
          // change it to || child.type == OptionItem...
          const isDropdownItem =
            child.type === TagDropdownItem || child.type === "TagDropdownItem";

          if (isDropdownSectionTitle)
            return <child.type {...child.props} color={color} />;
          const isSelected = displayText === child.props.text;
          if (isDropdownItem)
            return (
              <DropdownOption
                setDefaultOption={setDefaultOption}
                handleInteraction={handleOptionInteraction}
                setRef={setOptionsRefs}
                isSelected={isSelected}
              >
                {child}
              </DropdownOption>
            );

          return null;
        })}
      </div>
    </div>
  );
}
