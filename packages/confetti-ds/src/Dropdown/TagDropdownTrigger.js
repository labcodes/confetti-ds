import React from "react";
import AbstractTag from "../Tags/AbstractTag";
import { DropdownTag } from "../Tags";

export default class TagDropdownTrigger extends DropdownTag {
  render() {
    const {
      text,
      icon,
      color,
      skin,
      isOutline,
      disabled,
      ariaDisabled,
      onClick,
      tabIndex,
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
        onClick={onClick}
        renderPrefix={this.icon()}
        renderSuffix={this.dropdownIcon()}
        tabIndex={tabIndex}
      />
    );
  }
}
