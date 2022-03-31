import React, { Component } from "react";
import PropTypes from "prop-types";

import { DropdownTag, TagItem } from "../Tags";
import { Button } from "../Button";
import { dropdownOptions } from "./propTypes";
import DropdownSectionTitle from "./DropdownSectionTitle";
import DropdownTrigger from "./DropdownTrigger";
import DropdownOption from "./DropdownOption";

export default class AbstractDropdown extends Component {
  static propTypes = {
    // functions
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    // props
    dropdownType: PropTypes.oneOf(dropdownOptions.types).isRequired,
    color: PropTypes.string,
    defaultText: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    // props
    color: "teal",
    // functions
    onOpen: () => {},
    onClose: () => {},
  };

  expectedKeys = {
    ArrowDown: true,
    ArrowUp: true,
    PageDown: true,
    PageUp: true,
    Escape: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      refList: [],
      selected: { ref: null, index: null },
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

    const { isOpen, selected, refList } = this.state;

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
        const firstOption = refList[0];
        if (firstOption) firstOption.current.focus();
      }

      onOpen();
    }

    checkIfHasChildren();
  }

  checkIfHasChildren = () => {
    const { children } = this.props;

    const hasNoChildren = !React.Children.count(children);
    if (hasNoChildren)
      throw Error("You need to pass children to the dropdown component.");
  };

  handleTriggerClick = () => {
    const { isOpen, selected } = this.state;
    const focusedIndex = this.getSelectedOptionIndex(selected);
    this.setState({
      isOpen: !isOpen,
      lastFocusedOption: { index: focusedIndex },
    });
  };

  getSelectedOptionIndex = (selected) => {
    if (!selected.ref) return 0;
    const { refList } = this.state;
    const index = refList.findIndex((ref) => ref === selected.ref);
    return index === -1 ? 0 : index;
  };

  handleKeyUp = (event) => {
    const { expectedKeys } = this;
    const { key } = event;

    const notExpectedKey = !expectedKeys[key];
    if (notExpectedKey) return;

    const { isOpen, refList, selected, lastFocusedOption } = this.state;
    const isEsc = key === "Escape";
    const isClosed = !isOpen;

    const maxIndex = refList.length - 1;
    const firstOptionRef = refList[0];
    const lastOptionRef = refList[maxIndex];

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
        focusedOption = refList[focusedIndex];
        focusedOption.current.focus();

        this.setState({ lastFocusedOption: { index: focusedIndex } });
        break;
      case "ArrowUp":
        if (focusedIndex === 0) return;

        focusedIndex -= 1;
        focusedOption = refList[focusedIndex];
        focusedOption.current.focus();

        this.setState({ lastFocusedOption: { index: focusedIndex } });
        break;

      default:
        break;
    }
  };

  handleSelectDropdownOption = (option) => {
    const { onSelect } = this.props;
    const { event, ref, index } = option;
    this.setState((prev) => ({
      ...prev,
      isOpen: false,
      selected: { ref, index },
      displayText: event.target.name,
    }));

    onSelect(event);
  };

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

  setDefaultOption = (defaultOption) => {
    const { ref, text, index } = defaultOption;
    this.setState({ selected: { ref, index }, displayText: text });
  };

  setOptionsRefs = (ref) =>
    this.setState((prev) => ({ ...prev, refList: [...prev.refList, ref] }));

  setTriggerRef = (ref) => {
    this.triggerRef = ref;
  };

  render() {
    const {
      handleTriggerClick,
      handleKeyUp,
      handleSelectDropdownOption,
      handleBlur,
      setDefaultOption,
      setTriggerRef,
      setOptionsRefs,
    } = this;
    const { children, color, dropdownType, id } = this.props;
    const { isOpen, displayText, selected } = this.state;

    const isOpenClass = isOpen ? "lab-dropdown__content--is-open" : "";

    const trigger = {
      button: <Button text={displayText} />,
      tag: <DropdownTag text={displayText} color={color} />,
    };

    const renderTrigger = trigger[dropdownType];

    return (
      <div className="lab-dropdown" onBlur={handleBlur}>
        <DropdownTrigger
          handleTriggerClick={handleTriggerClick}
          handleKeyUp={handleKeyUp}
          id={id}
          setRef={setTriggerRef}
        >
          {renderTrigger}
        </DropdownTrigger>

        <div
          role="menu"
          className={`lab-dropdown__content lab-dropdown__listbox ${isOpenClass}`}
          aria-labelledby={`menu-button--menu--${id}`}
          tabIndex="-1"
          id={`menu--${id}`}
        >
          {React.Children.map(children, (child, index) => {
            const isDropdownSectionTitle = child.type === DropdownSectionTitle;
            // change it to || child.type == OptionItem...
            const isDropdownItem = child.type === TagItem;

            if (isDropdownSectionTitle)
              return <child.type {...child.props} color={color} />;

            if (isDropdownItem)
              return (
                <DropdownOption
                  handleSelectDropdownOption={handleSelectDropdownOption}
                  color={color}
                  selectedOption={selected}
                  setDefaultOption={setDefaultOption}
                  handleKeyUp={handleKeyUp}
                  index={index}
                  id={id}
                  setRef={setOptionsRefs}
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
