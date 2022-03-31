import React, { Component } from "react";
import { PropTypes } from "prop-types";

export default class DropdownSectionTitle extends Component {
  static propTypes = {
    text: PropTypes.node.isRequired,
    color: PropTypes.string,
  };

  static defaultProps = {
    color: "teal",
  };

  render() {
    const { text, color } = this.props;
    return (
      <span
        className={`lab-dropdown__section-title lab-dropdown__section-title--color-${color}`}
      >
        {text}
      </span>
    );
  }
}
