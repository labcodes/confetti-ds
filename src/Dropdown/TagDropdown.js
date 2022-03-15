import React, { Component } from "react";
import { PropTypes } from "prop-types";

import AbstractDropdown from "./AbstractDropdown";

export default class TagDropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    text: "foo",
    color: "teal",
  };

  render() {
    const { children, text, color } = this.props;
    return (
      <AbstractDropdown dropdownType="tag" text={text} color={color}>
        {children}
      </AbstractDropdown>
    );
  }
}
