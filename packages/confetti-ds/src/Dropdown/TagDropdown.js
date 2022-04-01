import React, { Component } from "react";
import { PropTypes } from "prop-types";

import AbstractDropdown from "./AbstractDropdown";

export default class TagDropdown extends Component {
  static propTypes = {
    /** Function called after the dropdown is opened. */
    onOpen: PropTypes.func,
    /** Function called after the dropdown is closed. */
    onClose: PropTypes.func,
    /** Function called when the user selects one valid option. */
    onSelect: PropTypes.func.isRequired,
    /** This is the dropdown color, and it will set the color of its section title and trigger. */
    color: PropTypes.string,
    /** This is the dropdown default trigger title. It will mount with this default text until the user selects an option. */
    defaultText: PropTypes.string.isRequired,
    /** This is the dropdown of children. It can be a TagItem or a SectionTitle, and if the user doesn't pass a child, it will throw an error. */
    children: PropTypes.node.isRequired,
    /** This is the dropdown id. It requires a unique id. */
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
