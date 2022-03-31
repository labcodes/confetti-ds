import React, { Component } from "react";
import { PropTypes } from "prop-types";

import AbstractDropdown from "./AbstractDropdown";

export default class TagDropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    defaultText: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
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
