import React from "react";
import AbstractTag from "../Tags/AbstractTag";
import { DropdownTag } from "../Tags";

export default class TagDropdownTrigger extends DropdownTag {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  render() {
    const {
      text,
      icon,
      color,
      skin,
      isOutline,
      disabled,
      ariaDisabled,
      onInteraction,
      tabIndex,
      setRef,
    } = this.props;

    return (
      <AbstractTag
        className={`lab-tag--dropdown${`${
          icon ? ` lab-tag--has-left-icon` : ""
        }`}`}
        text={text}
        icon={icon}
        color={color}
        skin={skin}
        isOutline={isOutline}
        disabled={!ariaDisabled && disabled}
        ariaDisabled={ariaDisabled}
        renderPrefix={this.icon()}
        renderSuffix={this.dropdownIcon()}
        tabIndex={tabIndex}
        onInteraction={onInteraction}
        isDropdown
        setRef={setRef}
        role="listbox"
      />
    );
  }
}
