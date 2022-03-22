import React, { Component } from "react";
import PropTypes from "prop-types";

import { DropdownTag, TagItem } from "../Tags";
import { Button } from "../Button";
import { dropdownOptions } from "./propTypes";
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
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
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
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;
    const { onClose, onOpen } = this.props;

    if (isOpen !== prevState.isOpen) {
      if (isOpen) onOpen();
      else onClose();
    }
  }

  onClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  onSelect = (selectedOption) => {
    this.setState((prev) => ({
      ...prev,
      isOpen: false,
      selectedOption,
    }));
  };

  onBlur = (event) => {
    const { relatedTarget, currentTarget } = event;

    /** hasNoRelatedTarget helps to avoid blur inside the component */
    const hasNoRelatedTarget = !currentTarget.contains(relatedTarget);

    if (hasNoRelatedTarget) {
      this.setState((prev) => ({ ...prev, isOpen: false }));
    }
  };

  setDefaultOption = (defaultOption) => {
    this.setState({ selectedOption: defaultOption });
  };

  render() {
    const { onClick, onSelect, onBlur, setDefaultOption } = this;
    const { children, color, text, dropdownType } = this.props;
    const { isOpen, selectedOption } = this.state;

    const isOpenClass = isOpen ? "lab-dropdown__content--is-open" : "";

    const trigger = {
      button: <Button text={selectedOption.text || text} />,
      tag: <DropdownTag text={selectedOption.text || text} color={color} />,
    };
    const renderTrigger = trigger[dropdownType];

    return (
      <div className="lab-dropdown" onBlur={onBlur}>
        <div
          role="button"
          tabIndex={-1}
          aria-haspopup="true"
          className="lab-dropdown__trigger"
          id="lab-dropdown__trigger"
        >
          <TriggerWithCustomEvents onClickEvent={onClick}>
            {renderTrigger}
          </TriggerWithCustomEvents>
        </div>

        <div
          role="listbox"
          tabIndex={0}
          className={`lab-dropdown__content lab-dropdown__listbox ${isOpenClass}`}
          id="lab-dropdown__listbox"
        >
          {React.Children.map(children, (child) => {
            const isSectionTitle = child.type === SectionTitle;
            // change it to || child.type == OptionItem...
            const isDropdownItem = child.type === TagItem;
            if (isSectionTitle)
              return <child.type {...child.props} color={color} />;

            if (isDropdownItem)
              return (
                <OptionWithCustomEvents
                  onSelect={onSelect}
                  color={color}
                  selectedOption={selectedOption}
                  setDefaultOption={setDefaultOption}
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
