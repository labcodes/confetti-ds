import React, { Component } from "react";
import { PropTypes } from "prop-types";

import AbstractDropdown from "./AbstractDropdown";

export default class TagDropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
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
    const { children, text, color, onOpen, onClose, onSelect } = this.props;
    return (
      <AbstractDropdown
        dropdownType="tag"
        text={text}
        color={color}
        onOpen={onOpen}
        onClose={onClose}
        onSelect={onSelect}
      >
        {children}
      </AbstractDropdown>
    );
  }
}
