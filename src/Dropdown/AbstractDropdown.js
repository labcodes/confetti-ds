import React, { Component, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import { Button } from "../Button";
import { dropdownOptions } from "./propTypes";
import DropdownSectionTitle from "./DropdownSectionTitle";
import DropdownOption from "./DropdownOption";
import TagDropdownItem from "./TagDropdownItem";
import TagDropdownTrigger from "./TagDropdownTrigger";

const expectedKeys = [
  "ArrowDown",
  "ArrowUp",
  "PageDown",
  "PageUp",
  "Escape",
  " ",
];

export default function AbstractDropdown({
  // handleSelectDropdownOption,
  // handleBlur,
  // setDefaultOption,
  // setTriggerRef,
  // setOptionsRefs,
  text,
  id,
  color,
  dropdownType,
  handleTriggerInteraction,
  children,
  onSelect,
  onClose,
  onOpen,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerRef, setTriggerRef] = useState(ref);
  const [displayText, setDisplayText] = useState();
  const optionsRefList = useRef([]);
  const ref = useRef();
  const selected = useRef({ ref });

  const isOpenClass = isOpen ? "lab-dropdown__content--is-open" : "";

  // //  será que não seria melhor reescrever para um custom Hook?
  // function setSelected(ref) {}

  const [lastFocusedOption, setLastFocusedOption] = useState(null);

  /**
   This custom Hook fetches the previous value to use as a param to compare with the
   */
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
      return ref.current;
    });

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

    // componentDidUpdate

    /**
     This function helps the user to reset the dropdown to a desired value.

     This value needs to be in the optionRefList. If it's not, nothing changes.
     */
    const updateSelectedValueFromProps = (value) => {
      // const { getOptionIndexByValue } = this;
      // const { optionsRefList } = this.state;

      const refIndex = getOptionIndexByValue(value);

      const refNotFound = _.isUndefined(refIndex);
      if (refNotFound) return;

      const ref = optionsRefList[refIndex];
      const { textContent } = ref.current;
      setIsOpen(false);
      setDisplayText(textContent);
      setSelected({ ref });
    };

    useEffect(() => {
      if (value !== usePrevious(value)) {
        if (_.isUndefined(value)) return;
        updateSelectedValueFromProps(value);
      }

      if (isOpen !== usePrevious(isOpen)) {
        if (isOpen === false) {
          triggerRef.current.focus();

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
    }, []);

    /**  This function forwards the event to the correct handler when the
     user selects or interacts via keyboard with the trigger.
     */

    handleTriggerInteraction = ({ event }) => {
      const { handleKeyDown, handleTriggerClick } = this;
      const eventType = event.type;
      const isSpace = event.key === " ";
      switch (eventType) {
        case "keydown":
          if (isSpace) handleTriggerClick();
          handleKeyDown(event);
          break;

        case "click":
          handleTriggerClick();
          break;
        default:
          break;
      }
    };

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
     This function gets selected option ref index in the refList state index

     It receives the selected option as param.

     If there is no selected option it returns 0, else it search in the refList for the selected.ref
     */
    const getSelectedOptionIndex = (selected) => {
      if (!selected.ref) return 0;
      const index = optionsRefList.findIndex(
        (ref) => ref.current.id === selected.ref.current.id
      );
      return index === -1 ? 0 : index;
    };

    /**
     This function is called when user clicks at the DropdownTrigger

     It opens and close the dropdown popup and sets the lastFocusedOption
     */
    const handleTriggerClick = () => {
      const focusedIndex = getSelectedOptionIndex(selected);
      setIsOpen(!isOpen);
      setLastFocusedOption(focusedIndex);
    };

    /**
     This function is called when user press ArrowDown/Up, PageUp/Down, Escape keys.

     It verifies and sets the lastFocusedOption state
     */
    const handleKeyDown = (event) => {
      // const { expectedKeys } = this;
      const { key } = event;

      const notExpectedKey = !expectedKeys.includes(key);
      if (notExpectedKey) return;

      event.preventDefault();

      // const { isOpen, optionsRefList, selected, lastFocusedOption } = this.state;
      const isEsc = key === "Escape";
      const isClosed = !isOpen;

      const maxIndex = optionsRefList.length - 1;
      const firstOptionRef = optionsRefList[0];
      const lastOptionRef = optionsRefList[maxIndex];

      if (isEsc) {
        const focusedIndex = getSelectedOptionIndex(selected);
        setIsOpen(false);
        setLastFocusedOption(focusedIndex);
        return;
      }

      if (isClosed) {
        const focusedIndex = getSelectedOptionIndex(selected);
        setIsOpen(true);
        setLastFocusedOption(focusedIndex);
        return;
      }

      let focusedIndex = lastFocusedOption.index;
      let focusedOption;

      switch (key) {
        case "PageDown":
          lastOptionRef.current.focus();
          focusedIndex = maxIndex;
          setLastFocusedOption(focusedIndex);
          break;
        case "PageUp":
          firstOptionRef.current.focus();
          focusedIndex = 0;
          setLastFocusedOption(focusedIndex);
          break;
        case "ArrowDown":
          if (focusedIndex === maxIndex) return;

          focusedIndex += 1;
          focusedOption = optionsRefList[focusedIndex];
          focusedOption.current.focus();

          setLastFocusedOption(focusedIndex);
          break;
        case "ArrowUp":
          if (focusedIndex === 0) return;

          focusedIndex -= 1;
          focusedOption = optionsRefList[focusedIndex];
          focusedOption.current.focus();

          setLastFocusedOption(focusedIndex);
          break;

        default:
          break;
      }
    };

    /**
     This function is called at the DropdownOption component when the user clicks on an option (if this option is not disabled).
     An option is an object which has an event (a custom event), ref (react ref to the option HTML element), and the index of the option.
     */
    const handleSelectDropdownOption = (option, event) => {
      // const { onSelect } = this.props;
      // const { event, ref } = option;

      setIsOpen(false);
      setSelected({ ref });
      setDisplayText(ref.current.textContent);
      usePrevious(option);

      onSelect(event);
    };

    /**
     This function is called when user clicks outside the dropdown area.
     */
    const handleBlur = (event) => {
      const { relatedTarget, currentTarget } = event;

      /** hasNoRelatedTarget helps to avoid blur inside the component */
      const hasNoRelatedTarget = !currentTarget.contains(relatedTarget);

      if (hasNoRelatedTarget) {
        setIsOpen(false);
        usePrevious(...prev);
      }
    };

    /**
     This function is called at the DropdownOption component when it has the 'selected' prop marked as true
     */
    const setDefaultOption = () => {
      const { ref, text } = defaultOption;
      // const defaultOption = useRef({ ...ref, text });
      setDisplayText(defaultOption);
      // this.setState({ selected: { ref }, displayText: text });
    };
    /**  This function forwards the event to the correct handler
     when the user selects or moves the keyboard through the options.
     */
    const handleOptionInteraction = ({ event, ref }) => {
      const eventType = event.type;
      const isSpace = event.key === " ";

      switch (eventType) {
        case "keydown":
          if (isSpace) handleTriggerClick({ event, ref });
          handleKeyDown(event);
          break;

        case "click":
          handleTriggerClick();
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
        this.setState((prev) => {
          const filteredRefList = prev.optionsRefList.filter(
            (prevRef) => prevRef.current.id !== ref.current.id
          );
          return {
            ...prev,
            optionsRefList: [...filteredRefList, ref],
          };
        });
      }
    };

    const trigger = {
      button: <Button text={displayText} />,
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
    // Select the trigger by mapping the dropdown type
    const renderTrigger = trigger[dropdownType];
    return (
      <div className="lab-dropdown" onBlur={handleBlur}>
        {renderTrigger}

        <div
          role="menu"
          className={`lab-dropdown__content lab-dropdown__listbox ${isOpenClass}`}
          aria-labelledby={`menu-button--menu--${id}`}
          tabIndex="-1"
          id={`menu--${id}`}
        >
          {React.Children.map(children, (child, index) => {
            const isDropdownSectionTitle =
              child.type === DropdownSectionTitle ||
              child.type.name === "DropdownSectionTitle" ||
              child.displayName === "DropdownSectionTitle";
            // change it to || child.type == OptionItem...
            const isDropdownItem =
              child.type === TagDropdownItem ||
              child.type.name === "TagDropdownItem" ||
              child.displayName === "TagDropdownItem";

            if (isDropdownSectionTitle)
              return <child.type {...child.props} color={color} />;
            const isSelected = displayText === child.props.text;
            if (isDropdownItem)
              return (
                <DropdownOption
                  handleSelectDropdownOption={handleSelectDropdownOption}
                  color={color}
                  selectedOption={selected}
                  setDefaultOption={setDefaultOption}
                  handleKeyDown={handleKeyDown}
                  handleInteraction={handleOptionInteraction}
                  index={index}
                  id={id}
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
}
