import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button } from "../Button";
import { dropdownOptions } from "./propTypes";
import DropdownSectionTitle from "./DropdownSectionTitle";
import DropdownOption from "./DropdownOption";
import TagDropdownItem from "./TagDropdownItem";
import TagDropdownTrigger from "./TagDropdownTrigger";

export default class AbstractDropdown extends Component {
  static propTypes = {
    /** Function called after the dropdown is opened. */
    onOpen: PropTypes.func,
    /** Function called after the dropdown is closed. */
    onClose: PropTypes.func,
    /** Function called when the user selects one valid option. */
    onSelect: PropTypes.func.isRequired,
    /** This is the dropdown type, and it can be a tag or button dropdown. */
    dropdownType: PropTypes.oneOf(dropdownOptions.types).isRequired,
    /** This is the dropdown color, and it will set the color of its section title and trigger. */
    color: PropTypes.string,
    /** This is the dropdown default trigger title. It will mount with this default text until the user selects an option. */
    defaultText: PropTypes.string.isRequired,
    /** This is the dropdown of children. It can be a TagDropdownItem or a SectionTitle, and if the user doesn't pass a child, it will throw an error. */
    children: PropTypes.node.isRequired,
    /** This is the dropdown id. It requires a unique id. */
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    // props
    color: "teal",
    // functions
    onOpen: () => {},
    onClose: () => {},
  };

  expectedKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Escape", " "];

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      optionsRefList: [],
      selected: { ref: null },
      lastFocusedOption: { index: null },
      displayText: props.defaultText,
    };
  }

  componentDidMount() {
    const { checkIfHasChildren } = this;

    checkIfHasChildren();
  }

  componentDidUpdate(prevProps, prevState) {
    const { triggerRef, checkIfHasChildren } = this;

    const { isOpen, selected, optionsRefList } = this.state;

    const { onClose, onOpen } = this.props;

    if (isOpen !== prevState.isOpen) {
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
  }

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

  handleOptionInteraction = ({ event, ref }) => {
    const eventType = event.type;
    const isSpace = event.key === " ";
    const { handleKeyDown, handleSelectDropdownOption } = this;
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
    This function verifies if the dropdown has no children and throw a error if is the case.
  */
  checkIfHasChildren = () => {
    const { children } = this.props;

    const hasNoChildren = !React.Children.count(children);
    if (hasNoChildren)
      throw Error("You need to pass children to the dropdown component.");
  };

  /**
    This function is called when user clicks at the DropdownTrigger

    It opens and close the dropdown popup and sets the lastFocusedOption
  */
  handleTriggerClick = () => {
    const { isOpen, selected } = this.state;
    const focusedIndex = this.getSelectedOptionIndex(selected);
    this.setState({
      isOpen: !isOpen,
      lastFocusedOption: { index: focusedIndex },
    });
  };

  /**
    This function gets selected option ref index in the refList state index

    It receives the selected option as param.

    If there is no selected option it returns 0, else it search in the refList for the selected.ref
  */
  getSelectedOptionIndex = (selected) => {
    if (!selected.ref) return 0;
    const { optionsRefList } = this.state;
    const index = optionsRefList.findIndex(
      (ref) => ref.current.id === selected.ref.current.id
    );
    return index === -1 ? 0 : index;
  };

  /**
    This function is called when user press ArrowDown/Up, PageUp/Down, Escape keys.

    It verifies and sets the lastFocusedOption state
  */
  handleKeyDown = (event) => {
    const { expectedKeys } = this;
    const { key } = event;

    const notExpectedKey = !expectedKeys.includes(key);
    if (notExpectedKey) return;

    event.preventDefault();

    const { isOpen, optionsRefList, selected, lastFocusedOption } = this.state;
    const isEsc = key === "Escape";
    const isClosed = !isOpen;

    const maxIndex = optionsRefList.length - 1;
    const firstOptionRef = optionsRefList[0];
    const lastOptionRef = optionsRefList[maxIndex];

    if (isEsc) {
      const focusedIndex = this.getSelectedOptionIndex(selected);
      this.setState({
        isOpen: false,
        lastFocusedOption: { index: focusedIndex },
      });
      return;
    }

    if (isClosed) {
      const focusedIndex = this.getSelectedOptionIndex(selected);
      this.setState({
        isOpen: true,
        lastFocusedOption: { index: focusedIndex },
      });
      return;
    }

    let focusedIndex = lastFocusedOption.index;
    let focusedOption;

    switch (key) {
      case "PageDown":
        lastOptionRef.current.focus();
        focusedIndex = maxIndex;
        this.setState({ lastFocusedOption: { index: focusedIndex } });
        break;
      case "PageUp":
        firstOptionRef.current.focus();
        focusedIndex = 0;
        this.setState({ lastFocusedOption: { index: focusedIndex } });
        break;
      case "ArrowDown":
        if (focusedIndex === maxIndex) return;

        focusedIndex += 1;
        focusedOption = optionsRefList[focusedIndex];
        focusedOption.current.focus();

        this.setState({ lastFocusedOption: { index: focusedIndex } });
        break;
      case "ArrowUp":
        if (focusedIndex === 0) return;

        focusedIndex -= 1;
        focusedOption = optionsRefList[focusedIndex];
        focusedOption.current.focus();

        this.setState({ lastFocusedOption: { index: focusedIndex } });
        break;

      default:
        break;
    }
  };

  /**
    This function is called at the DropdownOption component when the user clicks on an option (if this option is not disabled).
    An option is an object which has an event (a custom event), ref (react ref to the option HTML element), and the index of the option.
  */
  handleSelectDropdownOption = (option) => {
    const { onSelect } = this.props;
    const { event, ref } = option;
    this.setState((prev) => ({
      ...prev,
      isOpen: false,
      selected: { ref },
      displayText: ref.current.textContent,
    }));

    onSelect(event);
  };

  /**
    This function is called when user clicks outside the dropdown area.
  */
  handleBlur = (event) => {
    const { relatedTarget, currentTarget } = event;

    /** hasNoRelatedTarget helps to avoid blur inside the component */
    const hasNoRelatedTarget = !currentTarget.contains(relatedTarget);

    if (hasNoRelatedTarget) {
      this.setState((prev) => ({
        ...prev,
        isOpen: false,
      }));
    }
  };

  /**
    This function is called at the DropdownOption component when it has the 'selected' prop marked as true
  */
  setDefaultOption = (defaultOption) => {
    const { ref, text } = defaultOption;
    this.setState({ selected: { ref }, displayText: text });
  };

  /**
    This function is called at the DropdownOption component

    It sets React Refs to refList state when the option does not have the disabled prop marked as true
  */
  setOptionsRefs = (ref) => {
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

  /**
    This function is called at the DropdownTrigger component

    It sets React Ref to the trigger button
  */
  setTriggerRef = (ref) => {
    this.triggerRef = ref;
  };

  render() {
    const {
      handleKeyDown,
      handleSelectDropdownOption,
      handleBlur,
      setDefaultOption,
      setTriggerRef,
      setOptionsRefs,
      handleTriggerInteraction,
      handleOptionInteraction,
    } = this;
    const { children, color, dropdownType, id } = this.props;
    const { isOpen, displayText, selected } = this.state;

    const isOpenClass = isOpen ? "lab-dropdown__content--is-open" : "";

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
