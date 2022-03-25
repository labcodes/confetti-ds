import React, { Component } from "react";
import PropTypes from "prop-types";

import { DropdownTag, TagItem } from "../Tags";
import { Button } from "../Button";
import { dropdownOptions, expectedKeys } from "./propTypes";
import SectionTitle from "./SectionTitle";
import TriggerWithCustomEvents from "./TriggerWithCustomEvents";
import OptionWithCustomEvents from "./OptionWithCustomEvents";

export default class AbstractDropdown extends Component {
  static propTypes = {
    // functions
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    // props
    dropdownType: PropTypes.oneOf(dropdownOptions.types).isRequired,
    onSelect: PropTypes.func.isRequired,
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
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

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedOption: {},
      currentOption: 0,
      currentIndex: 0,
    };

    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    const { firstChild: trigger, lastChild: listBox } =
      this.dropdownRef.current || {};
    this.triggerRef = trigger.firstChild;

    const optionsIndexes = [...listBox.children]
      .map((item, index) => {
        const isOption =
          item.matches(".lab-dropdown__option") &&
          !item.matches(".lab-dropdown__option--disabled");
        if (isOption) return index;
        return null;
      })
      .filter((availableIndex) => availableIndex !== null);

    const firstValidOptionIndex = 0;
    const rangeLimit = optionsIndexes.length - 1;

    this.listBoxRef = listBox;

    this.setState({
      currentIndex: firstValidOptionIndex,
      currentOption: optionsIndexes[firstValidOptionIndex],
    });

    this.optionsRange = [firstValidOptionIndex, rangeLimit];
    this.optionsIndexes = optionsIndexes;
  }

  componentDidUpdate(prevProps, prevState) {
    const { triggerRef } = this;
    const [minOptionIndex] = this.optionsRange;
    const hasNoChildren = minOptionIndex === undefined;
    const { isOpen, currentOption } = this.state;
    const { onClose, onOpen } = this.props;

    if (isOpen !== prevState.isOpen) {
      if (isOpen === false) {
        triggerRef.focus();
        onClose();
        return;
      }

      onOpen();

      if (hasNoChildren) return;

      this.listBoxRef.scrollTo({ top: 0 });

      const validOption = this.listBoxRef.children[currentOption];
      const button = validOption.children[0];
      const isOption =
        button && button.matches(".lab-dropdown__invisible-button");
      if (isOption) button.focus();
    }

    if (currentOption !== prevState.currentOption) {
      if (hasNoChildren) return;

      const validOption = this.listBoxRef.children[currentOption];
      const button = validOption.children[0];
      const isOption =
        button && button.matches(".lab-dropdown__invisible-button");
      if (isOption) button.focus();
    }
  }

  onClickEvent = () => {
    const { isOpen, selectedOption } = this.state;
    this.setState({ isOpen: !isOpen, currentOption: selectedOption.index });
  };

  onKeyUpEvent = (event) => {
    const { optionsIndexes } = this;
    const { currentOption, isOpen, currentIndex } = this.state;
    const [minOptionIndex, maxOptionIndex] = this.optionsRange;
    const { key } = event;

    const notExpectedKey = !expectedKeys[key];
    const isClosed = !isOpen;
    const isEsc = key === "Escape";
    const isFirstOption =
      optionsIndexes[minOptionIndex] === optionsIndexes[currentIndex];
    const isLastOption =
      optionsIndexes[maxOptionIndex] === optionsIndexes[currentIndex];

    if (notExpectedKey) return;

    if (isEsc) {
      this.setState({
        isOpen: false,
      });
      return;
    }

    if (isClosed) {
      this.setState({
        currentOption,
        currentIndex,
        isOpen: true,
      });
      return;
    }

    let newOption;
    let newIndex;

    switch (key) {
      case "PageDown":
        newIndex = maxOptionIndex;
        newOption = optionsIndexes[newIndex];
        break;
      case "PageUp":
        newIndex = minOptionIndex;
        newOption = optionsIndexes[newIndex];
        break;
      case "ArrowDown":
        if (isLastOption) return;
        newIndex = currentIndex + 1;
        newOption = optionsIndexes[newIndex];
        break;
      case "ArrowUp":
        if (isFirstOption) return;
        newIndex = currentIndex - 1;
        newOption = optionsIndexes[newIndex];
        break;

      default:
        break;
    }

    this.setState((prev) => ({
      ...prev,
      isOpen: true,
      currentOption: newOption,
      currentIndex: newIndex,
    }));
  };

  onSelectEvent = (option) => {
    const { onSelect } = this.props;
    const { event, currentValue } = option;
    this.setState((prev) => ({
      ...prev,
      isOpen: false,
      selectedOption: currentValue,
    }));

    onSelect(event);
  };

  onBlurEvent = (event) => {
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
    this.setState({ selectedOption: defaultOption });
  };

  render() {
    const {
      onClickEvent,
      onSelectEvent,
      onBlurEvent,
      onKeyUpEvent,
      setDefaultOption,
      dropdownRef,
    } = this;
    const { children, color, text, dropdownType, id } = this.props;
    const { isOpen, selectedOption } = this.state;

    const isOpenClass = isOpen ? "lab-dropdown__content--is-open" : "";

    const trigger = {
      button: <Button text={selectedOption.text || text} />,
      tag: <DropdownTag text={selectedOption.text || text} color={color} />,
    };
    const renderTrigger = trigger[dropdownType];

    return (
      <div className="lab-dropdown" onBlur={onBlurEvent} ref={dropdownRef}>
        <TriggerWithCustomEvents
          onClickEvent={onClickEvent}
          onKeyUpEvent={onKeyUpEvent}
          id={id}
        >
          {renderTrigger}
        </TriggerWithCustomEvents>

        <div
          role="menu"
          className={`lab-dropdown__content lab-dropdown__listbox ${isOpenClass}`}
          aria-labelledby={`menu-button--menu--${id}`}
          tabIndex="-1"
          id={`menu--${id}`}
        >
          {React.Children.map(children, (child, index) => {
            const isSectionTitle = child.type === SectionTitle;
            // change it to || child.type == OptionItem...
            const isDropdownItem = child.type === TagItem;

            if (isSectionTitle)
              return <child.type {...child.props} color={color} />;

            if (isDropdownItem)
              return (
                <OptionWithCustomEvents
                  onSelectEvent={onSelectEvent}
                  color={color}
                  selectedOption={selectedOption}
                  setDefaultOption={setDefaultOption}
                  onKeyUpEvent={onKeyUpEvent}
                  index={index}
                  id={id}
                >
                  {child}
                </OptionWithCustomEvents>
              );

            return null;
          })}
        </div>
      </div>
    );
  }
}
