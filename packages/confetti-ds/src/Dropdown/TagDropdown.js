import React, { Component } from "react";
import { PropTypes } from "prop-types";

import AbstractDropdown from "./AbstractDropdown";

export default class TagDropdown extends Component {
  static propTypes = {
    /** This function fires when user open the dropdown by (or pressing keys of the keyboard) on its trigger. */
    onOpen: PropTypes.func,
    /** This function fires when user closes the dropdown by clicking (or pressing keys of the keyboard) on its trigger or changing the focus to another component. */
    onClose: PropTypes.func,
    /** This function fires when user select one valid option. */
    onSelect: PropTypes.func.isRequired,
    /** This is the dropdown color, it will be applied on its section title and trigger. */
    color: PropTypes.string,
    /** This is the dropdown default trigger title. It will mount with this default text until the user select an option */
    defaultText: PropTypes.string.isRequired,
    /** This is the dropdown children. It can be a TagItem or a SectionTitle, if user doesn't pass a child, it will throw an error. */
    children: PropTypes.node.isRequired,
    /** This is the dropdown id. It is necessary an unique id */
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: "teal",
    onOpen: () => {},
    onClose: () => {},
  };

  render() {
    const { children, defaultText, color, onOpen, onClose, onSelect, id } =
      this.props;
    return (
      <AbstractDropdown
        dropdownType="tag"
        defaultText={defaultText}
        color={color}
        onOpen={onOpen}
        onClose={onClose}
        onSelect={onSelect}
        id={id}
      >
        {children}
      </AbstractDropdown>
    );
  }
}
